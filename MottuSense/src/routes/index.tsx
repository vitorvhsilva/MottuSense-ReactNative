import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../screens/AuthScreen';
import { SignUpScreen } from '../screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="SignUp"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  );
}