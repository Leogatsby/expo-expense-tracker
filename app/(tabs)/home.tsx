import { StyleSheet, Text, View } from "react-native";
import { theme } from "@/constants/theme";
import SafeAreaContainer from "@/components/ui/SafeAreaContainer";

export default function HomeScreen() {
    return (
        <SafeAreaContainer>
            <View style={styles.container}>
                <Text style={styles.title}>가계부 홈</Text>
                <Text style={styles.subtitle}>오늘의 지출을 기록해보세요.</Text>
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
        color: theme.colors.text,
    },
    subtitle: {
        fontSize: 16,
        color: theme.colors.text,
        marginTop: 8,
    },
});
