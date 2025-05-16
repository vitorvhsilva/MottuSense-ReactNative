import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import styled from "styled-components/native";
import theme from "../styles/theme";
import { HomeHeaderComponent } from "../components/home/HomeHeaderComponent";
import { HomeSelectBranchComponent } from "../components/home/HomeSelectBranchComponent";
import { useState } from "react";

type HomeScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

type Branch = {
    id: string,
    name: string
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const [selectedBranch, setSelectedBranch] = useState<string>("Butantã");
    const [viewBranchs, setViewBranchs] = useState(false);

    const branches: Branch[] = [
        {id: "idTeste1", name: "Butantã"},
        {id: "idTeste2", name: "República"},
    ];

    const handleBranchSelect = (branchName: string) => {
        setSelectedBranch(branchName);
        setViewBranchs(false);
    };
    
    return (
        <Container>
            <HomeHeaderComponent/>
            <HomeSelectBranchComponent
                branches={branches}
                selectedBranch={selectedBranch}
                onSelectBranch={handleBranchSelect}
                viewBranches={viewBranchs}
                setViewBranches={setViewBranchs}
            />
            <SeeCourtyardContainer>
                <SeeCourtyardTitle>Veja o pátio da <GreenText>Filial</GreenText> em tempo real</SeeCourtyardTitle>
                <SeeCourtyard>
                    <SeeCourtyardImage source={require('../../assets/icons/mapa.png')}/>
                </SeeCourtyard>
            </SeeCourtyardContainer>
        </Container>
    )
}

const Container = styled.ScrollView`
  background-color: ${theme.colors.preto};
  padding: 20px;
`;

const SeeCourtyardContainer = styled.View`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SeeCourtyardTitle = styled.Text`
    color: ${theme.colors.branco};
    font-family: ${theme.fonts.regular};
    font-size: 14px;
    margin-bottom: 10px;
`

const GreenText = styled.Text`
    color: ${theme.colors.verdeClaro1};
`

const SeeCourtyard = styled.TouchableOpacity`
    width: 90%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.branco};    
    padding: 50px;
    border-radius: 20px;
`

const SeeCourtyardImage = styled.Image`
    width: 50px;
    height: 50px;
`