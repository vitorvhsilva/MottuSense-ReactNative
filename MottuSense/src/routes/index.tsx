import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { AdicionarMoto } from '../screens/AdicionarMoto'
import { ViewMotorcycleScreen } from '../screens/ViewMotorcycleScreen';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="ViewMotorcyclesScreen"
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AdicionarMoto" component={AdicionarMoto} />
      <Stack.Screen name="ViewMotorcyclesScreen" component={ViewMotorcycleScreen} />
    </Stack.Navigator>
  );
}