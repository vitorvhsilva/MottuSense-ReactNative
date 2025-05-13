import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import styled from "styled-components/native";
import { ViewMotorcycleFilterComponent } from "../components/view_motorcycle/ViewMotorcycleFilterComponent";
import theme from "../styles/theme";
import { RootStackParamList } from "../types/navigation";
import { ViewMotorcycleSearchBarComponent } from "../components/view_motorcycle/ViewMotorcycleSearchBarComponent";

type ViewMotorcycleScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'ViewMotorcycle'>;
};

type FilterOption = {
    id: number;
    label: string;
}


export const ViewMotorcycleScreen: React.FC<ViewMotorcycleScreenProps> = ({ navigation }) => {
    const [selectedFilter, setSelectedFilter] = useState<number | null>(null);
    const [searchText, setSearchText] = useState<string>("");

    const filterOptions: FilterOption[] = [
        { id: 1, label: "Placa" },
        { id: 2, label: "IoT" },
        { id: 3, label: "Filial" }
    ];

    const handleFilterChange = (filterId: number | null) => {
        setSelectedFilter(filterId);
    };

    const getSelectedFilterLabel = () => {
        const filter = filterOptions.find(f => f.id === selectedFilter);
        return filter ? filter.label : "";
    };

    return (
        <Container>
            <ViewMotorcycleFilterComponent 
              filterOptions={filterOptions}
              selectedFilter={selectedFilter}
              setSelectedFilter={handleFilterChange}
            />

            <ViewMotorcycleSearchBarComponent
                selectedFilterLabel={getSelectedFilterLabel()}
                searchText={searchText}
                onSearchTextChange={setSearchText}
            />
        </Container>
    )
}

const Container = styled.ScrollView`
  background-color: ${theme.colors.branco};
  width: 100%;
  padding: 20px;
`;

const SearchContainer = styled.View`
    margin: 20px 0px;
    width: 100%;
    height: fit-content;
`

const SearchTitle = styled.Text`
    color: ${theme.colors.verdeClaro1};
    font-family: ${theme.fonts.regular}; 
    font-size: ${theme.typography.subtitle.fontSize};
`
const SearchBarContainer = styled.View`
    width: 100%;
    padding: 10px;
    heigh: fit-content;
    background-color: ${theme.colors.verdeClaro1};
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const SearchBarImage = styled.Image`
    width: 30px;
    height: 30px;
`

const SearchBarTextInput = styled.TextInput`
    width: 50%;
    height: 100%;
    color: ${theme.colors.branco};
    font-family: ${theme.fonts.regular}; 
    font-size: 14px;
`
const SearchBarSelectedFilter = styled.View`
    width: 25%;
    height: 100%;
    background-color: ${theme.colors.verdeEscuro1};
    z-index: 10;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SearchBarSelectedFilterText = styled.Text`
    color: ${theme.colors.branco};
    font-family: ${theme.fonts.regular}; 
    font-size: 12px;
    text-align: center;
`
