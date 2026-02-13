import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import { useEffect } from "react";
import { Platform, View } from "react-native";

export default function RootLayout() {
  useEffect(() => {
    async function configureSystemBars() {
      if (Platform.OS === "android") {
        await NavigationBar.setButtonStyleAsync("light");
      }
    }
    configureSystemBars();
  }, []);

  return (
    <>
      <StatusBar style="dark" />
      {/*시간 와이파이 적히는곳의 색깔*/}
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#1063b7" },
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="login" />{/*사실상 명시화 역할만 함*/}
        <Stack.Screen name="register" />
      </Stack >
    </ >
  );
}
