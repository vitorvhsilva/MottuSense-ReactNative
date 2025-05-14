import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import styled from 'styled-components/native';
import { InputAuthComponent } from '../components/InputAuthComponent';
import { RootStackParamList } from '../types/navigation';

type MotoRegisterScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AddMotorcycle'>;
};

export const AddMotorcycle: React.FC<MotoRegisterScreenProps> = ({ navigation }) => {
  const [tipoMoto, setTipoMoto] = useState('');
  const [placa, setPlaca] = useState('');
  const [chassi, setChassi] = useState('');
  const [iot, setIot] = useState('');

  return (
    <Container>
      <Scroll>
        <ImageCard>
          <MotoImage source={require('../../assets/imgs/mottu_pop.png')} resizeMode="contain" />
          <MotoInfo>
            <MotoTitle>Mottu Pop</MotoTitle>
            <MotoDetail>Placa</MotoDetail>
            <MotoDetail>Chassi</MotoDetail>
            <MotoDetail>IoT</MotoDetail>
            <MotoDetail>Status</MotoDetail>
          </MotoInfo>
        </ImageCard>

        <InputAuthComponent label="Tipo da Moto" value={tipoMoto} onChangeText={setTipoMoto} />
        <InputAuthComponent label="Placa" value={placa} onChangeText={setPlaca} />
        <InputAuthComponent label="Chassi" value={chassi} onChangeText={setChassi} />
        <InputAuthComponent label="IoT" value={iot} onChangeText={setIot} />

        <SignUpButtonContainer>
          <SignUpButton onPress={() => navigation.goBack()}>
            <ButtonText>Cadastrar</ButtonText>
          </SignUpButton>
        </SignUpButtonContainer>
      </Scroll>
    </Container>
  );
};



const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

const Scroll = styled.ScrollView`
  padding: 16px;
`;

const ImageCard = styled.View`
  background-color: #00320e;
  border-radius: 20px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 24px;
`;

const MotoImage = styled.Image`
  width: 100px;
  height: 80px;
  margin-right: 16px;
`;

const MotoInfo = styled.View``;

const MotoTitle = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 4px;
`;

const MotoDetail = styled.Text`
  color: #ffffff;
  font-size: 14px;
`;

const SignUpButtonContainer = styled.View`
  margin-top: 24px;
  align-items: center;
`;

const SignUpButton = styled.TouchableOpacity`
  background-color: #00c247;
  padding: 16px 32px;
  border-radius: 30px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;