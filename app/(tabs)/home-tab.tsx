import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';

export default function Tab() {
  return (
    <View style={styles.container}>
      <Text>Tab Home</Text>
      <Link href="/">
        <Pressable>
          <Text style={styles.TextButtonRedirect}>Redirect to Home</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  TextButtonRedirect: {
    color: 'white',
    backgroundColor: '#f4511e',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
    fontWeight: 'bold',
  }
});
