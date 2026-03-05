// Modal para adicionar novas transações
import React, { useState } from 'react';
import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ModalProps,
} from 'react-native';
import styles from '../styles/globalStyles';
import { TransactionType } from '../data/types';

interface AddModalProps extends Omit<ModalProps, 'visible'> {
    visible: boolean;
    type: TransactionType | null;
    onClose: () => void;
    onConfirm: (value: number, description: string) => void;
}

export const AddModal: React.FC<AddModalProps> = ({
    visible,
    type,
    onClose,
    onConfirm,
    ...props
}) => {
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');

    const handleConfirm = () => {
        if (!value || isNaN(parseFloat(value))) {
            alert('Digite um valor válido!');
            return;
        }

        onConfirm(parseFloat(value), description);
        setValue('');
        setDescription('');
        onClose();
    };

    const isEntrada = type === 'entrada';
    const modalTitle = isEntrada ? 'Adicionar Entrada' : 'Adicionar Saída';

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
            {...props}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContent}>
                    <TouchableOpacity
                        style={styles.modalCloseButton}
                        onPress={onClose}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.modalCloseText}>✕</Text>
                    </TouchableOpacity>

                    <Text style={styles.modalTitle}>{modalTitle}</Text>

                    <TextInput
                        style={styles.input}
                        placeholder="Descrição (ex: Salário)"
                        placeholderTextColor="#94a3b8"
                        value={description}
                        onChangeText={setDescription}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Valor (ex: 500.00)"
                        placeholderTextColor="#94a3b8"
                        keyboardType="numeric"
                        value={value}
                        onChangeText={setValue}
                    />

                    <View style={styles.modalButtons}>
                        <TouchableOpacity
                            style={[styles.modalButton, styles.modalCancel]}
                            onPress={onClose}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.modalButtonText}>Cancelar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={[styles.modalButton, styles.modalConfirm]}
                            onPress={handleConfirm}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.modalButtonText}>Confirmar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default AddModal;