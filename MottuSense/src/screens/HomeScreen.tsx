import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import styled from "styled-components/native";
import theme from "../styles/theme";
import { HomeHeaderComponent } from "../components/home/HomeHeaderComponent";
import { HomeSelectBranchComponent } from "../components/home/HomeSelectBranchComponent";

type HomeScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    return (
        <Container>
            <HomeHeaderComponent/>
            <HomeSelectBranchComponent/>
        </Container>
    )
}

const Container = styled.ScrollView`
  background-color: ${theme.colors.preto};
  padding: 20px;
`;