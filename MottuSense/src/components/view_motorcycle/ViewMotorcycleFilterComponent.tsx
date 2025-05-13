import { useState } from "react";
import theme from "../../styles/theme";
import styled from "styled-components/native";

type FilterOption = {
    id: number;
    label: string;
}

export const ViewMotorcycleFilterComponent = () => {
    const filterOptions: FilterOption[] = [
        { id: 1, label: "Placa" },
        { id: 2, label: "IoT" },
        { id: 3, label: "Filial" }
    ];

    const [selectedFilter, setSelectedFilter] = useState<number | null>(1);

    const handleFilterPress = (filterId: number) => {
        setSelectedFilter(selectedFilter === filterId ? null : filterId);
    };
    
    return (
        <ContainerHeader>
        <BackImage source={require('../../../assets/icons/voltar.png')}/>
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
    font-family: ${theme.fonts.bold}; 
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
    font-family: ${theme.fonts.bold}; 
    font-size: 12px;
    text-align: center;
`