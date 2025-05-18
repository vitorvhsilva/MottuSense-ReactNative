import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import styled from "styled-components/native";
import theme from "../styles/theme";
import { InputAuthComponent } from "../components/InputAuthComponent";
import { useState } from "react";

type ChangeNameOrPasswordProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'ChangeNameOrPassword'>;
};

export const ChangeNameOrPasswordScreen: React.FC<ChangeNameOrPasswordProps> = ({ navigation }) => {
    const [nomeCompleto, setNomeCompleto] = useState('')
    const [senhaAntiga, setSenhaAntiga] = useState('')
    const [senhaNova, setSenhaNova] = useState('')
    const [confirmarSenhaNova, setConfirmarSenhaNova] = useState('')
    
    return (
        <Container>
            <BackButton onPress={() => navigation.navigate('UserConfig')}>
                <BackIcon 
                    source={require('../../assets/icons/voltar.png')}
                    resizeMode="contain"
                />
            </BackButton>
            <InputAuthComponent label='Nome Completo' value={nomeCompleto} onChangeText={setNomeCompleto}/>

            <Line></Line>

            <InputAuthComponent label='Insira a senha antiga' value={senhaAntiga} onChangeText={setSenhaAntiga}/>
            <InputAuthComponent label='Insira a nova senha' value={senhaNova} onChangeText={setSenhaNova}/>
            <InputAuthComponent label='Confirme a nova senha' value={confirmarSenhaNova} onChangeText={setConfirmarSenhaNova}/>
        
            <UpdateButton>
                <UpdateButtonText>Atualizar</UpdateButtonText>
            </UpdateButton>
        </Container>
    )
}

const Container = styled.ScrollView`
    background-color: ${theme.colors.branco};
    padding: 30px;
    width: 100%;
    height: fit-content;
`;

const Line = styled.View`
    background-color: ${theme.colors.verdeClaro1};
    width: 100%;
    height: 3px;
    border-radius: 10px;
    margin: 10px 0px;
`

const BackButton = styled.TouchableOpacity`
    margin-bottom: 20px;
    width: 100%;
`;

const BackIcon = styled.Image`
    width: 50px;
    height: 50px;
`;

const UpdateButton = styled.TouchableOpacity`
    margin-top: 20px;
    width: 80%;
    height: fit-content;
    padding: 10px;
    align-self: center;
    background-color: ${theme.colors.verdeClaro1};
    border-radius: 20px;
`;

const UpdateButtonText = styled.Text`
    color: ${theme.colors.branco};
    font-family: ${theme.fonts.regular}; 
    font-size: ${theme.typography.subtitle.fontSize};
    text-align: center;
`