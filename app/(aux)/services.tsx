import { Text, View } from "react-native";
import { Link } from 'expo-router';

export default function Services() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>About page</Text>
      <Link style={{ marginTop: 10 }} href="/">Redirect to Services</Link>
    </View>
  );
}
