# MottuSense - Mapeamento Inteligente do Pátio e Gestão das Motos

## Figma do Projeto
<a> https://www.figma.com/design/cmULc45tgBYnrHS2URh58d/MottuSense?node-id=0-1&t=4uKWdg6NpRxDaUzx-1 </a>

## Integrantes
| Nome Completo         | RM      |
|-----------------------|---------|
| **Brendon de Paula**     | RM559196 |
| **João Ganança**  | RM556405 |
| **Vitor Hugo**      | RM558961 |

## Objetivo do Projeto

### Visão Geral
Desenvolver um sistema de gerenciamento de mapeamento inteligente de pátios e gestão de motos com autenticação de usuários, proporcionando:

- Cadastro e login seguro de usuários  
- Tela interativa para visualização de motos no pátio  
- Controle completo das motos no sistema  
- Personalização do perfil do usuário  

### Funcionalidades Principais
| Módulo               | Descrição                                                                 |
|-----------------------|---------------------------------------------------------------------------|
| **Autenticação**      | Login, cadastro e recuperação de conta com segurança                      |
| **Perfil do Usuário** | Personalização de dados, foto e configurações de privacidade              |
| **Gestão de Motos**   | Adição, visualização e organização de motocicletas no pátio virtual      |
| **Notificações**      | Alertas e comunicações relevantes para o usuário                         |

### Diferenciais
- Interface intuitiva e responsiva  
- Sistema de notificações em tempo real  
- Opções avançadas de personalização  
- Gerenciamento seguro de dados sensíveis  

## Tecnologias Utilizadas
- React Native 
- TypeScript 
- Styled Components
- React Navigation 
- React Native Async Storage
- React Native Toast Message

## Como Executar o Projeto

### Pré-requisitos
- Node.js 
- npm ou yarn 

### Instalação
```bash
# Clone o repositório
git clone https://github.com/vitorvhsilva/MottuSense-ReactNative

# Acesse a pasta do projeto
cd mottusense

# Instale as dependências
npm install

# Para iOS (Mac apenas)
cd ios && pod install && cd ..
```
## Execução
```bash
# Abre um terminal, e digite o comando
npm start

#Acesse o endereco: http://localhost:8081
```

## Telas do Projeto
| Tela                        | Descrição                          |
|-----------------------------|------------------------------------|
| **LoginScreen**                 | Autenticação de usuários           |
| **SignUpScreen**                | Criação de nova conta              |
| **HomeScreen**                  | Home do Usuário principal          |
| **UserConfig**                  | Preferências e configurações do usuário |
| **ViewMotorcycleScreen**        | Ver ou editar detalhes da moto     |
| **AddMotorcycle**               | Adicionar nova moto                |
| **ChangeNameOrPasswordScreen**  | Alterar nome ou senha do usuário   |
| **ProfilePictureScreen**        | Visualizar ou alterar foto de perfil |
| **NotificacoesScreen**          | Visualização de notificações       |
| **SeeCourtyard**                | Visualizar pátio de motos          |
| **AuthScreen**                  | Tela de autenticação               |
