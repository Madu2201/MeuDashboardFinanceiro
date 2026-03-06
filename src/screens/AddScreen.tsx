/* Exibe botões para adicionar entradas e saídas */
import React from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import styles from '../styles/globalStyles';
import { COLORS } from '../constants/theme';

interface AddScreenProps {
    onAddEntrada: () => void;
    onAddSaida: () => void;
}

export const AddScreen: React.FC<AddScreenProps> = ({
    onAddEntrada,
    onAddSaida,
}) => {
    return (
        <ScrollView style={styles.content}>
            <View style={styles.addButtonsContainer}>
                <TouchableOpacity
                    style={[styles.addButton, styles.addButtonEntrada]}
                    onPress={onAddEntrada}
                    activeOpacity={0.7}>
                    <Text style={styles.addButtonText}>+ Nova Entrada</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.addButton, styles.addButtonSaida]}
                    onPress={onAddSaida}
                    activeOpacity={0.7}>
                    <Text style={styles.addButtonText}>- Nova Saída</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default AddScreen;
