import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface SafeAreaContainerProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

export default function SafeAreaContainer({ children, style }: SafeAreaContainerProps) {
    return (
        <SafeAreaView style={[{ flex: 1 }, style]}>
            {children}
        </SafeAreaView>
    );
}
