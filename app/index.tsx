import { Pressable, Text, View } from "react-native";
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Cristhian Tombe</Text>
      <Text>Frontend Developer</Text>

      <Link style={styles.buttonRedirect} href="/user/123" asChild>
        <Pressable>
          <Text style={styles.TextButtonRedirect}>Redirect to User</Text>
        </Pressable>
      </Link>

      <Link style={styles.buttonRedirect} href="/about">
        <Pressable>
          <Text style={styles.TextButtonRedirect}>Redirect to About</Text>
        </Pressable>
      </Link>

    </View>
  );
  
}
  const styles = StyleSheet.create({
    buttonRedirect: {
      marginTop: 10, backgroundColor: '#000', padding: 10, borderRadius: 5 
    },
    TextButtonRedirect: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold'
    },
  });
