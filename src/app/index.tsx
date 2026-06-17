import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TUIMBE HABARI NJEMA</Text>

      <Text style={styles.subtitle}>
        Kitabu cha nyimbo za Kanisa Katoliki
      </Text>

      <Link href="/contents" style={styles.button}>
        Fungua Kitabu
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#fffdf5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 14,
    paddingHorizontal: 24,
    backgroundColor: "#7a1f1f",
    color: "white",
    borderRadius: 10,
  },
});