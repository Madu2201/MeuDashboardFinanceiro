# 📊 Meu Dashboard Financeiro

Um aplicativo de controle financeiro simples, bonito e bem estruturado, desenvolvido em **React Native** com **Expo** e **TypeScript**.

## 🚀 Como Executar

### 1. Pré-requisitos
- Node.js (versão 20 ou superior)
- Expo Go instalado no celular (para testar no dispositivo físico)

### 2. Instalação e Configuração

```bash
# Instalar as dependências do projeto
npm install

# Iniciar o projeto normalmente
npx expo start

# Iniciar limpando cache (quando o app não atualiza)
npx expo start --clear --reset-cache

# Abrir diretamente no navegador (modo web)
# Após iniciar, pressione a tecla 'w' no terminal
npx expo start --web

# Reinstalar dependências
npm install

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