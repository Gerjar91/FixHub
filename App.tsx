import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './View/Landing';
import Home from './View/Home';
import Workers from './View/Workers';
import { useFonts } from '@expo-google-fonts/montserrat';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  const Stack = createStackNavigator();
  const [fontsLoaded] = useFonts({ Montserrat: require('./assets/Fonts/Montserrat-Medium.ttf') });

  const CustomHeader = () => {
    // Aquí puedes importar tu imagen personalizada o proporcionar la URL de la imagen
    const customHeaderImage = require('./assets/FixHubSplash.png');

    return (
      <Image source={customHeaderImage} style={{ marginLeft: 10, width: 95, height: 45 }} />
    );
  };

  if (!fontsLoaded) {
    return (
      <LinearGradient
        colors={['#351A81', '#1F1146']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.linearGradient}
      >
        <View style={[styles.container, styles.horizontal]}>

          <ActivityIndicator size="large" color="#FF2D5A" />
        </View>
      </LinearGradient>

    )
      ; // Puedes mostrar un indicador de carga u otro componente
  }else  return (
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
          options={{
            title: "",
            headerStyle: { height: 80, elevation: 0 },
            headerTitleStyle: { color: "white" },
            headerLeft: () => <CustomHeader />

          }}
        />
        <Stack.Screen
          name="Workers"
          component={Workers}
          options={{
            title: "ir a Home",
            headerStyle: { height: 80, elevation: 0 },
            headerTitleStyle:{marginLeft:-18}
            
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  linearGradient: {
    flex: 1,
    width: "100%",

  },
});
