# 📊 Meu Dashboard Financeiro

Um aplicativo de controle financeiro simples, bonito e bem estruturado, desenvolvido em **React Native** com **Expo** e **TypeScript**.

## Índice
- [📊 Meu Dashboard Financeiro](#-meu-dashboard-financeiro)
  - [Índice](#índice)
  - [🚀 Como Executar](#-como-executar)
    - [1. Pré-requisitos](#1-pré-requisitos)
    - [2. Instalação e Configuração](#2-instalação-e-configuração)
  - [📁 Estrutura do Projeto](#-estrutura-do-projeto)
    - [Princípios de Arquitetura](#princípios-de-arquitetura)
  - [📋 Funcionalidades](#-funcionalidades)
  - [📦 Dependências](#-dependências)
  - [🔧 Padrões de Código](#-padrões-de-código)
    - [Ordem de Imports](#ordem-de-imports)
  - [🛠️ Como Estender](#️-como-estender)
    - [Adicionar novo componente](#adicionar-novo-componente)
    - [Adicionar nova tela](#adicionar-nova-tela)
    - [Adicionar função utilitária](#adicionar-função-utilitária)
  - [📝 Principais Conceitos Utilizados](#-principais-conceitos-utilizados)
    - [React Native](#react-native)
    - [Componentes Principais](#componentes-principais)
    - [Hooks](#hooks)
    - [TypeScript](#typescript)

---

## 🚀 Como Executar

### 1. Pré-requisitos
- Node.js (versão 20 ou superior)
- Expo Go instalado no celular (para testar no dispositivo físico)

### 2. Instalação e Configuração

```bash
# 1. Instalar as dependências do projeto
npm install

# 2. Instalar NativeWind + Tailwind (para estilização)
npm install nativewind tailwindcss
npx tailwindcss init

# 3. Configuração Babel
Crie ou edite o arquivo babel.config.js na raiz:

js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel'],
  };
};

# 4. Comandos principais do Expo

# Iniciar o projeto normalmente
npx expo start

# Iniciar limpando cache (quando o app não atualiza)
npx expo start --clear --reset-cache

# Abrir diretamente no navegador (modo web)
# Após iniciar, pressione a tecla 'w' no terminal
npx expo start --web

# Resetar completamente o projeto (quando há muitos problemas)
npx expo reset-project

# Apagar node_modules
rmdir /s /q node_modules

# Apagar package-lock.json
del package-lock.json

# Reinstalar dependências
npm install

# 5. Dependências para Web

# Instalar suporte web (obrigatório para rodar no navegador)
npx expo install react-dom react-native-web

# 6. Como testar
No navegador (computador):  
Inicie o projeto → pressione w no terminal → abre no browser.
No celular (Expo Go):  
Conecte o celular na mesma rede Wi-Fi → escaneie o QR Code gerado pelo Expo.

# 7. Dicas extras
Se aparecer tela branca ou erro de MIME type, crie um arquivo index.web.js na raiz:

js
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  rootTag: document.getElementById('root'),
});
```

## 📁 Estrutura do Projeto

```
src/
├── App.tsx                      # Navegação e estado global
├── components/                  # Componentes reutilizáveis
│   ├── Card.tsx
│   ├── BarChart.tsx
│   ├── TransactionItem.tsx
│   └── AddModal.tsx
├── screens/                     # Telas completas
│   ├── DashboardScreen.tsx
│   ├── TransactionsScreen.tsx
│   ├── AddScreen.tsx
│   └── CalculatorScreen.tsx    # Calculadora
├── hooks/                       # Lógica de estado
│   └── useFinance.ts
├── data/                        # Tipos TypeScript
│   └── types.ts
├── constants/                   # Constantes da app
│   └── theme.ts
├── styles/                      # Estilos
│   └── globalStyles.ts
└── utils/                       # Funções auxiliares
    └── formatting.ts
```

### Princípios de Arquitetura

- **Feature-First**: Organização por funcionalidade
- **Separação de Responsabilidades**: UI, lógica, tipos e estilos estão separados
- **Componentes Reutilizáveis**: Card, Modal e TransactionItem podem ser usados em várias telas
- **Estado Centralizado**: Toda lógica financeira em hooks
- **TypeScript Strict**: Totalmente tipado, sem `any`
- **Código Escalável**: Fácil de entender, manter e expandir

## 📋 Funcionalidades

✅ Dashboard com saldo em destaque e resumo mensal

✅ Gráfico de barras comparativo (Entradas × Saídas)

✅ Lista de transações recentes

✅ Adicionar novas entradas e saídas através de modal

✅ Calculadora integrada para operações rápidas

✅ Interface limpa, responsiva e intuitiva

✅ Rolagem suave da tela

## 📦 Dependências

```json
{
  "expo": "~55.0.5",
  "react": "19.2.0",
  "react-native": "0.83.2",
  "typescript": "~5.9.2"
}
```

## 🔧 Padrões de Código

### Ordem de Imports

1. React/React Native
2. Componentes locais
3. Hooks/Utilitários
4. Estilos
5. Tipos

## 🛠️ Como Estender

### Adicionar novo componente

1. Criar `src/components/MeuComponente.tsx`
2. Definir interface Props tipada
3. Adicionar estilos em `globalStyles.ts`
4. Usar em alguma tela existente

### Adicionar nova tela

1. Criar `src/screens/MinhaTelaScreen.tsx`
2. Receber dados como props
3. Em `App.tsx`, adicionar case em `renderContent()`
4. Adicionar aba de navegação se necessário

### Adicionar função utilitária

1. Adicionar em `src/utils/formatting.ts`
2. Exportar e usar onde necessário
3. Manter funções puras (sem side effects)

## 📝 Principais Conceitos Utilizados

### React Native
Framework que permite criar aplicativos nativos para Android e iOS usando JavaScript/TypeScript. Diferente do React para web, renderiza componentes nativos reais do sistema operacional.

### Componentes Principais
- **View** → Container de layout (equivalente a `<div>`)
- **Text** → Único componente para exibir texto
- **TouchableOpacity** → Botão clicável com efeito visual
- **FlatList** → Lista performática de itens
- **ScrollView** → Permite rolar a tela
- **Modal** → Janela que aparece por cima da tela
- **TextInput** → Campo para o usuário digitar

### Hooks
- **useState** → Controla variáveis que atualizam a tela
- **useFinance** → Hook customizado que centraliza toda lógica financeira

### TypeScript
Tipagem estática para maior segurança e manutenibilidade, sem uso de `any`.