import styled from "styled-components/native";
import theme from "../styles/theme";

// Tipagem das props
type InputAuthProps = {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
}

export const InputAuthComponent: React.FC<InputAuthProps> = ({
  label,
  value, 
  onChangeText
}) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      
      <InputContainer>
        <StyledTextInput
            value={value}
            onChangeText={onChangeText}
        />
      </InputContainer>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  margin-bottom: 16px;
`;

const Label = styled.Text`
  color: ${theme.colors.preto};
  font-family: ${theme.fonts.bold};
  font-size: ${theme.typography.title.fontSize};
  margin-bottom: 8px;
`;

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${theme.colors.verdeClaro2};
  border-radius: 8px;
  padding: 0 8px;
`;

const StyledTextInput = styled.TextInput`
  width: 100%;
  color: ${theme.colors.preto};
  font-family: ${theme.fonts.regular};
  font-size: ${theme.typography.body.fontSize};
  padding: 16px 0;
`;