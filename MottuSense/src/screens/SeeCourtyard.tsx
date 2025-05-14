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
    x: number; // Posição horizontal em porcentagem (0-100)
    y: number; // Posição vertical em porcentagem (0-100)
    placa: string;
    modelo: 'MOTTU_E' | 'MOTTU_SPORT' | 'MOTTU_POP';
    status?: 'PRONTA_PARA_ALUGUEL' | 'SEM_PLACA' | 'AGENDADA_PARA_MANUTENCAO' | 'DANIFICADA';
};

export const SeeCourtyardScreen: React.FC<SeeCourtyardScreenProps> = ({ navigation }) => { 
        const { width, height } = Dimensions.get('window');
        const courtyardHeight = height * 0.7; // 70% da altura da tela para o pátio
    
        const motorcycles: MotorcyclePosition[] = [
            { id: '1', x: 20, y: 30, placa: 'ABC-1234', modelo: "MOTTU_E", status: "AGENDADA_PARA_MANUTENCAO",  },
            { id: '1', x: 30, y: 40, placa: 'ABC-1234', modelo: "MOTTU_E", status: "AGENDADA_PARA_MANUTENCAO",  },
            { id: '1', x: 40, y: 70, placa: 'ABC-1234', modelo: "MOTTU_E", status: "AGENDADA_PARA_MANUTENCAO",  },
            { id: '1', x: 50, y: 30, placa: 'ABC-1234', modelo: "MOTTU_E", status: "AGENDADA_PARA_MANUTENCAO",  }
        ];
    
        const getIconByStatus = (status?: string) => {
            switch(status) {
                case 'PRONTA_PARA_ALUGUEL': return '../../assets/icons/moto_verde.png';
                case 'SEM_PLACA': return '../../assets/icons/moto_rosa.png';
                case 'AGENDADA_PARA_MANUTENCAO': return '../../assets/icons/moto_cinza.png';
                case 'DANIFICADA': return '../../assets/icons/moto_vermelha.png';
                default: return '';
            }
        };
    
    
    return (
        <Container>
            <HeaderContainer>
                <BackIcon source={require('../../assets/icons/voltar.png')}/>
                <HelpIcon source={require('../../assets/icons/info.png')} />
            </HeaderContainer>
            <MotorcycleContainer>
                <Motorcycle
                    style={{
                        left: `10%`, 
                        top: `20%`,
                    }}>
                    <MotorcycleImage source={require('../../assets/icons/moto_verde.png')}/>
                </Motorcycle>
            </MotorcycleContainer>
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

