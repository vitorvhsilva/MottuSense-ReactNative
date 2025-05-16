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
            <HomeHeaderComponent navigation={navigation}/>
            <HomeSelectBranchComponent
                branches={branches}
                selectedBranch={selectedBranch}
                onSelectBranch={handleBranchSelect}
                viewBranches={viewBranchs}
                setViewBranches={setViewBranchs}
            />
            <SeeCourtyardContainer>
                <SeeCourtyardTitle>Veja o pátio da <GreenText>Filial</GreenText> em tempo real</SeeCourtyardTitle>
                <SeeCourtyard onPress={() => navigation.navigate('SeeCourtyard')}>
                    <SeeCourtyardImage source={require('../../assets/icons/mapa.png')}/>
                </SeeCourtyard>
            </SeeCourtyardContainer>

            <NavigationIcons>
                <NavigationIconContainer>
                    <NavigationIcon onPress={() => navigation.navigate("AddMotorcycle")}>
                        <NavigationIconImage source={require('../../assets/icons/moto_verde.png')}/>
                        <NavigationIconImage2 source={require('../../assets/icons/mais.png')}/>
                    </NavigationIcon>
                    <NavigationIconText>Adicionar Moto</NavigationIconText>
                
                </NavigationIconContainer>
                <NavigationIconContainer>
                    <NavigationIcon onPress={() => navigation.navigate('ViewMotorcycle')}>
                        <NavigationIconImage source={require('../../assets/icons/moto_verde.png')}/>
                        <NavigationIconImage2 source={require('../../assets/icons/editar.png')}/>
                    </NavigationIcon>
                    <NavigationIconText>Ver/Atualizar Moto</NavigationIconText>
                </NavigationIconContainer>
            </NavigationIcons>
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

const NavigationIcons = styled.View`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-top: 20px;
`

const NavigationIconContainer = styled.View`
    width: 40%;
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    gap: 4px;
`

const NavigationIcon = styled.TouchableOpacity`
    width: 60px;
    height: 60px;
    background-color: ${theme.colors.branco};    
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const NavigationIconText = styled.Text`
    color: ${theme.colors.branco};
    font-family: ${theme.fonts.regular};
    font-size: 10px;
`

const NavigationIconImage = styled.Image`
    width: 40px;
    height: 40px;
`

const NavigationIconImage2 = styled.Image`
    position: absolute;
    top: -2px;
    right: -2px;
    width: 25px;
    height: 25px;
`