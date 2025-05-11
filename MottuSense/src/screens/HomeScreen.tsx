import React, { useState } from 'react';
import { ScrollView, FlatList, Alert, Button } from 'react-native';
import styled from 'styled-components/native';
import HeaderComponent from '../components/HeaderComponent';
import theme from '../styles/theme';

const HomeScreen = () => {

  return (
    <Container>

      <Content>
        <HomeTitle>Seja bem vindo!</HomeTitle>

        <AuthContent>
          <SignUpButton>
            <ButtonText>Cadastrar</ButtonText>
          </SignUpButton>

          <LoginTitle>
            Já tem uma conta? 
            <LoginLink 
              //onPress={() => navigation.navigate('Login')}  
            >
              <LoginLinkText> Faça login.</LoginLinkText>
            </LoginLink>

          </LoginTitle>
        </AuthContent>
      </Content>
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.preto};
  `;

const Content = styled.View`
  padding: 40px;
  display: flex;
  justify-content: space-between;
  height: 70vh;
  align-items: center;
`;

const AuthContent = styled.View`
  align-items: center;
  width: 100%;
  height: fit-content;
`;

const SignUpButton = styled.TouchableOpacity`
  background-color: ${theme.colors.verdeClaro1};
  padding: 15px;
  margin: 0px 40px;
  width: 80%;
  border-radius: 30px;
  margin-bottom: 20px;
`;

const ButtonText = styled.Text`
  color: ${theme.colors.branco};
  font-weight: ${theme.typography.title.fontWeight};
  font-size: ${theme.typography.title.fontSize};
  text-align: center;
`;

const HomeTitle = styled.Text`
  color: ${theme.colors.branco};
  font-weight: ${theme.typography.subtitle.fontWeight};
  font-size: ${theme.typography.subtitle.fontSize};
`;

const LoginTitle = styled.Text`
  color: ${theme.colors.branco};
  font-weight: ${theme.typography.subtitle.fontWeight};
  font-size: ${theme.typography.subtitle.fontSize};
`;

const LoginLinkText = styled.Text`
  color: ${theme.colors.verdeClaro1};
  font-weight: ${theme.typography.title.fontWeight};
  font-size: ${theme.typography.subtitle.fontSize};
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.verdeClaro1};
`;

const LoginLink = styled.TouchableOpacity`
`;

export default HomeScreen;
