/* Tipos de dados globais do Dashboard Financeiro */

export type TransactionType = 'entrada' | 'saida';

export interface Transaction {
    id: string;
    type: TransactionType;
    description: string;
    value: number;
    date: string;
}

export interface ChartData {
    label: string;
    value: number;
    color: string;
}

export interface FinanceState {
    saldo: number;
    transacoes: Transaction[];
    entradasMes: number;
    saidasMes: number;
}