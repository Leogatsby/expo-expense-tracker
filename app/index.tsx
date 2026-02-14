import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/ui/CustomButton";
import { theme } from "@/constants/theme";


export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.flexContainer}>
      <Text style={styles.container_title}>백광일 가계부 앱</Text>
      <Text style={styles.container_subtitle}>앞으로 내 개인 가계부를 만들어보자</Text>

      <CustomButton text="로그인" onPress={() => router.push("/login")} />
      <CustomButton text="회원가입" onPress={() => router.push("/register")} />
    </View>
  );
}


export const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container_title: {
    fontSize: 28,
    fontWeight: "bold",
    color: theme.colors.text,
    marginBottom: 8,
  },
  container_subtitle: {
    fontSize: 16,
    color: theme.colors.text,
    marginBottom: 32,
  },
});
