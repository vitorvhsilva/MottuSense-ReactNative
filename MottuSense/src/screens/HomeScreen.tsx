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
        </Container>
    )
}

const Container = styled.ScrollView`
  background-color: ${theme.colors.preto};
  padding: 20px;
`;