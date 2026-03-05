# 📊 Meu Dashboard Financeiro

Dashboard financeiro moderno desenvolvido em React Native + TypeScript com Expo. Código bem estruturado, escalável e fácil de manter.

## 🚀 Quick Start

```bash
# Instalar dependências
npm install

# Iniciar desenvolvimento
npm start

# Executar no simulador
expo start --android  # ou --ios ou --web
```

## 📁 Estrutura do Projeto

```
src/
├── App.tsx                      # Navegação e estado global
├── components/                  # Componentes reutilizáveis
│   ├── Card.tsx                # Container genérico
│   ├── BarChart.tsx            # Gráfico de barras
│   ├── TransactionItem.tsx     # Linha de transação
│   └── AddModal.tsx            # Modal para adicionar
├── screens/                     # Telas compostas
│   ├── DashboardScreen.tsx     # Resumo + gráfico
│   ├── TransactionsScreen.tsx  # Lista de transações
│   └── AddScreen.tsx           # Botões de adição
├── hooks/                       # Lógica de estado
│   └── useFinance.ts           # Gerencia financeiro
├── data/                        # Tipos TypeScript
│   └── types.ts                # Interfaces globais
├── constants/                   # Constantes da app
│   └── theme.ts                # Cores, spacing, fontes
├── styles/                      # Estilos
│   └── globalStyles.ts         # StyleSheet centralizado
└── utils/                       # Funções auxiliares
    └── formatting.ts           # Formatação e cálculos
```

## 🏗️ Arquitetura

### Componentes (`components/`)
Componentes isolados e reutilizáveis:
- **Card**: Container com estilo padrão
- **BarChart**: Gráfico dinâmico
- **TransactionItem**: Item tipado de transação
- **AddModal**: Modal com validação

### Telas (`screens/`)
Composição de componentes + dados:
- **DashboardScreen**: Exibe saldo e gráfico
- **TransactionsScreen**: Lista completa
- **AddScreen**: Interface para adicionar

### Estado (`hooks/useFinance.ts`)
Centraliza lógica financeira:
```typescript
const {
  saldo,           // número
  transacoes,      // Transaction[]
  entradasMes,     // total entradas
  saidasMes,       // total saídas
  addTransacao,    // (type, value, description) => void
  removeTransacao, // (id) => void
  editTransacao    // (id, dados) => void
} = useFinance();
```

### Tipos (`data/types.ts`)
```typescript
type TransactionType = 'entrada' | 'saida';

interface Transaction {
  id: string;
  type: TransactionType;
  description: string;
  value: number;
  date: string;
}
```

## 🎨 Design

- **Tema escuro**: Background #0f172a, Cards #1e293b
- **Cores**: Verde #22c55e (entrada), Vermelho #ef4444 (saída)
- **Responsivo**: Adapta a diferentes tamanhos
- **TypeScript**: Totalmente tipado, sem `any`

## 📋 Funcionalidades

- ✅ Adicionar/remover/editar transações
- ✅ Saldo em tempo real
- ✅ Gráfico entradas vs saídas
- ✅ Lista de transações com datas
- ✅ Modal com validação de valores
- ✅ Interface intuitiva e limpa

## 🔧 Padrões de Código

### Nomes
```
Componentes: PascalCase           (Card.tsx, BarChart.tsx)
Funções: camelCase               (formatCurrency, useFinance)
Constantes: UPPER_SNAKE_CASE     (COLORS, SPACING, TABS)
Tipos: PascalCase                (Transaction, ChartData)
```

### Componentes
Todos seguem este padrão:
```typescript
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/globalStyles';
import { SeuTipo } from '../data/types';

interface SeuComponenteProps {
  titulo: string;
  dados: SeuTipo[];
}

export const SeuComponente: React.FC<SeuComponenteProps> = ({
  titulo,
  dados,
}) => {
  return (
    <View>
      <Text style={styles.title}>{titulo}</Text>
    </View>
  );
};

export default SeuComponente;
```

### Imports (ordem)
1. React/React Native
2. Componentes locais
3. Hooks/Utilitários
4. Estilos
5. Tipos

## 🛠️ Como Estender

### Adicionar novo componente
1. Criar `src/components/MeuComponente.tsx`
2. Definir interface Props
3. Adicionar estilos em `globalStyles.ts`
4. Usar em alguma tela

### Adicionar nova tela
1. Criar `src/screens/MinhaTelaScreen.tsx`
2. Receber dados como props
3. Em `App.tsx`, adicionar case em `renderContent()`
4. Adicionar aba de navegação se necessário

### Adicionar função utilitária
1. Adicionar em `src/utils/formatting.ts`
2. Exportar e usar onde necessário
3. Manter funções puras (sem side effects)

### Adicionar novo tipo
1. Adicionar em `src/data/types.ts`
2. Usar com `as const` para union types quando apropriado

## 📦 Dependências

```json
{
  "expo": "~55.0.5",
  "react": "19.2.0",
  "react-native": "0.83.2",
  "typescript": "~5.9.2"
}
```

## 📝 Boas Práticas

- ✓ Separação clara de responsabilidades
- ✓ Componentes pequenos e focados
- ✓ Código comentado onde necessário
- ✓ Props bem tipadas
- ✓ Sem lógica complexa em componentes
- ✓ Estado centralizado em hooks
- ✓ Estilos não duplicados
- ✓ Testes facilitados por arquitetura

---

Projeto estruturado para crescer. Resenha simples e profissional! 🎉
