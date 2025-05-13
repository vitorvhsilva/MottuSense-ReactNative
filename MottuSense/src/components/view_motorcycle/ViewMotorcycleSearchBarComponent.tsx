import styled from "styled-components/native";
import theme from "../../styles/theme";


type ViewMotorcycleSearchBarComponentProps = {
    selectedFilterLabel: string;
    searchText: string;
    onSearchTextChange: (text: string) => void;
};

export const ViewMotorcycleSearchBarComponent: React.FC<ViewMotorcycleSearchBarComponentProps> = ({
    selectedFilterLabel,
    searchText,
    onSearchTextChange,
  }) => {
    return (
      <SearchContainer>
        <SearchTitle>Faça a Pesquisa</SearchTitle>
        <SearchBarContainer>
          <SearchBarImage source={require('../../../assets/icons/pesquisar.png')} />
          <SearchBarTextInput
            value={searchText}
            onChangeText={onSearchTextChange}
            placeholder=""
            placeholderTextColor={theme.colors.branco}
          />
          <SearchBarSelectedFilter>
            <SearchBarSelectedFilterText>
              {selectedFilterLabel || ""}
            </SearchBarSelectedFilterText>
          </SearchBarSelectedFilter>
        </SearchBarContainer>
      </SearchContainer>
    );
  };
  
 
  
  const SearchContainer = styled.View`
    margin: 20px 0px;
    width: 100%;
    height: fit-content;
  `;
  
  const SearchTitle = styled.Text`
    color: ${theme.colors.verdeClaro1};
    font-family: ${theme.fonts.regular}; 
    font-size: ${theme.typography.subtitle.fontSize};
  `;
  
  const SearchBarContainer = styled.View`
    width: 100%;
    padding: 10px;
    height: fit-content;
    background-color: ${theme.colors.verdeClaro1};
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  `;
  
  const SearchBarImage = styled.Image`
    width: 30px;
    height: 30px;
  `;
  
  const SearchBarTextInput = styled.TextInput`
    width: 50%;
    height: 100%;
    color: ${theme.colors.branco};
    font-family: ${theme.fonts.regular}; 
    font-size: 14px;
  `;
  
  const SearchBarSelectedFilter = styled.View`
    width: 25%;
    height: 100%;
    background-color: ${theme.colors.verdeEscuro1};
    z-index: 10;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
  `;
  
  const SearchBarSelectedFilterText = styled.Text`
    color: ${theme.colors.branco};
    font-family: ${theme.fonts.regular}; 
    font-size: 12px;
    text-align: center;
  `;