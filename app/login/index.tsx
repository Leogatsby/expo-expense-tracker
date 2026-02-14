import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import CustomButton from "../../components/ui/CustomButton";
import { theme } from "@/constants/theme";

export default function Login() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <CustomButton text="Back to Home" onPress={() => router.push("/")} />
            <CustomButton text="LoginBrother" onPress={() => router.push("/login/loginbrother")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: theme.colors.text,
    },
});
