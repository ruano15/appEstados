import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Estado } from './src/pages/Estado'
import { Municipio } from './src/pages/Municipio';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: '#005E9B'},
        headerTintColor: 'white'
      }}
      >
        <Stack.Screen name='Estado' component={Estado} />
        <Stack.Screen name='Municipio' component={Municipio} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}