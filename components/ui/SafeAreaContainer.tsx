import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { theme } from "@/constants/theme";

interface SafeAreaContainerProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
}

export default function SafeAreaContainer({ children, style }: SafeAreaContainerProps) {
    return (
        <SafeAreaView style={[{ flex: 1, backgroundColor: theme.colors.background }, style]}>
            {children}
        </SafeAreaView>
    );
}
