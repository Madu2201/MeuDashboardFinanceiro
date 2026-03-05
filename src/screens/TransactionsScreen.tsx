/**
 * Tela de Transações
 * Exibe lista de transações
 */
import React from 'react';
import { View, Text, FlatList, ScrollView } from 'react-native';
import styles from '../styles/globalStyles';
import { Card } from '../components/Card';
import { TransactionItem } from '../components/TransactionItem';
import { Transaction } from '../data/types';

interface TransactionsScreenProps {
    transactions: Transaction[];
}

export const TransactionsScreen: React.FC<TransactionsScreenProps> = ({
    transactions,
}) => {
    return (
        <ScrollView style={styles.content}>
            <Card>
                <Text style={styles.chartTitle}>Transações Recentes</Text>
                {transactions.length > 0 ? (
                    <FlatList
                        data={transactions}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <TransactionItem transaction={item} />}
                        scrollEnabled={false}
                    />
                ) : (
                    <View style={{ paddingVertical: 20, alignItems: 'center' }}>
                        <Text style={styles.transactionDate}>
                            Nenhuma transação encontrada
                        </Text>
                    </View>
                )}
            </Card>
        </ScrollView>
    );
};

export default TransactionsScreen;
