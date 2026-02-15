import { StyleSheet, Text, View } from "react-native";
import { theme } from "@/constants/theme";
import { useAuthStore } from "@/store/authStore";
import CustomButton from "@/components/ui/CustomButton";
import SafeAreaContainer from "@/components/ui/SafeAreaContainer";

export default function ProfileScreen() {
    const { logout } = useAuthStore();

    return (
        <SafeAreaContainer>
            <View style={styles.container}>
                <View style={styles.profileInfo}>
                    <Text style={styles.title}>내 프로필</Text>
                    <Text style={styles.subtitle}>사용자 정보를 확인하세요.</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <CustomButton
                        text="로그아웃"
                        onPress={logout}
                    />
                </View>
            </View>
        </SafeAreaContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    profileInfo: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        alignItems: "center",
        marginBottom: 40,
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
