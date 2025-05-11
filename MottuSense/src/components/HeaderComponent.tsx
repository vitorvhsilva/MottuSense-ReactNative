import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

export default function HeaderComponent() {
  return (
    <HeaderContainer>
      <HeaderTitle>Task List</HeaderTitle>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.View`
  background-color: #08315e;
  padding-top: ${StatusBar.currentHeight}px;
  padding: 20px;
`;

const HeaderTitle = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: bold;
`;
