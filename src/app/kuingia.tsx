import { StyleSheet, Text, View } from "react-native";

export default function KuingiaScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NYIMBO ZA KUINGIA</Text>

      <Text style={styles.song}>1. USHANGILIWE KWA MAAJABU</Text>
      <Text style={styles.song}>2. NAPIGA HODI</Text>
      <Text style={styles.song}>3. MAKABILA YOTE YA WATU</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5EFE6",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
  },
  song: {
    fontSize: 20,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
});