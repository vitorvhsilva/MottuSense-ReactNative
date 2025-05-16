// src/config/toastConfig.ts
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../styles/theme';

export const toastConfig = {
  /* 
   * Estilo para toasts de erro
   * Customize conforme seu tema
   */
  error: ({ text1, text2 }) => (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText1}>{text1}</Text>
      {text2 && <Text style={styles.errorText2}>{text2}</Text>}
    </View>
  ),
  
  /*
   * Estilo para toasts de sucesso
   */
  success: ({ text1, text2 }) => (
    <View style={styles.successContainer}>
      <Text style={styles.successText1}>{text1}</Text>
      {text2 && <Text style={styles.successText2}>{text2}</Text>}
    </View>
  ),
  
  /*
   * Estilo para toasts de informação
   */
  info: ({ text1, text2 }) => (
    <View style={styles.infoContainer}>
      <Text style={styles.infoText1}>{text1}</Text>
      {text2 && <Text style={styles.infoText2}>{text2}</Text>}
    </View>
  )
};

const styles = StyleSheet.create({
  // Estilo para erros
  errorContainer: {
    width: '90%',
    padding: 15,
    backgroundColor: theme.colors.vermelhoErro, // Adicione ao seu tema
    borderRadius: 10,
    borderLeftColor: theme.colors.vermelhoEscuro,
    borderLeftWidth: 5,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});