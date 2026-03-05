/**
 * Componente BarChart
 * Exibe um gráfico de barras comparando entradas e saídas
 */
import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/globalStyles';
import { ChartData } from '../data/types';
import { SPACING } from '../constants/theme';

interface BarChartProps {
    data: ChartData[];
    title?: string;
}

export const BarChart: React.FC<BarChartProps> = ({
    data,
    title = 'Entradas vs Saídas',
}) => {
    const maxValue = Math.max(...data.map((d) => d.value), 1);

    return (
        <View>
            {title && <Text style={styles.chartTitle}>{title}</Text>}
            <View style={styles.chartContainer}>
                <View style={styles.barRow}>
                    {data.map((item) => (
                        <View key={item.label} style={styles.barWrapper}>
                            <View
                                style={[
                                    styles.bar,
                                    {
                                        height: (item.value / maxValue) * 140,
                                        backgroundColor: item.color,
                                    },
                                ]}
                            />
                            <Text style={styles.barLabel}>{item.label}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default BarChart;
