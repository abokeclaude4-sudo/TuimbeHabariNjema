import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const songs = {
  "1-0": {
  title: "Yesu Kristu Amezaliwa",
  lyrics: `
1. Yesu Kristu, amen; Yesu Kristu, amen; Yesu Kristu, amen;
   Njooni wote, tumshangilie,Amezaliwa

Kiitikio: Mwokozi wetu, njooni wote tumshangilie.

2. Siku ya leo: Amen 
   amezaliwa : Amen
   na amani na mapendo; aleluya.

3. Siku ya leo: Amen
   wachungaji: Amen
   na majusi wamwangalia Betlehemu.

4.Na sisi woteAmen
   wa dunia : Amen
   tufurahiwe na Mwokozi, aleluya.

5. Sifa kwa Baba: amen;
   sifa kwa Mwana : Amen;
   na kwa Roho Mtakatifu, aleluya.
`,
},

  "1-1": {
    title: "AHADI YA MUNGU IMETIMIA",
    lyrics: `
    Kiitikio:  Ahadi ya Mungu imetiya : aleluya;
                 yu(po) kati yetu Emanuel; aleluya
                 Aleluya, aleluya, aleluya (2)
1. Twende tukamwone mwana, tukamtolee sadaka zetu:
   Umaskini wa roho na mwili
2. Wa ngambo zote za dunia waweza kumwona
   Bila ubaguzi wa kabila ao wa rangi.
`,
  },

  "1-2": {
    title: "Gloria, Sifa Kwa Mungu",
    lyrics: `
Gloria, gloria,
sifa kwa Mungu juu mbinguni.
`,
  },
};

export default function SongScreen() {
  const { id } = useLocalSearchParams();

  const song = songs[id as keyof typeof songs];

  if (!song) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Song not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{song.title}</Text>

      <Text style={styles.lyrics}>
        {song.lyrics}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fffdf5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  lyrics: {
    fontSize: 18,
    lineHeight: 30,
  },
});