import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const categories = [
  {
    title: "Nyimbo za Kuingia",
    songs: ["Asiregee Moyo We", "Twendeni Nyumbani mwa Bwana"],
  },
  {
    title: "Nyimbo za Noeli",
    songs: ["Usiku Mtakatifu", "Noeli Njema"],
  },
  {
    title: "Nyimbo za Kwaresma",
    songs: ["Ee Yesu Mkombozi", "Tubuni na Kusali"],
  },
  {
    title: "Nyimbo za Pasaka",
    songs: ["Kristo Amefufuka", "Aleluya Bwana Yu Hai"],
  },
  {
    title: "Nyimbo za Komunyo",
    songs: ["Karibu Meza ya Bwana", "Pokea Mwili wa Kristo"],
  },
];

export default function CategoryScreen() {
  const { id } = useLocalSearchParams();

  const categoryIndex = Number(id);
  const category = categories[categoryIndex];

  if (!category) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Category not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.title}</Text>

      {category.songs.map((song, index) => (
        <Text key={index} style={styles.song}>
          {song}
        </Text>
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
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  song: {
    fontSize: 18,
    padding: 16,
    marginBottom: 12,
    backgroundColor: "#f2e6d8",
    borderRadius: 10,
  },
});