import { useState } from "react";
import theme from "../../styles/theme";
import styled from "styled-components/native";
import { RootStackParamList } from "../../types/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type FilterOption = {
    id: number;
    label: string;
}

type ViewMotorcycleFilterComponentProps = {
    filterOptions: FilterOption[];
    selectedFilter: number | null;
    setSelectedFilter: (id: number | null) => void;
    navigation: NativeStackNavigationProp<RootStackParamList, 'ViewMotorcycle'>;
}


export const ViewMotorcycleFilterComponent = ({ 
    filterOptions,
    selectedFilter, 
    setSelectedFilter,
    navigation
}: ViewMotorcycleFilterComponentProps) => {
    const handleFilterPress = (filterId: number) => {
        setSelectedFilter(selectedFilter === filterId ? null : filterId);
    };
    
    
    return (
        <ContainerHeader>
        <BackImageContainer onPress={() => navigation.navigate("Home")}>
            <BackImage source={require('../../../assets/icons/voltar.png')}/>
        </BackImageContainer>
        <FilterContainer>
            <FilterTitle>Filtrar Por</FilterTitle>
            <SelectFilterContainer>
            {filterOptions.map((filter) => (
                    <SelectFilter 
                        key={filter.id}
                        onPress={() => handleFilterPress(filter.id)}
                        style={{
                            backgroundColor: selectedFilter === filter.id 
                                ? theme.colors.verdeClaro1 
                                : theme.colors.cinza
                        }}
                    >
                        <SelectFilterText>{filter.label}</SelectFilterText>
                    </SelectFilter>
                ))}
            </SelectFilterContainer>
        </FilterContainer>
    </ContainerHeader>
    )
}

const ContainerHeader = styled.View`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
`;

const BackImage = styled.Image`
    width: 30px;
    height: 30px;
`

const FilterContainer = styled.View`
    width: 80%;
    height: fit-content;
`

const FilterTitle = styled.Text`
    color: ${theme.colors.verdeClaro1};
    font-family: ${theme.fonts.regular}; 
    font-size: ${theme.typography.subtitle.fontSize};
    text-align: start;
`

const SelectFilterContainer= styled.View`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const SelectFilter = styled.TouchableOpacity`
    width: 30%;
    height: fit-content;
    padding: 10px;
    border-radius: 20px;
    background-color: ${theme.colors.cinza};
`

const SelectFilterText = styled.Text`
    color: ${theme.colors.branco};
    font-family: ${theme.fonts.regular}; 
    font-size: 12px;
    text-align: center;
`

const BackImageContainer = styled.TouchableOpacity`
    width: fit-content;
    height: fit-content;
`