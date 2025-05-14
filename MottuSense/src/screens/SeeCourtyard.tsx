import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import styled from "styled-components/native";
import theme from "../styles/theme";

type SeeCourtyardScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'SeeCourtyard'>;
};

export const SeeCourtyardScreen: React.FC<SeeCourtyardScreenProps> = ({ navigation }) => { 
    return (
        <Container>
            <HeaderContainer>
                <BackIcon source={require('../../assets/icons/voltar.png')}/>
                <HelpIcon source={require('../../assets/icons/info.png')} />
            </HeaderContainer>
        </Container>
    )
}

const Container = styled.ScrollView`
    background-color: ${theme.colors.branco};
    width: 100%;
    height: 100%;
`;

const HeaderContainer = styled.View`
    background-color: ${theme.colors.verdeClaro2};
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const BackIcon = styled.Image`
    width: 30px;
    height: 30px;
`
const HelpIcon = styled.Image`
    width: 30px;
    height: 30px;
`

