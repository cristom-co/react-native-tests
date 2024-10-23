import { Text, View, Button, StyleSheet } from "react-native";
import { Link, useRouter } from 'expo-router';
import { ScrollView } from "react-native-gesture-handler";

export default function User() {

  const router = useRouter();

  //dismiss the current screen
  const handleDissmiss = (count: number) => {
    if (router.canDismiss()) {
      router.dismiss(count);
    }
  }

  //dismiss all screens
  const handleDismissAll = () => {
    router.dismissAll();
  }

  // Crear un array de 100 elementos con números incrementales
  const users = Array.from({ length: 100 }, (_, index) => index + 1);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>user page</Text>

      <Link style={{ marginVertical: 10 }} href="/about">Redirect to Home</Link>

      <View style={{ gap: 5, marginVertical: 5 }}>
        <Button title="Dismiss" onPress={() => handleDissmiss(1)} />
        <Button title="Dismiss All" onPress={() => handleDismissAll()} />
      </View>

      <ScrollView style={styles.ScrollUser}>
        {users.map((item) => (
          <Text key={item} style={styles.textUser}>User {item}</Text>
        ))}
      </ScrollView>

      <ScrollView horizontal={true} style={styles.scrollViewHorizontal}>
      {users.map((item) => (
          <Text key={item} style={styles.TextUserHorizontal}>User {item}</Text>
        ))}
      </ScrollView>


    </View>
  );
}

const styles = StyleSheet.create({
  ScrollUser: {
    marginTop: 10,
    maxHeight: 200,
    minWidth: 300,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 10,
    padding: 20
  },
  textUser: {
    marginVertical: 5,
    backgroundColor: "#b8b8b8",
    borderRadius: 5,
    padding: 5,
    color: "white"
  },

  scrollViewHorizontal: {
    flexGrow: 0,
    marginVertical: 20,
    maxWidth: 300,
    minHeight: 200
  },
  TextUserHorizontal: {
    marginHorizontal: 5,
    padding: 10,
    backgroundColor: '#b8b8b8',
    borderRadius: 5,
    color: "white"
  }
})