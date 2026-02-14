import { Stack } from "expo-router";
import { StatusBar as NotchTopBar } from "expo-status-bar";
import * as BottomBar from "expo-navigation-bar";
import { PaperProvider as GlobalCssProvider } from 'react-native-paper';
import { theme } from "@/constants/theme";
import SafeAreaContainer from "@/components/ui/SafeAreaContainer";
import { useEffect } from "react";
import { Platform } from "react-native";



export default function RootLayout() {
  useEffect(() => {
    async function ConfigBottomBar() {
      if (Platform.OS === "android") {
        await BottomBar.setButtonStyleAsync("dark"); // 검은색 버튼으로 변경
      }
    }
    ConfigBottomBar();
  }, []);

  return (
    <SafeAreaContainer style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <GlobalCssProvider theme={theme}>
        <NotchTopBar style="dark" />
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor: theme.colors.background },
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen name="login" />{/*사실상 명시화 역할만 함*/}
          <Stack.Screen name="register" />
        </Stack >
      </GlobalCssProvider>
    </SafeAreaContainer>
  );
}
