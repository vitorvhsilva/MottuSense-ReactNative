import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import styled from "styled-components/native";
import theme from "../styles/theme";

type ProfilePictureScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'ProfilePicture'>;
};

export const ProfilePictureScreen: React.FC<ProfilePictureScreenProps> = ({ navigation }) => {
    return (
        <Container>
            <BackIconContainer>
                <BackIconImage source={require('../../assets/icons/voltar.png')}/>
            </BackIconContainer>

            <UserImage source={require('../../assets/imgs/usuario_boylerplate.png')}/>

            <ButtonContainer>
                <ChangeProfilePictureContainer>
                    <WhiteText>Mudar Foto</WhiteText>
                </ChangeProfilePictureContainer>

                <DeleteProfilePictureContainer>
                    <WhiteText>Excluir Foto</WhiteText>
                </DeleteProfilePictureContainer>
            </ButtonContainer>
        </Container>
    )
}

const Container = styled.ScrollView`
    background-color: ${theme.colors.preto};
    width: 100%;
    height: 100%;
`;

const BackIconContainer = styled.TouchableOpacity`
    width: 100%;
    padding: 20px;
    height: fit-content;
`

const BackIconImage = styled.Image`
    width: 30px;
    height: 30px;
    ` 

const UserImage = styled.Image`
    width: 100%;
    aspect-ratio: 1;
    height: 300px;
    resize-mode: contain;
    ` 


const ButtonContainer = styled.View`
    margin-top: 20px;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
`

const ChangeProfilePictureContainer = styled.TouchableOpacity`
    width: 80%;
    background-color: ${theme.colors.verdeClaro1};
    padding: 10px;
    border-radius: 30px;
`
const DeleteProfilePictureContainer = styled.TouchableOpacity`
    width: 80%;
    background-color: ${theme.colors.vermelho};
    padding: 10px;
    border-radius: 30px;
`

const WhiteText = styled.Text`
    color: ${theme.colors.branco};
    font-family: ${theme.fonts.regular}; 
    font-size: ${theme.typography.subtitle.fontSize};
    text-align: center;
`;