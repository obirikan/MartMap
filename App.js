import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/Screens/Map'

const Stack=createStackNavigator ()

export default function App() {


  return (
    <NavigationContainer independent={true} >
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

