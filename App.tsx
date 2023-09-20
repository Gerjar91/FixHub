import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './View/Landing';
import Home from './View/Home';
import Workers from './View/Workers';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{
            headerShown: false,
          }} />
        <Stack.Screen
          name="Home"
          component={Home}
          />
        <Stack.Screen
          name="Workers"
          component={Workers}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#351A81",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
