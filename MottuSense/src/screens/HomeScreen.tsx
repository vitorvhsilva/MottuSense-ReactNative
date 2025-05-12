import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import styled from "styled-components/native";
import theme from "../styles/theme";
import { HomeHeaderComponent } from "../components/HomeHeaderComponent";

type HomeScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <Container>
            <HomeHeaderComponent/>
        </Container>
    )
}

const Container = styled.ScrollView`
  background-color: ${theme.colors.preto};
  padding: 20px;
`;