import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { InputAuthComponent } from '../components/InputAuthComponent';
import theme from "../styles/theme";
import { RootStackParamList } from '../types/navigation';

type LoginScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Login'>;
};

export const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <Container>
            <HomeContainer>
                <HomeTitle>Seja bem vindo!</HomeTitle>

                <MottoSenseLogo>
                    <MottuSenseImage source={require('../../assets/logos/logoverde.png')} />
                    <MottuSenseText>mottusense</MottuSenseText>
                </MottoSenseLogo>
            </HomeContainer>


            <LoginContainer>
                <BackButton onPress={() => navigation.navigate('Auth')}>
                    <BackIcon 
                        source={require('../../assets/icons/voltar.png')}
                        resizeMode="contain"
                    />
                </BackButton>
                <InputAuthComponent label='Email' value={email} onChangeText={setEmail}/>
                <InputAuthComponent label='Senha' value={senha} onChangeText={setSenha}/>

                <LoginButtonContainer>
                    <LoginButton onPress={() => navigation.navigate('Home')}>
                        <ButtonText>Acessar</ButtonText>
                    </LoginButton>
                </LoginButtonContainer>
            </LoginContainer>

        </Container>
    )
}


const Container = styled.ScrollView`
    background-color: ${theme.colors.preto};
    height: fit-content;
`;

const HomeContainer = styled.View `
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const HomeTitle = styled.Text`
    width: 100%;
    color: ${theme.colors.branco};
    font-family: ${theme.fonts.regular};
    font-size: ${theme.typography.subtitle.fontSize};
    text-align: center;
`;

const MottoSenseLogo = styled.View`
  width: 100%;
  align-items: center;
  padding: 50px 0px;
`

const MottuSenseImage = styled.Image`
  resize-mode: contain;
  width: 200px;
  height: 200px; 
  margin-bottom: -50px; 
`;

const MottuSenseText = styled.Text`
  color: ${theme.colors.branco};
  font-family: ${theme.fonts.bold};
  font-size: 30px
`;

const LoginContainer = styled.View`
    padding: 30px;
    background-color: ${theme.colors.branco};
    width: 100%;
    height: fit-content;
    padding-top: 70px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
`;

const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 10px;
    left: 20px;
    z-index: 10;
`;

const BackIcon = styled.Image`
    width: 50px;
    height: 50px;
`;

const LoginButtonContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: ${theme.colors.verdeClaro1};
  padding: 15px;
  margin: 20px 20px;
  width: 80%;
  border-radius: 30px;
  margin-bottom: 20px;
`;

const ButtonText = styled.Text`
  color: ${theme.colors.branco};
  font-family: ${theme.fonts.bold}; 
  font-size: ${theme.typography.title.fontSize};
  text-align: center;
`;