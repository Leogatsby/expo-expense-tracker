import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.flexContainer}>
      <Text style={styles.container_title}>Expense Tracker</Text>
      <Text style={styles.container_subtitle}>Welcome to your budget manager</Text>
    </View>
  );
}


export const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
  },
  container_title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1063b7ff",
    marginBottom: 8,
  },
  container_subtitle: {
    fontSize: 16,
    color: "#6c757d",
  },
});
