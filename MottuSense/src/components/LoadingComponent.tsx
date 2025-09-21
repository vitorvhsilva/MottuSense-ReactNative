import { ActivityIndicator, Modal } from "react-native";
import styled from 'styled-components/native';
import theme from "../styles/theme";

type LoadingProps = {
  loading: boolean;
}

export const LoadingComponent: React.FC<LoadingProps> = ({
  loading
}) => {
    return (
        <Modal transparent visible={loading} animationType="fade">
            <LoadingContainer>
                <ActivityIndicator size="large" color={theme.colors.verdeClaro1} />
                <LoadingText>Processando...</LoadingText>
            </LoadingContainer>
        </Modal> 
    );
}

const LoadingContainer = styled.View`
  flex: 1;
  background-color: rgba(0,0,0,0.5);
  justify-content: center;
  align-items: center;
`;

const LoadingText = styled.Text`
  color: ${theme.colors.branco};
  margin-top: 12px;
  font-family: ${theme.fonts.bold};
  font-size: 16px;
`;