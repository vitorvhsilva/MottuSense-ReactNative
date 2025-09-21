import React, { useState } from "react";
import styled from "styled-components/native";
import theme from "../../styles/theme";
import Toast from "react-native-toast-message";
import { LoadingComponent } from "../LoadingComponent";

type Motorcycle = {
  idMoto: string;
  modeloMoto: string;
  placaMoto: string;
  chassiMoto?: string;
  iotMoto?: string;
};

type MotorcycleDetail = {
  idMoto: string;
  modeloMoto: string;
  placaMoto: string;
  statusMoto: string;
  chassiMoto?: string;
  iotMoto?: string;
  idPatio: string;
  localizacao?: {
    idMoto: string;
    latitudeMoto: string;
    longitudeMoto: string;
  };
};

type ViewMotorcyclesComponentProps = {
  motos: Motorcycle[];
  selectedFilter: number | null;
  searchText: string;
  onRefresh: () => void;
};

export const ViewMotorcyclesComponent = ({
  motos,
  selectedFilter,
  searchText,
  onRefresh,
}: ViewMotorcyclesComponentProps) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [editingMotorcycle, setEditingMotorcycle] =
    useState<MotorcycleDetail | null>(null);
  const [loading, setLoading] = useState(false);

  const toggleExpand = async (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
      setEditingMotorcycle(null);
      return;
    }

    setExpandedId(id);
    await fetchMotorcycleById(id); // busca os dados completos
  };

  const filteredMotorcycles = motos.filter((motorcycle) => {
    if (!selectedFilter && !searchText) return true;

    const searchLower = searchText.toLowerCase();

    switch (selectedFilter) {
      case 1:
        return motorcycle.placaMoto.toLowerCase().includes(searchLower);
      case 2:
        return motorcycle.iotMoto?.toLowerCase().includes(searchLower);
      case 3:
        return true;
      default:
        return (
          motorcycle.modeloMoto.toLowerCase().includes(searchLower) ||
          motorcycle.placaMoto.toLowerCase().includes(searchLower) ||
          motorcycle.iotMoto?.toLowerCase().includes(searchLower) ||
          motorcycle.chassiMoto?.toLowerCase().includes(searchLower)
        );
    }
  });

  const fetchMotorcycleById = async (id: string) => {
    try {
      setLoading(true);
      const response = await fetch(`https://localhost:7050/api/v1/motos/${id}`);
      if (!response.ok) throw new Error("Erro ao buscar moto");

      const json = await response.json();
      setEditingMotorcycle(json.data); // pega apenas o objeto data
    } catch (error) {
      console.error(error);
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: "Falha ao buscar moto",
        position: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  const validateMotorcycle = () => {
    if (!editingMotorcycle) return false;

    const placaRegex = /^[A-Z0-9]{4}-[A-Z0-9]{3}$/i;

    if (!placaRegex.test(editingMotorcycle.placaMoto)) {
      Toast.show({
        type: "error",
        text1: "Placa inválida",
        text2: "Use o formato AAAA-AAA (ex: ABCD-123)",
        position: "top",
      });
      return false;
    }

    if (editingMotorcycle.chassiMoto && editingMotorcycle.chassiMoto.length !== 7) {
      Toast.show({
        type: "error",
        text1: "Chassi inválido",
        text2: "O chassi deve ter exatamente 7 caracteres",
        position: "top",
      });
      return false;
    }

    if (editingMotorcycle.iotMoto && editingMotorcycle.iotMoto.length !== 7) {
      Toast.show({
        type: "error",
        text1: "IoT inválido",
        text2: "O código IoT deve ter exatamente 7 caracteres",
        position: "top",
      });
      return false;
    }

    return true;
  };

  const handleUpdateMotorcycle = async () => {
    if (!editingMotorcycle) return;
    if (!validateMotorcycle()) return;

    try {
      setLoading(true);

      const response = await fetch(`https://localhost:7050/api/v1/motos`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingMotorcycle),
      });

      if (!response.ok) throw new Error("Erro ao atualizar moto");

      const data = await response.json();
      console.log("Moto atualizada:", data);

      Toast.show({
        type: "success",
        text1: "Sucesso",
        text2: "Moto atualizada com sucesso!",
        position: "top",
      });

      setExpandedId(null);
      setEditingMotorcycle(null);
      onRefresh();
    } catch (error) {
      console.error("Erro na atualização:", error);
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: "Erro ao atualizar moto",
        position: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteMotorcycle = async () => {
    if (!editingMotorcycle) return;

    try {
      setLoading(true);

      const response = await fetch(
        `https://localhost:7050/api/v1/motos/${editingMotorcycle.idMoto}`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) throw new Error("Erro ao deletar moto");

      Toast.show({
        type: "success",
        text1: "Sucesso",
        text2: "Moto deletada com sucesso!",
        position: "top",
      });

      setExpandedId(null);
      setEditingMotorcycle(null);
      onRefresh();
    } catch (error) {
      console.error("Erro ao deletar moto:", error);
      Toast.show({
        type: "error",
        text1: "Erro",
        text2: "Erro ao deletar moto",
        position: "top",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      {filteredMotorcycles.map((motorcycle) => (
        <MotorcycleItem key={motorcycle.idMoto}>
          <MotorcycleContainer
            style={{
              backgroundColor:
                expandedId === motorcycle.idMoto
                  ? theme.colors.verdeEscuro2
                  : theme.colors.cinza,
            }}
          >
            <MotorcycleIcon
              source={require("../../../assets/icons/moto_verde.png")}
            />
            <MotorcycleTextContainer>
              <MotorcycleType>{motorcycle.modeloMoto}</MotorcycleType>
              <MotorcyclePlate>Placa: {motorcycle.placaMoto}</MotorcyclePlate>
            </MotorcycleTextContainer>
            <ExpandIcon onPress={() => toggleExpand(motorcycle.idMoto)}>
              <ExpandIconImage
                source={require("../../../assets/icons/expandir.png")}
                style={{
                  transform: [
                    { rotate: expandedId === motorcycle.idMoto ? "90deg" : "0deg" },
                  ],
                }}
              />
            </ExpandIcon>
          </MotorcycleContainer>

          {expandedId === motorcycle.idMoto && editingMotorcycle && (
            <MotorcycleInformationContainer>
              <MotorcycleInformation>
                <MotorcycleInformationText>Placa</MotorcycleInformationText>
                <MotorcycleInformationInput
                  value={editingMotorcycle.placaMoto || ""}
                  onChangeText={(text: string) =>
                    setEditingMotorcycle((prev) =>
                      prev ? { ...prev, placaMoto: text } : null
                    )
                  }
                />
              </MotorcycleInformation>
              <MotorcycleInformation>
                <MotorcycleInformationText>Chassi</MotorcycleInformationText>
                <MotorcycleInformationInput
                  value={editingMotorcycle.chassiMoto || ""}
                  onChangeText={(text: string) =>
                    setEditingMotorcycle((prev) =>
                      prev ? { ...prev, chassiMoto: text } : null
                    )
                  }
                />
              </MotorcycleInformation>
              <MotorcycleInformation>
                <MotorcycleInformationText>IoT</MotorcycleInformationText>
                <MotorcycleInformationInput
                  value={editingMotorcycle.iotMoto || ""}
                  onChangeText={(text: string) =>
                    setEditingMotorcycle((prev) =>
                      prev ? { ...prev, iotMoto: text } : null
                    )
                  }
                />
              </MotorcycleInformation>
              <MotorcycleButtonContainer>
                <MotorcycleButton onPress={handleUpdateMotorcycle}>
                  <MotorcycleButtonText>Editar</MotorcycleButtonText>
                </MotorcycleButton>
                <MotorcycleButton
                  style={{ backgroundColor: theme.colors.vermelho }}
                  onPress={handleDeleteMotorcycle}
                >
                  <MotorcycleButtonText>Deletar</MotorcycleButtonText>
                </MotorcycleButton>
              </MotorcycleButtonContainer>
            </MotorcycleInformationContainer>
          )}
        </MotorcycleItem>
      ))}

      <LoadingComponent loading={loading} />
    </Container>
  );
};

const Container = styled.View`
  background-color: ${theme.colors.branco};
  width: 100%;
  height: 100%;
`;

const MotorcycleItem = styled.View`
  width: 100%;
  margin: 10px 0px;
  flex-direction: column;
  align-items: center;
`;

const MotorcycleContainer = styled.View`
  background-color: ${theme.colors.cinza};
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const MotorcycleIcon = styled.Image`
  width: 30px;
  height: 30px;
`;

const MotorcycleTextContainer = styled.View`
  width: 70%;
  margin-left: 5px;
`;

const MotorcycleType = styled.Text`
  color: ${theme.colors.verdeClaro1};
  font-family: ${theme.fonts.bold};
  font-size: 12px;
`;

const MotorcyclePlate = styled.Text`
  color: ${theme.colors.verdeClaro1};
  font-family: ${theme.fonts.bold};
  font-size: 12px;
`;

const ExpandIcon = styled.TouchableOpacity``;

const ExpandIconImage = styled.Image`
  width: 30px;
  height: 30px;
`;

const MotorcycleInformationContainer = styled.View`
  background-color: ${theme.colors.cinza};
  width: 80%;
  padding: 15px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  flex-direction: column;
`;

const MotorcycleInformation = styled.View`
  width: 100%;
`;

const MotorcycleInformationText = styled.Text`
  color: ${theme.colors.preto};
  font-family: ${theme.fonts.bold};
  font-size: ${theme.typography.body.fontSize};
`;

const MotorcycleInformationInput = styled.TextInput`
  width: 100%;
  border-radius: 10px;
  margin: 10px 0px;
  background-color: ${theme.colors.verdeEscuro1};
  color: ${theme.colors.branco};
  font-family: ${theme.fonts.regular};
  font-size: ${theme.typography.body.fontSize};
  padding: 8px 10px;
`;

const MotorcycleButtonContainer = styled.View`
  width: 100%;
  align-items: center;
`;

const MotorcycleButton = styled.TouchableOpacity`
  margin: 10px 0px;
  width: 80%;
  border-radius: 10px;
  background-color: ${theme.colors.verdeEscuro1};
`;

const MotorcycleButtonText = styled.Text`
  padding: 5px;
  color: ${theme.colors.branco};
  font-family: ${theme.fonts.regular};
  font-size: ${theme.typography.body.fontSize};
  text-align: center;
`;
