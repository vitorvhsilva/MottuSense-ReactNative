import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import styled from "styled-components/native";
import { ViewMotorcycleFilterComponent } from "../components/view_motorcycle/ViewMotorcycleFilterComponent";
import theme from "../styles/theme";
import { RootStackParamList } from "../types/navigation";
import { ViewMotorcycleSearchBarComponent } from "../components/view_motorcycle/ViewMotorcycleSearchBarComponent";
import { ViewMotorcyclesComponent } from "../components/view_motorcycle/ViewMotorcyclesComponent";
import { API_BASE_URL } from "../services/contants";

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
  const [motos, setMotos] = useState<any[]>([]);

  const fetchMotos = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/motos/patios/idTeste?pagina=1&tamanho=5`);
      if (!response.ok) throw new Error("Erro ao buscar motos");

      const data = await response.json();
      setMotos(data.data || []);
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };

  useEffect(() => {
    fetchMotos();
  }, []);


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
        motos={motos}
        selectedFilter={selectedFilter}
        searchText={searchText}
        onRefresh={fetchMotos}
      />
    </Container>
  )
}

const Container = styled.ScrollView`
  background-color: ${theme.colors.branco};
  width: 100%;
  padding: 20px;
`;