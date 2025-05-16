import React, { useState } from 'react';
import Toast from 'react-native-toast-message';
import styled from 'styled-components/native';
import theme from "../styles/theme";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { InputAuthComponent } from '../components/InputAuthComponent';
import { useAuth } from '../contexts/AuthContext';
import { Cadastro } from '../types/auth';

type SignUpScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'SignUp'>;
};

export const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
    const { register } = useAuth();

    const [nomeCompleto, setNomeCompleto] = useState("");
    const [cpf, setCpf] = useState("");
    const [telefone, setTelefone] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");
    const [dataNasc, setDataNasc] = useState("");
    const [cep, setCep] = useState("");


    const handleRegister = async () => {
        try {
            //setLoading(true);

            if (!nomeCompleto || !cpf || !telefone || !email || !senha 
                || !confirmarSenha || !dataNasc || !cep) {
                Toast.show({
                    type: 'error',
                    text1: 'Erro no formulário',
                    text2: 'Por favor, preencha todos os campos',
                    position: 'top',
                    visibilityTime: 3000
                });('Por favor, preencha todos os campos');
                return;
            }

            if (!(senha == confirmarSenha)) {
                //setError('As senhas não coincidem');
                return;
            }

            if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dataNasc)) {
                //setError('Formato de data inválido. Use DD/MM/AAAA');
                return;
            }

            const partesData = dataNasc.split('/');
            const dataObj = new Date(
                parseInt(partesData[2]),
                parseInt(partesData[1]) - 1, 
                parseInt(partesData[0])
            );

            const cadastro: Cadastro = {
                nome: nomeCompleto,
                cep: cep,
                cpf: cpf,
                dataNascimento: dataObj,
                email: email,
                senha: senha,
                telefone: telefone
            }

            await register(cadastro);

            navigation.navigate('Login');
        } catch (err) {
           // setError('Erro ao criar conta. Tente novamente.');
        } finally {
            //setLoading(false);
        }
    };

    return (
        <Container>
            <SignUpContainer>
                <BackButton onPress={() => navigation.navigate('Auth')}>
                    <BackIcon 
                        source={require('../../assets/icons/voltar.png')}
                        resizeMode="contain"
                    />
                </BackButton>
                <InputAuthComponent label='Nome Completo' value={nomeCompleto} onChangeText={setNomeCompleto}/>
                <InputAuthComponent label='CPF' value={cpf} onChangeText={setCpf}/>
                <InputAuthComponent label='Telefone' value={telefone} onChangeText={setTelefone}/>
                <InputAuthComponent label='Email' value={email} onChangeText={setEmail}/>
                <InputAuthComponent label='Senha' value={senha} onChangeText={setSenha}/>
                <InputAuthComponent label='Confirmar Senha' value={confirmarSenha} onChangeText={setConfirmarSenha}/>
                <InputAuthComponent label='Data de Nascimento' value={dataNasc} onChangeText={setDataNasc}/>
                <InputAuthComponent label='CEP' value={cep} onChangeText={setCep}/>

                <SignUpButtonContainer>
                    <SignUpButton onPress={() => handleRegister()}>
                        <ButtonText>Cadastrar</ButtonText>
                    </SignUpButton>
                </SignUpButtonContainer>

            </SignUpContainer>

        </Container>
    )
}


const Container = styled.ScrollView`
    background-color: ${theme.colors.preto};
`;

const SignUpContainer = styled.ScrollView`
    padding: 30px;
    background-color: ${theme.colors.branco};
    margin-top: 40px;
    width: 100%;
    height: fit-content;
    padding-top: 100px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
`;

const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: -60px;
    left: -10px;
    z-index: 10;
`;

const BackIcon = styled.Image`
    width: 50px;
    height: 50px;
`;

const SignUpButtonContainer = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const SignUpButton = styled.TouchableOpacity`
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