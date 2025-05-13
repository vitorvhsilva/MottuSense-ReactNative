import { useState } from "react";
import styled from "styled-components/native";
import theme from "../../styles/theme";


type Motorcycle = {
    id: string;
    model: string;
    plate: string;
    chassis?: string;
    iot?: string;
  };

export const ViewMotorcyclesComponent = () => {

    const [motorcycles, setMotorcycles] = useState<Motorcycle[]>([
    {
        id: "1",
        model: "Mottu Pop",
        plate: "TTTT-333",
        chassis: "9BWZZZ377VT004251",
        iot: "IoT-12345"
    },
    {
        id: "2",
        model: "Mottu Smart",
        plate: "ABCD-123",
        chassis: "9BWZZZ377VT004252",
        iot: "IoT-12346"
    },
    {
        id: "3",
        model: "Mottu E",
        plate: "EFGH-456",
        chassis: "9BWZZZ377VT004253",
        iot: "IoT-12347"
    }
    ]);
    
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
    };

    return (
        <Container>
            <MotorcycleItem>
                <MotorcycleContainer>
                    <MotorcycleIcon source={require('../../../assets/icons/moto_verde.png')} />
                    <MotorcycleTextContainer>
                        <MotorcycleType>Mottu Pop</MotorcycleType>
                        <MotorcyclePlate>Placa: TTTT-333</MotorcyclePlate>
                    </MotorcycleTextContainer>
                    <ExpandIcon>
                        <ExpandIconImage source={require('../../../assets/icons/expandir.png')} />
                    </ExpandIcon>
                </MotorcycleContainer>
                <MotorcycleInformationContainer>
                    <MotorcycleInformation>
                        <MotorcycleInformationText>Placa</MotorcycleInformationText>
                        <MotorcycleInformationInput/>
                    </MotorcycleInformation>
                    <MotorcycleInformation>
                        <MotorcycleInformationText>Chassi</MotorcycleInformationText>
                        <MotorcycleInformationInput/>
                    </MotorcycleInformation>
                    <MotorcycleInformation>
                        <MotorcycleInformationText>IoT</MotorcycleInformationText>
                        <MotorcycleInformationInput/>
                    </MotorcycleInformation>
                </MotorcycleInformationContainer>
            </MotorcycleItem>
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
