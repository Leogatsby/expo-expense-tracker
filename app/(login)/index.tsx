import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { useAuthStore } from "@/store/authStore";
import CustomButton from "@/components/ui/CustomButton";
import { theme } from "@/constants/theme";

export default function Login() {
    const router = useRouter();
    const { login } = useAuthStore();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <CustomButton text="Login (Go to Tab)" onPress={() => login()} />
            <CustomButton text="Register" onPress={() => router.push("/register")} />
            <CustomButton text="Terms" onPress={() => router.push("/terms")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: theme.colors.text,
    },
});
