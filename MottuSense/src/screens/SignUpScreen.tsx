import React from 'react';
import styled from 'styled-components/native';
import theme from "../styles/theme";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type SignUpScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'SignUp'>;
};

export const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
    return (
        <Container>
            <Teste>Teste</Teste>

        </Container>
    )
}


const Container = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.preto};
`;

const Teste = styled.Text`
    color: ${theme.colors.branco};
`;
