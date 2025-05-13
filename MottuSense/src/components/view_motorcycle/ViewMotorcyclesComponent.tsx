import { useState } from "react";
import styled from "styled-components/native";
import theme from "../../styles/theme";

type Motorcycle = {
  id: string;
  model: string;
  plate: string;
  chassi?: string;
  iot?: string;
};

type ViewMotorcyclesComponentProps = {
  selectedFilter: number | null;
  searchText: string;
};

export const ViewMotorcyclesComponent = ({ 
  selectedFilter, 
  searchText 
}: ViewMotorcyclesComponentProps) => {
  const [motorcycles] = useState<Motorcycle[]>([
    {
      id: "1",
      model: "Mottu Pop",
      plate: "TTTT-333",
      chassi: "9BWZZZ377VT004251",
      iot: "IoT-12345"
    },
    {
      id: "2",
      model: "Mottu Smart",
      plate: "ABCD-123",
      chassi: "9BWZZZ377VT004252",
      iot: "IoT-12346"
    },
    {
      id: "3",
      model: "Mottu E",
      plate: "EFGH-456",
      chassi: "9BWZZZ377VT004253",
      iot: "IoT-12347"
    }
  ]);
  
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const filteredMotorcycles = motorcycles.filter(motorcycle => {

    if (!selectedFilter && !searchText) return true;
    
    if (searchText) {
      const searchLower = searchText.toLowerCase();
      return (
        motorcycle.model.toLowerCase().includes(searchLower) ||
        motorcycle.plate.toLowerCase().includes(searchLower) ||
        (motorcycle.iot && motorcycle.iot.toLowerCase().includes(searchLower)) ||
        (motorcycle.chassi && motorcycle.chassi.toLowerCase().includes(searchLower))
      );
    }
    
    switch (selectedFilter) {
      case 1:
        return motorcycle.plate.toLowerCase().includes(searchText.toLowerCase());
      case 2:
        return motorcycle.iot?.toLowerCase().includes(searchText.toLowerCase());
      case 3: // Filial
        // Adicione a lógica para filtrar por filial se necessário
        return true;
      default:
        return true;
    }
  });

  return (
    <Container>
      {filteredMotorcycles.map((motorcycle) => (
        <MotorcycleItem key={motorcycle.id}>
          <MotorcycleContainer 
            style={{
              backgroundColor: expandedId === motorcycle.id 
                ? theme.colors.verdeEscuro2 
                : theme.colors.cinza
            }}
          >
            <MotorcycleIcon source={require('../../../assets/icons/moto_verde.png')} />
            <MotorcycleTextContainer>
              <MotorcycleType>{motorcycle.model}</MotorcycleType>
              <MotorcyclePlate>Placa: {motorcycle.plate}</MotorcyclePlate>
            </MotorcycleTextContainer>
            <ExpandIcon onPress={() => toggleExpand(motorcycle.id)}>
              <ExpandIconImage 
                source={require('../../../assets/icons/expandir.png')} 
                style={{
                  transform: [{ rotate: expandedId === motorcycle.id ? '90deg' : '0deg' }]
                }}
              />
            </ExpandIcon>
          </MotorcycleContainer>
          
          {expandedId === motorcycle.id && (
            <MotorcycleInformationContainer>
              <MotorcycleInformation>
                <MotorcycleInformationText>Placa</MotorcycleInformationText>
                <MotorcycleInformationInput 
                  value={motorcycle.plate}
                  editable={false}
                />
              </MotorcycleInformation>
              <MotorcycleInformation>
                <MotorcycleInformationText>Chassi</MotorcycleInformationText>
                <MotorcycleInformationInput
                  value={motorcycle.chassi || ''}
                  editable={false}
                />
              </MotorcycleInformation>
              <MotorcycleInformation>
                <MotorcycleInformationText>IoT</MotorcycleInformationText>
                <MotorcycleInformationInput
                  value={motorcycle.iot || ''}
                  editable={false}
                />
              </MotorcycleInformation>
              <MotorcycleButtonContainer>
                <MotorcycleButton>
                  <MotorcycleButtonText>Editar</MotorcycleButtonText>
                </MotorcycleButton>
              </MotorcycleButtonContainer>
            </MotorcycleInformationContainer>
          )}
        </MotorcycleItem>
      ))}
    </Container>
  )
}

const Container = styled.View`
    background-color: ${theme.colors.branco};
    width: 100%;
    height: 100%;
`;

const MotorcycleItem = styled.View`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    margin: 10px 0px;
`

const MotorcycleContainer = styled.View`
    background-color: ${theme.colors.cinza};
    width: 100%;
    height: fit-content;
    padding: 15px;
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`

const MotorcycleIcon = styled.Image`
    width: 30px;
    height: 30px;
`

const MotorcycleTextContainer = styled.View`
    width: 70%;
    height: 100%;
    margin-left: 5px;
`

const MotorcycleType = styled.Text`
    color: ${theme.colors.verdeClaro1};
    font-family: ${theme.fonts.bold}; 
    font-size: 12px;
`
const MotorcyclePlate = styled.Text`
    color: ${theme.colors.verdeClaro1};
    font-family: ${theme.fonts.bold}; 
    font-size: 12px;
`

const ExpandIcon = styled.TouchableOpacity`
    width: fit-content;
    height: fit-content;
`

const ExpandIconImage = styled.Image`
    width: 30px;
    height: 30px;
`

const MotorcycleInformationContainer = styled.View`
    background-color: ${theme.colors.cinza};
    width: 80%;
    height: fit-content;
    padding: 15px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const MotorcycleInformation = styled.View`
    width: 100%;
    height: fit-content;
`

const MotorcycleInformationText = styled.Text`
    color: ${theme.colors.preto};
    font-family: ${theme.fonts.bold}; 
    font-size: ${theme.typography.body.fontSize};
`

const MotorcycleInformationInput = styled.TextInput`
    width: 100%;
    height: fit-content;
    border-radius: 10px;
    margin: 10px 0px;
    background-color: ${theme.colors.verdeEscuro1};
    color: ${theme.colors.branco};
    font-family: ${theme.fonts.regular};
    font-size: ${theme.typography.body.fontSize};
    padding: 8px 10px;
`

const MotorcycleButtonContainer = styled.View`
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
`

const MotorcycleButton = styled.TouchableOpacity`
    margin: 10px 0px;
    width: 80%;
    height: fit-content;
    border-radius: 10px;
    background-color: ${theme.colors.verdeEscuro1};
`

const MotorcycleButtonText = styled.Text`
    padding: 5px;
    color: ${theme.colors.branco};
    font-family: ${theme.fonts.regular};
    font-size: ${theme.typography.body.fontSize};
    text-align: center;
`