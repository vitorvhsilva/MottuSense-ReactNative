import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Alert, ImageSourcePropType } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';
import { StyledComponent } from 'styled-components';

type ProfilePictureScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ProfilePictureScreen'>;
};

export const ProfilePictureScreen: React.FC<ProfilePictureScreenProps> = ({ navigation }) => {
  const placeholderImage = require('../../assets/imgs/transferir.png');
  const [photo, setPhoto] = useState<ImageSourcePropType>(placeholderImage);

  const resetPhoto = () => {
    setPhoto(placeholderImage);
  };

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsEditing: true,
    });

    if (!result.canceled) {
      setPhoto({ uri: result.assets[0].uri });
    }
  };

  const handleDeleteImage = () => {
    Alert.alert('Excluir Foto', 'Tem certeza que deseja excluir a foto?', [
      { text: 'Cancelar', style: 'cancel' },
      {
        text: 'Excluir',
        style: 'destructive',
        onPress: resetPhoto,
      },
    ]);
  };

  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <BackText>{'<'} Voltar</BackText>
      </BackButton>

      <PhotoContainer>
        <ProfileImage source={photo} />
      </PhotoContainer>

      <Button green onPress={handlePickImage}>
        <ButtonText>Alterar Foto</ButtonText>
      </Button>

      <Button red onPress={handleDeleteImage}>
        <ButtonText>Excluir Foto</ButtonText>
      </Button>
    </Container>
  );
};

// Styled Components
const Container = styled.SafeAreaView`
  flex: 1;
  background-color: black;
  padding: 16px;
  justify-content: center;
  align-items: center;
`;

const BackButton = styled.TouchableOpacity`
  position: absolute;
  top: 40px;
  left: 16px;
`;

const BackText = styled.Text`
  color: white;
  font-size: 16px;
`;

const PhotoContainer = styled.View`
  background-color: #ddd;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  overflow: hidden;
`;

const ProfileImage = styled.Image`
  width: 100%;
  height: 100%;
`;

const Placeholder = styled.Image`
  width: 100px;
  height: 100px;
  tint-color: #bbb;
`;

interface ButtonProps {
  green?: boolean;
  red?: boolean;
}

const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${(props: StyledComponent) =>
    props.green ? '#00c247' : props.red ? '#c20000' : '#999'};
  padding: 12px 24px;
  border-radius: 20px;
  margin: 8px 0;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;
