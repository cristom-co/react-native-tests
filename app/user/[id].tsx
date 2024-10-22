import { Text, View, Button } from "react-native";
import { Link, useRouter } from 'expo-router';

export default function User() {

  const router = useRouter();

  //dismiss the current screen
  const handleDissmiss = (count: number) => {
    if(router.canDismiss()) {
      router.dismiss(count);
    }
  }
  
  //dismiss all screens
  const handleDismissAll = () => {
    router.dismissAll();
  }

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


      <Button title="Dismiss" onPress={() => handleDissmiss(1)} />
      
      <View style={{ marginVertical: 5 }} />

      <Button title="Dismiss All" onPress={() => handleDismissAll()} />
    </View>
  );
}
