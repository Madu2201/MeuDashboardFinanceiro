/**
 * Componente TransactionItem
 * Exibe um item único de transação
 */
import React from 'react';
import { View, Text } from 'react-native';
import { Transaction } from '../data/types';
import styles from '../styles/globalStyles';
import { formatCurrency, getTransactionPrefix } from '../utils/formatting';

interface TransactionItemProps {
    transaction: Transaction;
}

export const TransactionItem: React.FC<TransactionItemProps> = ({
    transaction,
}) => {
    const isIncome = transaction.type === 'entrada';
    const valueStyle = isIncome
        ? styles.transactionValueEntrada
        : styles.transactionValueSaida;

    return (
        <View style={styles.transactionItem}>
            <View>
                <Text style={styles.transactionDesc}>{transaction.description}</Text>
                <Text style={styles.transactionDate}>{transaction.date}</Text>
            </View>
            <Text style={[styles.transactionValue, valueStyle]}>
                {getTransactionPrefix(transaction.type)} {formatCurrency(transaction.value)}
            </Text>
        </View>
    );
};

export default TransactionItem;
