import styled from 'styled-components/native';
import theme from '../styles/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Auth'>;
};


const AuthScreen: React.FC<HomeScreenProps> = ({ navigation }) =>{

  return (
    <Container>

      <Content>
        <HomeTitle>Seja bem vindo!</HomeTitle>

        <MottoSenseLogo>
          <MottuSenseImage source={require('../../assets/logos/logoverde.png')} />
          <MottuSenseText>mottusense</MottuSenseText>
        </MottoSenseLogo>

        <AuthContent>
          <SignUpButton onPress={() => navigation.navigate('SignUp')}>
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
  height: 90vh;
  align-items: center;
`;

const MottoSenseLogo = styled.View`
  width: 100%;
  align-items: center;
`

const MottuSenseImage = styled.Image`
  resize-mode: contain;
  width: 250px;
  height: 250px; 
  margin-bottom: -50px; 
`;

const MottuSenseText = styled.Text`
  color: ${theme.colors.branco};
  font-family: ${theme.fonts.bold};
  font-size: 40px
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
  font-family: ${theme.fonts.bold}; 
  font-size: ${theme.typography.title.fontSize};
  text-align: center;
`;

const HomeTitle = styled.Text`
  color: ${theme.colors.branco};
  font-family: ${theme.fonts.regular};
  font-size: ${theme.typography.subtitle.fontSize};
`;

const LoginTitle = styled.Text`
  color: ${theme.colors.branco};
  font-family: ${theme.fonts.regular}; 
  font-size: ${theme.typography.subtitle.fontSize};
`;

const LoginLinkText = styled.Text`
  color: ${theme.colors.verdeClaro1};
  font-family: ${theme.fonts.bold}; 
  font-size: ${theme.typography.subtitle.fontSize};
  border-bottom-width: 1px;
  border-bottom-color: ${theme.colors.verdeClaro1};
`;

const LoginLink = styled.TouchableOpacity`
`;

export default AuthScreen;
