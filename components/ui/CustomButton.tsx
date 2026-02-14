import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { theme } from "@/constants/theme";

interface CustomButtonProps {
    text: string;
    onPress: () => void;
}

export default function CustomButton({ text, onPress }: CustomButtonProps) {
    return (
        <Button
            mode="contained"
            onPress={onPress}
            style={styles.buttonContainer}
            labelStyle={styles.buttonText}
        >
            {text}
        </Button>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: (theme.colors as any).buttonPrimary,
        borderRadius: 8,
        width: "80%",
        marginBottom: 8,
        paddingVertical: 4,
    },
    buttonText: {
        color: theme.colors.onPrimary,
        fontSize: 18,
        fontWeight: "600",
    },
});
