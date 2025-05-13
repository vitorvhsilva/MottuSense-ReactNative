import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styled from "styled-components/native";
import theme from "../styles/theme";
import { RootStackParamList } from "../types/navigation";
import { useState } from "react";
import { ViewMotorcycleFilterComponent } from "../components/view_motorcycle/ViewMotorcycleFilterComponent";

type ViewMotorcycleScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'ViewMotorcycle'>;
};


export const ViewMotorcycleScreen: React.FC<ViewMotorcycleScreenProps> = ({ navigation }) => {

    
    return (
        <Container>
            <ViewMotorcycleFilterComponent/>
        </Container>
    )
}

const Container = styled.ScrollView`
  background-color: ${theme.colors.branco};
  width: 100%;
  padding: 20px;
`;
