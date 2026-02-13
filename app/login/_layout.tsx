import { Stack } from "expo-router";

export default function LoginLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: "#1063b7" },
            }}
        >
            <Stack.Screen name="index" options={{ title: "로그인" }} />
            <Stack.Screen name="loginbrother" options={{ title: "브라더 로그인" }} />
        </Stack>
    );
}
