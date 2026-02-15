import { StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";
import CustomButton from "@/components/ui/CustomButton";
import { theme } from "@/constants/theme";
import SafeAreaContainer from "@/components/ui/SafeAreaContainer";

export default function Terms() {
    const router = useRouter();
    return (
        <SafeAreaContainer>
            <View style={styles.container}>
                <Text style={styles.title}>Terms and Conditions</Text>
                <Text style={styles.text}>Welcome to the expense tracker app terms.</Text>
                <CustomButton text="Back" onPress={() => router.back()} />
            </View>
        </SafeAreaContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: theme.colors.text,
    },
    text: {
        fontSize: 16,
        color: theme.colors.text,
        textAlign: "center",
        marginBottom: 20,
    }
});
