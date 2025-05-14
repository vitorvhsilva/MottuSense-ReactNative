import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AddMotorcycle } from '../screens/AddMotorcycle';
import AuthScreen from '../screens/AuthScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { NotificationScreen } from '../screens/NotificacoesScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { ViewMotorcycleScreen } from '../screens/ViewMotorcycleScreen';
import { UserConfig } from '../screens/UserConfig';
import { SeeCourtyardScreen } from '../screens/SeeCourtyard';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="SeeCourtyard"
      screenOptions={{
        headerShown: false,
        animation: 'fade',
      }}
    >
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AddMotorcycle" component={AddMotorcycle} />
      <Stack.Screen name="ViewMotorcyclesScreen" component={ViewMotorcycleScreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="UserConfig" component={UserConfig} />
      <Stack.Screen name="SeeCourtyard" component={SeeCourtyardScreen} />
    </Stack.Navigator>
  );
}