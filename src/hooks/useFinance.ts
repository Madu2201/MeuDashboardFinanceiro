/**
 * Hook para gerenciar estado financeiro
 * Centraliza toda a lógica de transações e cálculos
 */
import { useState } from 'react';
import { Transaction, TransactionType } from '../data/types';
import { calculateIncome, calculateExpenses, formatDate } from '../utils/formatting';

const DEFAULT_BALANCE = 2850.5;

const DEFAULT_TRANSACTIONS: Transaction[] = [
    {
        id: '1',
        type: 'entrada',
        description: 'Salário',
        value: 3800,
        date: '05/03/2026',
    },
    {
        id: '2',
        type: 'saida',
        description: 'Aluguel',
        value: 1200,
        date: '10/03/2026',
    },
    {
        id: '3',
        type: 'saida',
        description: 'Supermercado',
        value: 450,
        date: '15/03/2026',
    },
];

export const useFinance = () => {
    const [saldo, setSaldo] = useState(DEFAULT_BALANCE);
    const [transacoes, setTransacoes] = useState<Transaction[]>(DEFAULT_TRANSACTIONS);

    /**
     * Adiciona uma nova transação ao estado
     */
    const addTransacao = (
        type: TransactionType,
        value: number,
        description: string
    ) => {
        const novaTransacao: Transaction = {
            id: Date.now().toString(),
            type,
            description: description || (type === 'entrada' ? 'Entrada' : 'Gasto'),
            value,
            date: formatDate(new Date()),
        };

        setTransacoes((prev) => [novaTransacao, ...prev]);
        setSaldo((prev) => (type === 'entrada' ? prev + value : prev - value));
    };

    /**
     * Remove uma transação
     */
    const removeTransacao = (id: string) => {
        const transacao = transacoes.find((t) => t.id === id);
        if (!transacao) return;

        setTransacoes((prev) => prev.filter((t) => t.id !== id));
        setSaldo((prev) =>
            transacao.type === 'entrada' ? prev - transacao.value : prev + transacao.value
        );
    };

    /**
     * Edita uma transação
     */
    const editTransacao = (
        id: string,
        novosDados: Partial<Transaction>
    ) => {
        setTransacoes((prev) =>
            prev.map((t) => (t.id === id ? { ...t, ...novosDados } : t))
        );
    };

    /**
     * Calcula totais
     */
    const entradasMes = calculateIncome(transacoes);
    const saidasMes = calculateExpenses(transacoes);

    return {
        saldo,
        setSaldo,
        transacoes,
        entradasMes,
        saidasMes,
        addTransacao,
        removeTransacao,
        editTransacao,
    };
};