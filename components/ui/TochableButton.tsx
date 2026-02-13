import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface TochableButtonProps {
    text: string;
    onPress: () => void;
}

export default function TochableButton({ text, onPress }: TochableButtonProps) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#9de615ff",
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        width: "80%",
        alignItems: "center",
        marginBottom: 8,
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 18,
        fontWeight: "600",
    },
});
