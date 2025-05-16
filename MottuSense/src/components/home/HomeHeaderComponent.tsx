import styled from "styled-components/native";
import theme from "../../styles/theme";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../types/navigation";
import { Usuario } from "../../types/auth";

type HomeHeaderProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
  usuario: Usuario | null 
};

export const HomeHeaderComponent = ({ navigation, usuario }: HomeHeaderProps) => {
    

    const nomeParts = usuario!!.nome.trim().split(' ');
    const firstName = nomeParts[0];
    const lastName = nomeParts.length > 1 ? nomeParts.slice(1).join(' ') : '';

    return (
        <HeaderContainer>
            <Menu>
                <MenuIconContainer onPress={() => navigation.navigate('UserConfig')}>
                    <MenuIcon source={require('../../../assets/icons/menu_hamburguer.png')}/>
                </MenuIconContainer>
            </Menu>

            <UserInfo>
                <UserIcon source={require('../../../assets/icons/usuario_default.png')} />
                <UserTexts>
                    <UserFirstName>{firstName}</UserFirstName>
                    <UserLastName>{lastName}</UserLastName>
                </UserTexts>
            </UserInfo>

            <Notification>
                <NotificationIconContainer onPress={() => navigation.navigate('Notifications')}>
                    <NotificationIcon source={require('../../../assets/icons/notification.png')}/>
                </NotificationIconContainer>
                <NotificationCount>
                    <NotificationCountText>1</NotificationCountText>
                </NotificationCount>
            </Notification>


        </HeaderContainer>
    )
}

const HeaderContainer = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const MenuIconContainer = styled.TouchableOpacity`
    width: fit-content;
    width: fit-content;
`

const NotificationIconContainer = styled.TouchableOpacity`
    width: fit-content;
    width: fit-content;
`

const Menu = styled.View`
    width: 20%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MenuIcon = styled.Image`
    width: 30px;
    height: 30px;
`

const UserInfo = styled.View`
    width: 60%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
`
const UserIcon = styled.Image`
    width: 50px;
    height: 50px;
`

const UserTexts = styled.View`
    width: fit-content;
    height: fit-content;
`

const UserFirstName = styled.Text`
    color: ${theme.colors.branco};
    font-family: ${theme.fonts.bold};
    font-size: ${theme.typography.subtitle.fontSize};
`
const UserLastName = styled.Text`
    color: ${theme.colors.branco};
    font-family: ${theme.fonts.regular};
    font-size: 14px;
`

const Notification = styled.View`
    width: 20%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NotificationIcon = styled.Image`
    width: 40px;
    height: 40px;
`

const NotificationCount = styled.View`
    width: 20px;
    height: 20px;
    border-radius: 100%;
    top: -5px;
    right: 5px;
    z-index: 10;
    background-color: ${theme.colors.verdeClaro1};
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NotificationCountText = styled.Text`
    width: 100%;
    text-align: center;
    color: ${theme.colors.branco};
    font-family: ${theme.fonts.bold};
    font-size: ${theme.typography.subtitle.fontSize};
`