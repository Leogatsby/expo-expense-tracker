import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { theme } from "@/constants/theme";
import SafeAreaContainer from "./SafeAreaContainer";

export default function Loading() {
    return (
        <SafeAreaContainer style={styles.container}>
            <ActivityIndicator size="large" color={theme.colors.primary} />
            <Text style={styles.text}>가계부 로딩 중...</Text>
        </SafeAreaContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.background,
    },
    text: {
        marginTop: 10,
        fontSize: 16,
        color: theme.colors.text,
    },
});
