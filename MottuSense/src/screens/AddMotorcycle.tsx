import React, { useState } from 'react';
import styled from 'styled-components/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { InputAuthComponent } from '../components/InputAuthComponent';
import theme from '../styles/theme';
import Toast from "react-native-toast-message";
import { LoadingComponent } from '../components/LoadingComponent';
import { API_BASE_URL } from '../services/contants';

type MotoRegisterScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AddMotorcycle'>;
};

export const AddMotorcycle: React.FC<MotoRegisterScreenProps> = ({ navigation }) => {
  const [placa, setPlaca] = useState('');
  const [chassi, setChassi] = useState('');
  const [iot, setIot] = useState('');
  
  const [selectedMotoType, setSelectedMotoType] = useState<string>('');
  const [showMotoTypes, setShowMotoTypes] = useState(false);
  const [loading, setLoading] = useState(false); // estado de carregamento
  
  const motoTypes = ['Mottu Pop', 'Mottu E', 'Mottu Sport'];

  const getImageByType = (type?: string) => {
    switch(type) {
      case 'Mottu Pop': return require('../../assets/imgs/mottu_pop.png');
      case 'Mottu E': return require('../../assets/imgs/mottu_e.png');
      case 'Mottu Sport': return require('../../assets/imgs/mottu_sport.png');
      default: return require('../../assets/imgs/mottu_sport.png');
    }
  };

    const handleCadastrar = async () => {
    try {
      const placaRegex = /^[A-Z0-9]{4}-[A-Z0-9]{3}$/i;

      if (!placaRegex.test(placa)) {
        Toast.show({
          type: "error",
          text1: "Placa inválida",
          text2: "Use o formato AAAA-AAA (ex: ABCD-123)",
          position: "top",
          visibilityTime: 3000,
        });
        return;
      }

      if (chassi && chassi.length !== 7) {
        Toast.show({
          type: "error",
          text1: "Chassi inválido",
          text2: "O chassi deve ter exatamente 7 caracteres",
          position: "top",
          visibilityTime: 3000,
        });
        return;
      }

      if (iot && iot.length !== 7) {
        Toast.show({
          type: "error",
          text1: "IoT inválido",
          text2: "O código IoT deve ter exatamente 7 caracteres",
          position: "top",
          visibilityTime: 3000,
        });
        return;
      }

      if (!selectedMotoType) {
        Toast.show({
          type: "error",
          text1: "Tipo da moto obrigatório",
          text2: "Selecione o tipo da moto antes de cadastrar",
          position: "top",
          visibilityTime: 3000,
        });
        return;
      }

      setLoading(true); // ativa o carregamento

      const motoTypeMap: Record<string, string> = {
        "Mottu Pop": "MOTTU_POP",
        "Mottu E": "MOTTU_E",
        "Mottu Sport": "MOTTU_SPORT",
      };

      const response = await fetch(`${API_BASE_URL}/api/v1/motos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          PlacaMoto: placa,
          ModeloMoto: motoTypeMap[selectedMotoType] || "MOTTU_POP",
          StatusMoto: "PRONTA_PARA_ALUGUEL",
          ChassiMoto: chassi,
          IotMoto: iot,
          IdPatio: "idTeste",
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar moto");
      }

      const data = await response.json();
      console.log("Moto cadastrada:", data);

      Toast.show({
        type: "success",
        text1: "Sucesso",
        text2: "Moto cadastrada com sucesso!",
        position: "top",
        visibilityTime: 3000,
      });

      navigation.navigate("Home");
    } catch (error) {
      console.error("Erro na requisição:", error);
      Toast.show({
        type: "error",
        text1: "Erro na requisição",
        text2: error instanceof Error ? error.message : "Erro inesperado",
        position: "top",
        visibilityTime: 3000,
      });
    } finally {
      setLoading(false); 
    }
  };


  return (
    <Container>
      <Scroll>
        <HeaderContainer>
          <BackIconContainer onPress={() => navigation.navigate('Home')}>
            <BackIconImage source={require('../../assets/icons/voltar.png')}/>
          </BackIconContainer>
        </HeaderContainer>

        <ImageCard>
          <MotoImage source={getImageByType(selectedMotoType)} resizeMode="contain" />
          <MotoInfo>
            <MotoTitle>{selectedMotoType || ''}</MotoTitle>
            <MotoDetail>Placa: {placa || '______'}</MotoDetail>
            <MotoDetail>Chassi: {chassi || '______'}</MotoDetail>
            <MotoDetail>IoT: {iot || '______'}</MotoDetail>
          </MotoInfo>
        </ImageCard>

        <SelectContainer>
          <SelectLabel>Tipo da Moto</SelectLabel>
          <SelectButton onPress={() => setShowMotoTypes(!showMotoTypes)}>
            <SelectButtonText>
              {selectedMotoType || 'Selecione o tipo'}
            </SelectButtonText>
            {showMotoTypes ?
              <SelectIcon source={require('../../assets/icons/voltar.png')} />
              :
              <SelectIcon source={require('../../assets/icons/expandir.png')} />
            }
          </SelectButton>
          
          {showMotoTypes && (
            <OptionsContainer>
              {motoTypes.map((type) => (
                <Option 
                  key={type}
                  onPress={() => {
                    setSelectedMotoType(type);
                    setShowMotoTypes(false);
                  }}
                >
                  <OptionText>{type}</OptionText>
                </Option>
              ))}
            </OptionsContainer>
          )}
        </SelectContainer>

        <InputAuthComponent label="Placa" value={placa} onChangeText={setPlaca} />
        <InputAuthComponent label="Chassi" value={chassi} onChangeText={setChassi} />
        <InputAuthComponent label="IoT" value={iot} onChangeText={setIot} />

        <SignUpButtonContainer>
          <SignUpButton onPress={handleCadastrar}>
            <ButtonText>Cadastrar</ButtonText>
          </SignUpButton>
        </SignUpButtonContainer>
      </Scroll>

      <LoadingComponent loading={loading} />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #ffffff;
`;

const HeaderContainer = styled.View`
  width: 100%;
  height: fit-content;
  margin: 10px 0px;
`
const BackIconContainer = styled.TouchableOpacity`
  width: fit-content;
  height: fit-content;
`
const BackIconImage = styled.Image`
  width: 30px;
  height: 30px;
`

const Scroll = styled.ScrollView`
  padding: 16px;
`;

const ImageCard = styled.View`
  background-color: #00320e;
  border-radius: 20px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

const MotoImage = styled.Image`
  width: 120px;
  height: 120px;
`;

const MotoInfo = styled.View``;

const MotoTitle = styled.Text`
  margin-bottom: 4px;
  color: ${theme.colors.branco};
  font-family: ${theme.fonts.bold};
  font-size: ${theme.typography.subtitle.fontSize};
`;

const MotoDetail = styled.Text`
  color: #ffffff;
  color: ${theme.colors.branco};
  font-family: ${theme.fonts.regular};
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
  color: ${theme.colors.branco};
  font-family: ${theme.fonts.bold};
  font-size: ${theme.typography.subtitle.fontSize};
`;

const SelectContainer = styled.View`
  margin-bottom: 16px;
`;

const SelectLabel = styled.Text`
  color: ${theme.colors.preto};
  font-family: ${theme.fonts.bold};
  font-size: ${theme.typography.title.fontSize};
`;

const SelectButton = styled.TouchableOpacity`
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  padding: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SelectButtonText = styled.Text`
  color: ${theme.colors.preto};
  font-family: ${theme.fonts.regular};
  font-size: ${theme.typography.body.fontSize};
`;

const SelectIcon = styled.Image`
  width: 16px;
  height: 16px;
`;

const OptionsContainer = styled.View`
  margin-top: 4px;
  border-width: 1px;
  border-color: #eee;
  border-radius: 8px;
`;

const Option = styled.TouchableOpacity`
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: #f0f0f0;
`;

const OptionText = styled.Text`
  color: ${theme.colors.preto};
  font-family: ${theme.fonts.regular};
  font-size: ${theme.typography.body.fontSize};
`;