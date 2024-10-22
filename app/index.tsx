import { Pressable, Text, View } from "react-native";
import { Link, Stack, useNavigation } from 'expo-router';
import { StyleSheet, Image, Button } from 'react-native';
import { useState } from 'react'; 


function LogoTitle(props: any) {
  return (
    <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
  );
}

export default function Index() {

  const [count, setCount] = useState(0);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Stack.Screen
        options={{
          title: 'My home',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: props => <LogoTitle {...props} />,
          headerRight: () => <Pressable onPress={() => setCount(c => c + 1)}>
            <Text style={styles.buttonUpdateCount}>Update count</Text>
          </Pressable>,
        }}
      />

      <Text style={styles.title}>Home Page</Text>
      <Text style={styles.subtitle}>Cristhian Tombe</Text>
      <Text style={styles.subtitle}>Frontend Developer</Text>

      <Text style={styles.subtitle}>Count: {count}</Text>

      <Link style={styles.buttonRedirect} 
        href={{
          pathname: '/user/[id]',
          params: { id: '123' }
        }} asChild>
        <Pressable>
          <Text style={styles.TextButtonRedirect}>Redirect to User - type: dynamic</Text>
        </Pressable>
      </Link>

      <Link style={styles.buttonRedirect} href="/about">
        <Pressable>
          <Text style={styles.TextButtonRedirect}>Redirect to About - type: static</Text>
        </Pressable>
      </Link>

      <Link style={styles.buttonRedirect} push href="/home/contact">
        <Pressable>
          <Text style={styles.TextButtonRedirect}>Redirect to Contact - type: push</Text>
        </Pressable>
      </Link>

      <Link style={styles.buttonRedirect} href="/services" replace>
        <Pressable>
          <Text style={styles.TextButtonRedirect}>Redirect to Services - type: replace</Text>
        </Pressable>
      </Link>

      <Link style={styles.buttonRedirect} href="/term-of-service">
        <Pressable>
          <Text style={styles.TextButtonRedirect}>Redirect to Term of Services - type: group page</Text>
        </Pressable>
      </Link>

      <Link style={styles.buttonRedirect} href="/home-tab">
        <Pressable>
          <Text style={styles.TextButtonRedirect}>Redirect to Home Tab</Text>
        </Pressable>
      </Link>

      <Link href="/modal" style={styles.buttonRedirect}>
        <Pressable>
          <Text style={styles.TextButtonRedirect}>Open modal</Text>
        </Pressable>
      </Link>
    </View>
  );
  
}
  const styles = StyleSheet.create({
    buttonRedirect: {
      marginTop: 10, 
      backgroundColor: '#f4511e', 
      padding: 10, 
      borderRadius: 5,
      width: 300
    },
    TextButtonRedirect: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20
    },
    subtitle: {
      fontSize: 16,
      marginBottom: 10
    },
    image: {
      width: 50,
      height: 50
    },
    buttonUpdateCount: {
      marginRight: 10,
      borderRadius: 5,
      padding: 10,
      backgroundColor: '#fff',
      color: '#f4511e'
    }
  });
