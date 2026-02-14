import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import CustomButton from "../../components/ui/CustomButton";
import { theme } from "@/constants/theme";

export default function LoginBrother() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>LoginBrother</Text>
            <CustomButton text="Back to Login" onPress={() => router.push("/login")} />
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
