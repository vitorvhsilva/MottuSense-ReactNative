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

    const validateCPF = (cpf: string): boolean => {
        const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/;
        return cpfRegex.test(cpf);
    };

    const validateCEP = (cep: string): boolean => {
        const cepRegex = /^\d{5}-?\d{3}$/;
        return cepRegex.test(cep);
    };

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone: string): boolean => {
        const phoneRegex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/;
        return phoneRegex.test(phone);
    };

    const handleRegister = async () => {
        try {

            if (!nomeCompleto || !cpf || !telefone || !email || !senha 
                || !confirmarSenha || !dataNasc || !cep) {
                Toast.show({
                    type: 'error',
                    text1: 'Erro no formulário',
                    text2: 'Por favor, preencha todos os campos',
                    position: 'top',
                    visibilityTime: 3000
                });
                return;
            }

            if (!validateCPF(cpf)) {
                Toast.show({
                    type: 'error',
                    text1: 'CPF inválido',
                    text2: 'Digite um CPF válido (123.456.789-09 ou 12345678909)',
                    position: 'top',
                    visibilityTime: 3000
                });
                return;
            }

            if (!validateCEP(cep)) {
                Toast.show({
                    type: 'error',
                    text1: 'CEP inválido',
                    text2: 'Digite um CEP válido (12345-678 ou 12345678)',
                    position: 'top',
                    visibilityTime: 3000
                });
                return;
            }

            if (!validateEmail(email)) {
                Toast.show({
                    type: 'error',
                    text1: 'Email inválido',
                    text2: 'Digite um email válido (exemplo@dominio.com)',
                    position: 'top',
                    visibilityTime: 3000
                });
                return;
            }

            if (!validatePhone(telefone)) {
                Toast.show({
                    type: 'error',
                    text1: 'Telefone inválido',
                    text2: 'Digite um telefone válido ((11) 91234-5678 ou 11912345678)',
                    position: 'top',
                    visibilityTime: 3000
                });
                return;
            }

            if (senha !== confirmarSenha) {
                Toast.show({
                    type: 'error',
                    text1: 'Erro no formulário',
                    text2: 'As senhas não coincidem',
                    position: 'top',
                    visibilityTime: 3000
                });
                return;
            }

            if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dataNasc)) {
                Toast.show({
                    type: 'error',
                    text1: 'Erro no formulário',
                    text2: 'Data de Nascimento no formato errado (DD/MM/AAAA)',
                    position: 'top',
                    visibilityTime: 3000
                });
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
            console.log('Erro completo:', err);
            
            let errorMessage = 'Erro ao criar conta';
            
            if (err instanceof Error) {
                errorMessage = err.message;
            } else if (typeof err === 'string') {
                errorMessage = err;
            }

            Toast.show({
                type: 'error',
                text1: 'Erro no cadastro',
                text2: errorMessage,
                position: 'top',
                visibilityTime: 4000
            });
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