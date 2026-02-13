import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import TochableButton from "../../components/ui/TochableButton";

export default function LoginBrother() {
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>LoginBrother</Text>
            <TochableButton text="Back to Login" onPress={() => router.push("/login")} />
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
        color: "#ffffff",
    },
});
