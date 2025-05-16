import React, { useState } from 'react';
import styled from 'styled-components/native';
import theme from '../styles/theme';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { ScrollView, Switch } from 'react-native';
import { useAuth } from '../contexts/AuthContext';


type UserConfigProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'UserConfig'>;
  };

export const UserConfig: React.FC<UserConfigProps> = ({ navigation }) => {
  const { signOut } = useAuth()

  const [alertaEntrar, setAlertaEntrar] = useState(false);
  const [alertaSair, setAlertaSair] = useState(true);
  const [alertaSemPlaca, setAlertaSemPlaca] = useState(true);
  const [alertaManutencao, setAlertaManutencao] = useState(true);
  const [alertaPronta, setAlertaPronta] = useState(true);

  return (
    <Container>

    <Header>
      <BackButton onPress={() => navigation.goBack()}>
          <BackIcon source={require('../../assets/icons/voltar.png')} resizeMode="contain" />
      </BackButton>

      <AvatarSection>
          <AvatarContainer>
          <Avatar source={require('../../assets/icons/usuario_default.png')} />
          </AvatarContainer>
          <EditPhotoText>Visualizar ou Editar Foto</EditPhotoText>
      </AvatarSection>
    </Header>


      <Section>
        <SectionTitle>Informações Pessoais</SectionTitle>
        <InfoText><BoldText>Nome:</BoldText> Vitor Hugo da Silva</InfoText>
        <InfoText><BoldText>CPF:</BoldText> 00000000000</InfoText>
        <InfoText><BoldText>Telefone:</BoldText> 11999999999</InfoText>
        <InfoText><BoldText>Data de Nascimento:</BoldText> 01/01/0001</InfoText>
      </Section>

      <Section>
        <SectionTitle>Configurações</SectionTitle>
        <ToggleItem label="Receber alerta se a Moto entrar no pátio" value={alertaEntrar} onValueChange={setAlertaEntrar} />
        <ToggleItem label="Receber alerta se a Moto sair do pátio" value={alertaSair} onValueChange={setAlertaSair} />
        <ToggleItem label="Receber alerta se uma Moto chegar sem placa" value={alertaSemPlaca} onValueChange={setAlertaSemPlaca} />
        <ToggleItem label="Receber alerta se uma Moto chegar precisando de manutenção" value={alertaManutencao} onValueChange={setAlertaManutencao} />
        <ToggleItem label="Receber alerta se uma Moto estiver pronta para ser alugada" value={alertaPronta} onValueChange={setAlertaPronta} />
      </Section>

      <ResetButton>
        <ResetButtonText>Redefinir seu nome ou senha</ResetButtonText>
      </ResetButton>

      <SignOutButton onPress={() => signOut()}>
        <SignOutText>Sair da conta</SignOutText>
      </SignOutButton>
    </Container>
  );
};

const ToggleItem = ({ label, value, onValueChange }: { label: string, value: boolean, onValueChange: (val: boolean) => void }) => (
  <ToggleContainer>
    <ToggleLabel>{label}</ToggleLabel>
    <Switch
      value={value}
      onValueChange={onValueChange}
      trackColor={{ false: "#ccc", true: theme.colors.verdeClaro1 }}
      thumbColor="#fff"
    />
  </ToggleContainer>
);


const Container = styled.ScrollView`
  flex: 1;
  background-color: ${theme.colors.branco};
  padding: 20px;
`;


const Header = styled.View`
  position: relative;
  padding-top: 60px;
  margin-bottom: 40px;
`;

const AvatarSection = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  margin-right: 16px;
  margin-top: 16px;
  align-items: center;
`;


const AvatarContainer = styled.View`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${theme.colors.verdeClaro1};
  justify-content: center;
  align-items: center;
`;

const Avatar = styled.Image`
  width: 24px;
  height: 24px;
`;


const EditPhotoText = styled.Text`
  margin-top: 4px;
  font-size: 12px;
  color: ${theme.colors.preto};
  text-align: center;
  font-family: ${theme.fonts.regular};
`;

const Section = styled.View`
  margin-bottom: 30px;
`;

const SectionTitle = styled.Text`
  font-size: ${theme.typography.subtitle.fontSize};
  font-family: ${theme.fonts.bold};
  color: ${theme.colors.preto};
  margin-bottom: 10px;
`;

const InfoText = styled.Text`
  font-size: 16px;
  color: ${theme.colors.preto};
  font-family: ${theme.fonts.regular};
  margin-bottom: 5px;
`;

const BoldText = styled.Text`
  font-family: ${theme.fonts.bold};
`;

const ToggleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

const ToggleLabel = styled.Text`
  flex: 1;
  font-size: 14px;
  font-family: ${theme.fonts.regular};
  color: ${theme.colors.preto};
`;

const ResetButton = styled.TouchableOpacity`
  background-color: ${theme.colors.verdeClaro1};
  width: 100%;
  border-radius: 30px;
  align-items: center;
  margin-bottom: 40px;
`;

const ResetButtonText = styled.Text`
  color: ${theme.colors.branco};
  font-family: ${theme.fonts.bold};
  font-size: ${theme.typography.subtitle.fontSize};
  text-align: center;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: 16px;
  margin-top: 16px;
`;

const BackIcon = styled.Image`
  width: 28px;
  height: 28px;
`;

const SignOutButton = styled.TouchableOpacity`
  background-color: ${theme.colors.vermelho};
  width: 100%;
  border-radius: 30px;
  align-items: center;
  margin-bottom: 40px;
  padding: 10px;
`;

const SignOutText = styled.Text`
  color: ${theme.colors.branco};
  font-family: ${theme.fonts.bold};
  font-size: ${theme.typography.subtitle.fontSize};
  text-align: center;
`;