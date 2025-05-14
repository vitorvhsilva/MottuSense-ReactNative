import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import styled from "styled-components/native";
import theme from "../styles/theme";
import { Dimensions } from "react-native";

type SeeCourtyardScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'SeeCourtyard'>;
};

type MotorcyclePosition = {
    id: string;
    x: number; // porcentagem
    y: number; // porcentagem
    placa: string;
    modelo: 'MOTTU_E' | 'MOTTU_SPORT' | 'MOTTU_POP';
    status?: 'PRONTA_PARA_ALUGUEL' | 'SEM_PLACA' | 'AGENDADA_PARA_MANUTENCAO' | 'DANIFICADA';
};

type LinePosition = {
    id: string;
    x: number; // porcentagem
    y: number; // porcentagem
    width: number // porcentagem
    height: number // porcentagem
}

export const SeeCourtyardScreen: React.FC<SeeCourtyardScreenProps> = ({ navigation }) => { 
    
    const motorcyclesPosition: MotorcyclePosition[] = [
        { id: '1', x: 20, y: 30, placa: 'ABC-1234', modelo: "MOTTU_E", status: "PRONTA_PARA_ALUGUEL",  },
        { id: '2', x: 30, y: 40, placa: 'DYA-2321', modelo: "MOTTU_POP", status: "AGENDADA_PARA_MANUTENCAO",  },
        { id: '3', x: 40, y: 70, placa: 'UDS-3212', modelo: "MOTTU_SPORT", status: "SEM_PLACA",  },
        { id: '4', x: 50, y: 30, placa: 'UIP-3131', modelo: "MOTTU_E", status: "DANIFICADA",  }
    ];

    const linesPosition: LinePosition[] = [
        {id: '1', x: 10, y: 10, width: 80, height: 2},
        {id: '2', x: 10, y: 10, width: 1, height: 190},
        {id: '3', x: 10, y: 200, width: 80, height: 2},
        {id: '4', x: 90, y: 10, width: 1, height: 190}
    ]

    const getIconByStatus = (status?: string) => {
        switch(status) {
            case 'PRONTA_PARA_ALUGUEL': return require('../../assets/icons/moto_verde.png');
            case 'SEM_PLACA': return require('../../assets/icons/moto_rosa.png');
            case 'AGENDADA_PARA_MANUTENCAO': return require('../../assets/icons/moto_cinza.png');
            case 'DANIFICADA': return require('../../assets/icons/moto_vermelha.png');
            default: return require('../../assets/icons/moto_cinza.png');
        }
    };
    
    
    return (
        <Container>
            <HeaderContainer>
                <BackIcon source={require('../../assets/icons/voltar.png')}/>
                <HelpIcon source={require('../../assets/icons/info.png')} />
            </HeaderContainer>
            <CourtyardContainer>
                {linesPosition.map((linha) => (
                    <Line
                    style={{
                        left: `${linha.x}%`, 
                        top: `${linha.y}%`,
                        width: `${linha.width}%`,
                        height: `${linha.height}%`,
                    }}>
                    </Line>
                ))}
                
                <MotorcycleContainer>
                    {motorcyclesPosition.map((moto) => (
                        <Motorcycle
                            style={{
                                left: `${moto.x}%`, 
                                top: `${moto.y}%`,
                            }}>
                            <MotorcycleImage source={getIconByStatus(moto.status)}/>
                        </Motorcycle>
                    ))}
                </MotorcycleContainer>
            </CourtyardContainer>
        </Container>
    )
}

const Container = styled.ScrollView`
    background-color: ${theme.colors.branco};
    width: 100%;
    height: 100%;
`;

const HeaderContainer = styled.View`
    background-color: ${theme.colors.verdeClaro2};
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const BackIcon = styled.Image`
    width: 30px;
    height: 30px;
`
const HelpIcon = styled.Image`
    width: 30px;
    height: 30px;
`
const CourtyardContainer = styled.View`
    width: 100%;
    height: fit-content;
`

const MotorcycleContainer = styled.View`
    width: 100%;
    height: fit-content;
`

const Motorcycle = styled.TouchableOpacity`
    width: fit-content;
    height: fit-content;
`

const MotorcycleImage = styled.Image`
    width: 30px;
    height: 30px;
`

const Line = styled.View`
    position: absolute;
    background-color: ${theme.colors.preto};
`

