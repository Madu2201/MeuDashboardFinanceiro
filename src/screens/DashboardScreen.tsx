/**
 * Tela Dashboard
 * Exibe resumo financeiro e gráfico
 */
import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../styles/globalStyles';
import { Card } from '../components/Card';
import { BarChart } from '../components/BarChart';
import { formatCurrency } from '../utils/formatting';
import { ChartData } from '../data/types';
import { COLORS } from '../constants/theme';

interface DashboardScreenProps {
    saldo: number;
    entradasMes: number;
    saidasMes: number;
}

export const DashboardScreen: React.FC<DashboardScreenProps> = ({
    saldo,
    entradasMes,
    saidasMes,
}) => {
    const chartData: ChartData[] = [
        {
            label: 'Entradas',
            value: entradasMes,
            color: COLORS.success,
        },
        {
            label: 'Saídas',
            value: saidasMes,
            color: COLORS.danger,
        },
    ];

    const isNegativeBalance = saldo < 0;

    return (
        <ScrollView style={styles.content}>
            {/* Card de Saldo */}
            <Card>
                <Text style={styles.saldoTitle}>Saldo Atual</Text>
                <Text
                    style={[
                        styles.saldoValue,
                        isNegativeBalance && styles.saldoValueNegative,
                    ]}
                >
                    {formatCurrency(saldo)}
                </Text>

                <View style={styles.summaryRow}>
                    <View style={styles.summaryItem}>
                        <Text style={styles.summaryLabel}>Entradas</Text>
                        <Text style={[styles.summaryValue, { color: COLORS.success }]}>
                            {formatCurrency(entradasMes)}
                        </Text>
                    </View>
                    <View style={styles.summaryItem}>
                        <Text style={styles.summaryLabel}>Saídas</Text>
                        <Text style={[styles.summaryValue, { color: COLORS.danger }]}>
                            {formatCurrency(saidasMes)}
                        </Text>
                    </View>
                </View>
            </Card>

            {/* Card de Gráfico */}
            <Card>
                <BarChart data={chartData} />
            </Card>
        </ScrollView>
    );
};

export default DashboardScreen;
