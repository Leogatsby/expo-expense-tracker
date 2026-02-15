import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import CustomButton from "@/components/ui/CustomButton";
import { theme } from "@/constants/theme";
import SafeAreaContainer from "@/components/ui/SafeAreaContainer";

export default function Register() {
    const router = useRouter();
    return (
        <SafeAreaContainer>
            <View style={styles.container}>
                <Text style={styles.title}>Register</Text>
                <CustomButton text="Back to Login" onPress={() => router.back()} />
            </View>
        </SafeAreaContainer>
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
