import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import TochableButton from "../components/ui/TochableButton";


export default function Index() {
  const router = useRouter();
  return (
    <View style={styles.flexContainer}>
      <Text style={styles.container_title}>Expense Tracker</Text>
      <Text style={styles.container_subtitle}>Welcome to your budget manager</Text>

      <TochableButton text="로그인" onPress={() => router.push("/login")} />
      <TochableButton text="회원가입" onPress={() => router.push("/register")} />
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
    color: "#ffffff",
    marginBottom: 8,
  },
  container_subtitle: {
    fontSize: 16,
    color: "#6c757d",
    marginBottom: 32,
  },
});
