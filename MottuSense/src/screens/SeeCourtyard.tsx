import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import styled from "styled-components/native";
import theme from "../styles/theme";
import { Dimensions } from "react-native";
import { useState } from "react";

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
    width: number; // porcentagem
    height: number; // porcentagem
};

type MotorcycleFullData = MotorcyclePosition & {
    image: any;
    chassi: string;
    iot: string;
    eventos: string[];
};

export const SeeCourtyardScreen: React.FC<SeeCourtyardScreenProps> = ({ navigation }) => { 
    const [selectedMotorcycle, setSelectedMotorcycle] = useState<MotorcycleFullData | null>(null);
    
    const motorcyclesData: MotorcycleFullData[] = [
        {
            id: '1',
            x: 20, 
            y: 30, 
            placa: 'ABC-1234', 
            modelo: "MOTTU_E", 
            status: "PRONTA_PARA_ALUGUEL",
            image: require('../../assets/imgs/mottu_e.png'),
            chassi: '3129312093891',
            iot: '231424212312',
            eventos: [
                'Aluguel realizado',
                'Manutenção preventiva',
                'Lavagem completa'
            ]
        },
        {
            id: '2',
            x: 30, 
            y: 40, 
            placa: 'DYA-2321', 
            modelo: "MOTTU_POP", 
            status: "AGENDADA_PARA_MANUTENCAO",
            image: require('../../assets/imgs/mottu_pop.png'),
            chassi: '5129312093892',
            iot: '331424212313',
            eventos: [
                'Agendamento para manutenção',
                'Aluguel finalizado',
                'Troca de pneus'
            ]
        },
        {
            id: '3',
            x: 40, 
            y: 70, 
            placa: 'UDS-3212', 
            modelo: "MOTTU_SPORT", 
            status: "SEM_PLACA",
            image: require('../../assets/imgs/mottu_sport.png'),
            chassi: '7129312093893',
            iot: '431424212314',
            eventos: [
                'Cadastro no sistema',
                'Inspeção inicial',
                'Transporte para filial'
            ]
        },
        {
            id: '4',
            x: 50, 
            y: 30, 
            placa: 'UIP-3131', 
            modelo: "MOTTU_E", 
            status: "DANIFICADA",
            image: require('../../assets/imgs/mottu_e.png'),
            chassi: '9129312093894',
            iot: '531424212315',
            eventos: [
                'Acidente registrado',
                'Vistoria de danos',
                'Aluguel finalizado'
            ]
        }
    ];

    const linesPosition: LinePosition[] = [
        {id: '1', x: 10, y: 10, width: 80, height: 2},
        {id: '2', x: 10, y: 10, width: 1, height: 300},
        {id: '3', x: 10, y: 310, width: 80, height: 2},
        {id: '4', x: 90, y: 10, width: 1, height: 300}
    ];

    const getIconByStatus = (status?: string) => {
        switch(status) {
            case 'PRONTA_PARA_ALUGUEL': return require('../../assets/icons/moto_verde.png');
            case 'SEM_PLACA': return require('../../assets/icons/moto_rosa.png');
            case 'AGENDADA_PARA_MANUTENCAO': return require('../../assets/icons/moto_cinza.png');
            case 'DANIFICADA': return require('../../assets/icons/moto_vermelha.png');
            default: return require('../../assets/icons/moto_cinza.png');
        }
    };

    const getStatusText = (status?: string) => {
        switch(status) {
            case 'PRONTA_PARA_ALUGUEL': return 'Pronta para Aluguel';
            case 'SEM_PLACA': return 'Sem Placa';
            case 'AGENDADA_PARA_MANUTENCAO': return 'Agendada para Manutenção';
            case 'DANIFICADA': return 'Danificada';
            default: return 'Status Desconhecido';
        }
    };

    const handleMotorcyclePress = (moto: MotorcyclePosition) => {
        const fullData = motorcyclesData.find(m => m.id === moto.id);
        setSelectedMotorcycle(fullData || null);
    };

    const handleBackPress = () => {
        setSelectedMotorcycle(null);
    };

    return (
        <Container>
            <HeaderContainer>
                <BackIconContainer onPress={() => navigation.navigate('Home')}>
                    <BackIcon source={require('../../assets/icons/voltar.png')}/>
                </BackIconContainer>
                <HelpIcon source={require('../../assets/icons/info.png')} />
            </HeaderContainer>
            
            <CourtyardContainer>
                {linesPosition.map((linha) => (
                    <Line
                        key={linha.id}
                        style={{
                            left: `${linha.x}%`, 
                            top: `${linha.y}%`,
                            width: `${linha.width}%`,
                            height: `${linha.height}%`,
                        }}
                    />
                ))}
                
                <MotorcycleContainer>
                    {motorcyclesData.map((moto) => (
                        <Motorcycle
                            key={moto.id}
                            style={{
                                left: `${moto.x}%`, 
                                top: `${moto.y}%`,
                            }}
                            onPress={() => handleMotorcyclePress(moto)}
                        >
                            <MotorcycleImage source={getIconByStatus(moto.status)}/>
                        </Motorcycle>
                    ))}
                </MotorcycleContainer>
            </CourtyardContainer>
            
            {selectedMotorcycle && (
                <MotorcycleInformationContainer>
                    <MotorcycleInformationHeader>
                        <MotorcycleInformationBackIcon onPress={handleBackPress}>
                            <MotorcycleInformationBackIconImage source={require('../../assets/icons/voltar_branco.png')}/>
                        </MotorcycleInformationBackIcon>
                    </MotorcycleInformationHeader>

                    <MotorcycleInformation>
                        <MotorcycleInformationImage source={selectedMotorcycle.image}/>
                        <MotorcycleInformationTexts>
                            <MotorcycleInformationType>
                                {selectedMotorcycle.modelo === 'MOTTU_E' ? 'Mottu E' : 
                                 selectedMotorcycle.modelo === 'MOTTU_POP' ? 'Mottu Pop' : 'Mottu Sport'}
                            </MotorcycleInformationType>
                            <MotorcycleInformationText>Placa: {selectedMotorcycle.placa}</MotorcycleInformationText>
                            <MotorcycleInformationText>Chassi: {selectedMotorcycle.chassi}</MotorcycleInformationText>
                            <MotorcycleInformationText>IoT: {selectedMotorcycle.iot}</MotorcycleInformationText>
                            <MotorcycleInformationText>Status: {getStatusText(selectedMotorcycle.status)}</MotorcycleInformationText>
                        </MotorcycleInformationTexts>

                        <MotorcycleInformationEvents>
                            <MotorcycleInformationEventsTitle>Últimos 3 Eventos</MotorcycleInformationEventsTitle>
                            {selectedMotorcycle.eventos.map((evento, index) => (
                                <MotorcycleInformationEvent key={index}>{evento}</MotorcycleInformationEvent>
                            ))}
                        </MotorcycleInformationEvents>
                    </MotorcycleInformation>
                </MotorcycleInformationContainer>
            )}
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
`;

const BackIconContainer = styled.TouchableOpacity`
    width: fit-content;
    height: fit-content;
`

const BackIcon = styled.Image`
    width: 30px;
    height: 30px;
`;

const HelpIcon = styled.Image`
    width: 30px;
    height: 30px;
`;

const CourtyardContainer = styled.View`
    width: 100%;
    height: fit-content;
`;

const MotorcycleContainer = styled.View`
    width: 100%;
    height: fit-content;
`;

const Motorcycle = styled.TouchableOpacity`
    width: fit-content;
    height: fit-content;
`;

const MotorcycleImage = styled.Image`
    width: 30px;
    height: 30px;
`;

const Line = styled.View`
    position: absolute;
    background-color: ${theme.colors.preto};
`;

const MotorcycleInformationContainer = styled.View`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.verdeEscuro2};
    padding: 10px;
`;

const MotorcycleInformationHeader = styled.View`
    width: 100%;
    height: fit-content;
`;

const MotorcycleInformationBackIcon = styled.TouchableOpacity`
    width: fit-content;
    height: fit-content;
`;

const MotorcycleInformationBackIconImage = styled.Image`
    width: 30px;
    height: 30px;
`;

const MotorcycleInformation = styled.View`
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

const MotorcycleInformationImage = styled.Image`
    width: 150px;
    height: 150px;
`;

const MotorcycleInformationTexts = styled.View`
    width: 100%;
    padding: 20px;
    height: fit-content;
`;

const MotorcycleInformationType = styled.Text`
    color: ${theme.colors.branco};
    font-family: ${theme.fonts.bold}; 
    font-size: ${theme.typography.title.fontSize};
`;

const MotorcycleInformationText = styled.Text`
    color: ${theme.colors.branco};
    font-family: ${theme.fonts.regular}; 
    font-size: ${theme.typography.body.fontSize};
`;

const MotorcycleInformationEvents = styled.View`
    width: 100%;
    padding: 20px;
    height: fit-content;
`;

const MotorcycleInformationEventsTitle = styled.Text`
    color: ${theme.colors.branco};
    font-family: ${theme.fonts.bold}; 
    font-size: ${theme.typography.title.fontSize};
`;

const MotorcycleInformationEvent = styled.Text`
    color: ${theme.colors.branco};
    font-family: ${theme.fonts.regular}; 
    font-size: ${theme.typography.body.fontSize};
    margin-bottom: 20px;
`;