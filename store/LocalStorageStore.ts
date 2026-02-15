import { useState, useEffect } from 'react';
import * as LocalStore from 'expo-secure-store';

// Expo SecureStore를 사용하는 커스텀 스토리지 설정
export const localStore = {
    getItem: (name: string): string | Promise<string | null> => {
        return LocalStore.getItemAsync(name);
    },
    setItem: (name: string, value: string): void | Promise<void> => {
        return LocalStore.setItemAsync(name, value);
    },
    removeItem: (name: string): void | Promise<void> => {
        return LocalStore.deleteItemAsync(name);
    },
};

// 디버깅 등을 위해 스토리지 값을 실시간으로 관찰할 수 있는 훅
export function useLocalStore(key: string) {
    const [data, setData] = useState<string | null>(null);

    useEffect(() => {
        async function loadData() {
            const value = await LocalStore.getItemAsync(key);
            setData(value);
        }
        loadData();
    }, [key]);

    return data;
}
