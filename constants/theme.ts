import { MD3LightTheme } from 'react-native-paper';

const customColors = {
    brandMain: "#007AFF", // 좀 더 스탠다드한 블루 (iOS 스타일)
    successGreen: "#34C759",
    buttonPrimary: "#007AFF", // 버튼도 일단 블루계열로 (원하시면 변경 가능)
};

export const theme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        primary: "#007AFF",
        onPrimary: "#ffffff",
        text: "#000000", // 검은색 글자
        background: "#ffffff", // 흰색 배경
        surface: "#ffffff",
        ...customColors,
    },
};
