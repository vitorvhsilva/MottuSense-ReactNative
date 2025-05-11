import React, { useState } from 'react';
import { ScrollView, FlatList, Alert, Button } from 'react-native';
import styled from 'styled-components/native';
import HeaderComponent from '../components/HeaderComponent';
import theme from '../styles/theme';

const HomeScreen = () => {

  return (
    <Container>

      <Content>

      </Content>
    </Container>
  );
};

const Container = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.preto};
`;

const Content = styled.View`
  padding: 20px;
`;

/*
const Input = styled.TextInput`
  height: 40px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
`;

const AddButton = styled.TouchableOpacity`
  background-color: #28a745;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

const ListItem = styled.View`
  background-color: white;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const ListItemText = styled.Text`
  font-size: 16px;
`;
*/
export default HomeScreen;
