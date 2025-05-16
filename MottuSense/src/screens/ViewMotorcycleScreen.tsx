import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import styled from "styled-components/native";
import { ViewMotorcycleFilterComponent } from "../components/view_motorcycle/ViewMotorcycleFilterComponent";
import theme from "../styles/theme";
import { RootStackParamList } from "../types/navigation";
import { ViewMotorcycleSearchBarComponent } from "../components/view_motorcycle/ViewMotorcycleSearchBarComponent";
import { ViewMotorcyclesComponent } from "../components/view_motorcycle/ViewMotorcyclesComponent";

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
        navigation={navigation}
        filterOptions={filterOptions}
        selectedFilter={selectedFilter}
        setSelectedFilter={handleFilterChange}
      />

      <ViewMotorcycleSearchBarComponent
        selectedFilterLabel={getSelectedFilterLabel()}
        searchText={searchText}
        onSearchTextChange={setSearchText}
      />

      <ViewMotorcyclesComponent 
        selectedFilter={selectedFilter}
        searchText={searchText}
      />
    </Container>
  )
}

const Container = styled.ScrollView`
  background-color: ${theme.colors.branco};
  width: 100%;
  padding: 20px;
`;