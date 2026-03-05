/**
 * Utilitários de formatação
 */

/**
 * Formata um valor numérico como moeda brasileira
 */
export const formatCurrency = (value: number): string => {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

/**
 * Calcula o total de entradas de uma lista de transações
 */
export const calculateIncome = (transactions: Array<{ type: string; value: number }>): number => {
  return transactions
    .filter((t) => t.type === 'entrada')
    .reduce((sum, t) => sum + t.value, 0);
};

/**
 * Calcula o total de saídas de uma lista de transações
 */
export const calculateExpenses = (transactions: Array<{ type: string; value: number }>): number => {
  return transactions
    .filter((t) => t.type === 'saida')
    .reduce((sum, t) => sum + t.value, 0);
};

/**
 * Formata uma data em formato brasileiro
 */
export const formatDate = (date: Date | string): string => {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  return dateObj.toLocaleDateString('pt-BR');
};

/**
 * Obtém o prefixo do sinal (+ ou -) para transações
 */
export const getTransactionPrefix = (type: 'entrada' | 'saida'): string => {
  return type === 'entrada' ? '+' : '-';
};
