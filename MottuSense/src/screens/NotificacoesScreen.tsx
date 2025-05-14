import React from 'react';
import styled from 'styled-components/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import theme from '../styles/theme';

interface NotificationCardProps {
  background: string;
}

type NotificationScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Notifications'>;
};


const eventosMoto = [
  {
    idEventoMoto: 'evt001',
    eventoMotoVisualizado: 'S',
    dataHoraEvento: '2025-05-13T10:25:00',
    descricaoEvento: 'A moto precisa de manutenção',
    corEvento: 'VERMELHO'
  },
  {
    idEventoMoto: 'evt002',
    eventoMotoVisualizado: 'N',
    dataHoraEvento: '2025-05-12T14:00:00',
    descricaoEvento: 'A moto está preparada para ser alugada',
    corEvento: 'VERDE'
  },
  {
    idEventoMoto: 'evt003',
    eventoMotoVisualizado: 'N',
    dataHoraEvento: '2025-05-11T09:30:00',
    descricaoEvento: 'A moto está fora do pátio',
    corEvento: 'CINZA'
  }
];

const getIconByColor = (color: string) => {
  switch (color) {
    case 'VERDE':
      return require('../../assets/icons/moto_verde.png');
    case 'VERMELHO':
      return require('../../assets/icons/moto_vermelha.png');
    case 'CINZA':
      return require('../../assets/icons/moto_cinza.png');
    default:
      return require('../../assets/icons/moto_cinza.png');
  }
};

const getBackgroundColor = (color: string) => {
  switch (color) {
    case 'VERDE':
      return '#D9F0E1';
    case 'VERMELHO':
      return '#F2DADA';
    case 'CINZA':
      return '#E0E0E0';
    default:
      return '#F5F5F5';
  }
};

export const NotificationScreen: React.FC<NotificationScreenProps> = ({ navigation }) => {
  const naoLidas = eventosMoto.filter(evento => evento.eventoMotoVisualizado === 'N');
  const historico = eventosMoto.filter(evento => evento.eventoMotoVisualizado === 'S');

  return (
    <Container>
      <Header>
        <BackButton onPress={() => navigation.goBack()}>
          <BackIcon source={require('../../assets/icons/voltar.png')} />
        </BackButton>
      </Header>

      <SectionTitle>Não Lidas</SectionTitle>
      {naoLidas.map(evento => (
        <NotificationCard key={evento.idEventoMoto} background={getBackgroundColor(evento.corEvento)}>
          <NotificationIcon source={getIconByColor(evento.corEvento)} />
          <NotificationText>{evento.descricaoEvento}</NotificationText>
        </NotificationCard>
      ))}

      <SectionTitle>Histórico</SectionTitle>
      {historico.map(evento => (
        <NotificationCard key={evento.idEventoMoto} background={getBackgroundColor(evento.corEvento)}>
          <NotificationIcon source={getIconByColor(evento.corEvento)} />
          <NotificationText>{evento.descricaoEvento}</NotificationText>
        </NotificationCard>
      ))}
    </Container>
  );
};


const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
  padding: 16px;
`;

const Header = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

const BackButton = styled.TouchableOpacity`
  padding: 8px;
`;

const BackIcon = styled.Image`
  width: 24px;
  height: 24px;
`;

const SectionTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 12px;
  font-family: ${theme.fonts.bold};
  font-size: ${theme.typography.subtitle.fontSize};
`;


const NotificationCard = styled.View((props: NotificationCardProps) => ({
  backgroundColor: props.background,
  borderRadius: 12,
  padding: 12,
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 12,
}));

const NotificationIcon = styled.Image`
  width: 32px;
  height: 32px;
  margin-right: 12px;
`;

const NotificationText = styled.Text`
  flex: 1;
  font-size: 14px;
  font-family: ${theme.fonts.regular};
  color: #000;
`;
