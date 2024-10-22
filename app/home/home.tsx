import { Text, View } from "react-native";
import { type ErrorBoundaryProps } from "expo-router";

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
    return (
      <View style={{ flex: 1, backgroundColor: "red" }}>
        <Text>{error.message}</Text>
        <Text onPress={retry}>Try Again?</Text>
      </View>
    );
  }


export default function Home() {
    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}