import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

const DrawerNavigator = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="user/[id]" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'User',
            title: 'overview',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  )
}

// const RootStackTmp = () => {
//   const RootStack = createStackNavigator();

//   return (
//     <RootStack.Navigator>
//       <RootStack.Group>
//         <RootStack.Screen name="Home" component={null} />
//       </RootStack.Group>
//       <RootStack.Group screenOptions={{ presentation: 'modal' }}>
//         <RootStack.Screen name="MyModal" component={null} />
//       </RootStack.Group>
//     </RootStack.Navigator>
//   );
// }



export default function Layout() {
  return <DrawerNavigator />
}
