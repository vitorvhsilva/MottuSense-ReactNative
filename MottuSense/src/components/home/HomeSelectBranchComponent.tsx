import styled from "styled-components/native";
import theme from "../../styles/theme";
import { FlatList } from "react-native";
import { useState } from "react";


type Branch = {
    id: string,
    name: string
}

export const HomeSelectBranchComponent = () => {

    const branchs: Branch[] = [
        {id: "idTeste1", name: "Butantã"},
        {id: "idTeste2", name: "República"},
    ] 

    const [viewBranchs, setViewBranchs] = useState(false)

    const renderBranch = ({ item }: { item: Branch }) => {
        return (
            <BranchCard>
                <BranchCardText>{item.name}</BranchCardText>
            </BranchCard>
        );
    };

    return (
        <SelectBranchContainer>
            <SelectBranchTitleText>Selecione a <SelectBranchGreenText>Filial</SelectBranchGreenText> que você deseja visualizar</SelectBranchTitleText>
        

                <SelectedBranchView onPress={() => setViewBranchs(!viewBranchs)}>
                    <SelectedBranchText>Butantã</SelectedBranchText>
                    {viewBranchs ? 
                        <SelectedBranchViewIcon source={require('../../../assets/icons/voltar.png')}/>
                        :
                        <SelectedBranchViewIcon source={require('../../../assets/icons/expandir.png')}/>
                    }
                </SelectedBranchView>

                {viewBranchs && 
                    <AvailableBranchs>
                    <BranchList
                            data={branchs}
                            renderItem={renderBranch}
                            keyExtractor={(item: Branch) => item.id}
                        />
                    </AvailableBranchs>
                }

        </SelectBranchContainer>
    )
}

const SelectBranchContainer = styled.View`
    width: 100%;
    height: fit-content;
    margin: 30px 0px 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SelectBranchTitleText = styled.Text`
    width: 100%;
    color: ${theme.colors.branco};
    font-family: ${theme.fonts.regular};
    font-size: ${theme.typography.body.fontSize};
    text-align: center;
`;

const SelectBranchGreenText = styled.Text`
    color: ${theme.colors.verdeClaro1};
`;

const SelectedBranchView = styled.TouchableOpacity`
    width: 100%;
    margin: 10px 0px 0px;
    padding: 10px 30px 10px; 
    border-radius: 20px;
    background-color: ${theme.colors.branco};
    height: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
`

const SelectedBranchText = styled.Text`
    width: fit-content;
    color: ${theme.colors.verdeClaro1};
    font-family: ${theme.fonts.regular};
    font-size: ${theme.typography.subtitle.fontSize};
    text-align: center;
`;

const SelectedBranchViewIcon = styled.Image`
    width: 30px;
    height: 30px;
`;

const AvailableBranchs = styled.ScrollView`
    width: 90%;
    height: fit-content;
`

const BranchList = styled(FlatList)`

`

const BranchCard = styled.View`
    width: 100%;
    background-color: ${theme.colors.verdeClaro1};
    padding: 7px 10px;
    border: 1.5px solid ${theme.colors.branco};
`

const BranchCardText = styled.Text`
    color: ${theme.colors.branco};
    font-family: ${theme.fonts.regular};
    font-size: ${theme.typography.subtitle.fontSize};
`