import { create, StateCreator } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { localStore } from './LocalStorageStore';

interface AuthState {
    isLoggedIn: boolean;
    _hasHydrated: boolean; // 스토리지에서 데이터를 다 읽어왔는지 여부
    login: () => void;
    logout: () => void;
    setHasHydrated: (state: boolean) => void;
}

// 1. 순수 스토어 로직 분리 (Set 선언부)
const authStore: StateCreator<AuthState> = (set) => ({
    isLoggedIn: false,
    _hasHydrated: false,
    login: () => set({ isLoggedIn: true }),
    logout: () => set({ isLoggedIn: false }),
    setHasHydrated: (state: boolean) => set({ _hasHydrated: state }),
});

// 2. Persist 설정과 함께 스토어 생성
export const useAuthStore = create<AuthState>()(
    persist(authStore, {
        name: 'auth-storage',
        storage: createJSONStorage(() => localStore),
        version: 1, // 버전을 올려 이전 캐시 데이터(userName 등)를 무시합니다.
        onRehydrateStorage: () => (state) => {
            state?.setHasHydrated(true);
        },
    })
);
