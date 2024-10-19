import { Text, View } from "react-native";
import { Link } from 'expo-router';

export default function User() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>user page</Text>

      <Link style={{ marginTop: 10 }} href="/about">Redirect to Home</Link>


    </View>
  );
}
