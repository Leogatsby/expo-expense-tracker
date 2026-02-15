import { Stack } from "expo-router";
import { StatusBar as NotchTopBar } from "expo-status-bar";
import * as BottomBar from "expo-navigation-bar";
import { PaperProvider as GlobalCssProvider } from 'react-native-paper';
import { theme } from "@/constants/theme";
import SafeAreaContainer from "@/components/ui/SafeAreaContainer";
import { useEffect } from "react";
import { Platform } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import Loading from "@/components/ui/Loading";
import { useAuthStore } from "@/store/authStore";
import { useLocalStore } from "@/store/LocalStorageStore";

export default function RootLayout() {
  const authStore = useAuthStore();
  //const LocalStorageStore = useLocalStore('auth-storage');

  // BottomBar 설정
  useEffect(() => {
    async function ConfigBottomBar() {
      if (Platform.OS === "android") {
        await BottomBar.setButtonStyleAsync("dark");
      }
    }
    ConfigBottomBar();
  }, []);

  // // 디버깅용 로그
  // useEffect(() => {
  //   console.log('현재 LocalStore 데이터:', LocalStorageStore);
  //   console.log('현재 authStore 전체 상태:', authStore);
  // }, [LocalStorageStore, authStore]);

  if (!authStore._hasHydrated) {
    return <Loading />;
  }

  // 주석이하 부분은 절대 코드 건들지마

  return (
    <SafeAreaProvider>
      <GlobalCssProvider theme={theme}>
        <NotchTopBar style="dark" />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: theme.colors.background },
          }}
        >
          <Stack.Protected guard={authStore.isLoggedIn}>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack.Protected>
          <Stack.Protected guard={!authStore.isLoggedIn}>
            <Stack.Screen name="(login)" options={{ headerShown: false }} />
          </Stack.Protected>
        </Stack >
      </GlobalCssProvider >
    </SafeAreaProvider>
  );
}
