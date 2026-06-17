import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const categories = [
  "Nyimbo za Kuingia",
  "Nyimbo za Noeli",
  "Nyimbo za Kwaresma",
  "Nyimbo za Pasaka",
  "Nyimbo za Komunyo",
];

export default function ContentsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Yaliyomo</Text>

      {categories.map((category, index) => (
        <Link
          key={index}
          href={`/${index}`}
          style={styles.category}
        >
          {category}
        </Link>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fffdf5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  category: {
    fontSize: 18,
    padding: 16,
    marginBottom: 12,
    backgroundColor: "#f2e6d8",
    borderRadius: 10,
  },
});