import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import AppRoutes from './src/routes';
import theme from './src/styles/theme';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Poppins_400Regular, Poppins_700Bold, useFonts } from '@expo-google-fonts/poppins';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins_400Regular': Poppins_400Regular,
    'Poppins_700Bold': Poppins_700Bold, // Adicione esta linha
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar 
          barStyle="light-content" 
          backgroundColor={theme.colors.preto} 
        />
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}