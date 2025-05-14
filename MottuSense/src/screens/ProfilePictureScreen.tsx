import React, { useState } from 'react';
import styled from 'styled-components/native';
import { ImageSourcePropType } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

type ProfilePictureScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'ProfilePictureScreen'>;
};

export const ProfilePictureScreen: React.FC<ProfilePictureScreenProps> = ({ navigation }) => {
  const [photo, setPhoto] = useState<ImageSourcePropType>(
    require('../../assets/imgs/transferir.png')
  );

  const resetPhoto = () => {
    setPhoto(require('../../assets/imgs/transferir.png'));
  };

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPhoto({ uri: result.assets[0].uri });
    }
  };

  const handleDeleteImage = () => {
    resetPhoto();
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

interface ButtonProps {
  green?: boolean;
  red?: boolean;
}

const Button = styled.TouchableOpacity<ButtonProps>`
  background-color: ${({ green, red }: ButtonProps) =>
    green ? '#00c247' : red ? '#c20000' : '#999'};
  padding: 12px 24px;
  border-radius: 20px;
  margin: 8px 0;
`;

const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;
