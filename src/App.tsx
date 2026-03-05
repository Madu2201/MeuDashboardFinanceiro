/**
 * Aplicação Principal - Dashboard Financeiro
 * Gerencia navegação entre abas e estado global
 */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar } from 'react-native';
import { useFinance } from './hooks/useFinance';
import { AddModal } from './components/AddModal';
import { DashboardScreen } from './screens/DashboardScreen';
import { TransactionsScreen } from './screens/TransactionsScreen';
import { AddScreen } from './screens/AddScreen';
import styles from './styles/globalStyles';
import { TABS, TabName } from './constants/theme';

export default function App() {
    const { saldo, transacoes, addTransacao, entradasMes, saidasMes } = useFinance();

    // Estado de navegação
    const [activeTab, setActiveTab] = useState<TabName>(TABS.DASHBOARD);

    // Estado do modal
    const [modalVisible, setModalVisible] = useState(false);
    const [modalType, setModalType] = useState<'entrada' | 'saida' | null>(null);

    /**
     * Abre o modal com tipo especificado
     */
    const openModal = (type: 'entrada' | 'saida') => {
        setModalType(type);
        setModalVisible(true);
    };

    /**
     * Fecha o modal
     */
    const closeModal = () => {
        setModalVisible(false);
        setModalType(null);
    };

    /**
     * Adiciona uma nova transação
     */
    const handleAddTransaction = (value: number, description: string) => {
        if (modalType) {
            addTransacao(modalType, value, description);
            closeModal();
        }
    };

    /**
     * Renderiza a tela ativa
     */
    const renderContent = () => {
        switch (activeTab) {
            case TABS.DASHBOARD:
                return (
                    <DashboardScreen
                        saldo={saldo}
                        entradasMes={entradasMes}
                        saidasMes={saidasMes}
                    />
                );
            case TABS.TRANSACTIONS:
                return <TransactionsScreen transactions={transacoes} />;
            case TABS.ADD:
                return (
                    <AddScreen
                        onAddEntrada={() => openModal('entrada')}
                        onAddSaida={() => openModal('saida')}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#0f172a" />

            {/* Cabeçalho */}
            <View style={styles.header}>
                <Text style={styles.title}>Meu Dashboard Financeiro</Text>
            </View>

            {/* Abas de Navegação */}
            <View style={styles.tabContainer}>
                <TouchableOpacity
                    style={[
                        styles.tabButton,
                        activeTab === TABS.DASHBOARD && styles.tabButtonActive,
                    ]}
                    onPress={() => setActiveTab(TABS.DASHBOARD)}
                    activeOpacity={0.7}
                >
                    <Text
                        style={[
                            styles.tabText,
                            activeTab === TABS.DASHBOARD && styles.tabTextActive,
                        ]}
                    >
                        Dashboard
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.tabButton,
                        activeTab === TABS.TRANSACTIONS && styles.tabButtonActive,
                    ]}
                    onPress={() => setActiveTab(TABS.TRANSACTIONS)}
                    activeOpacity={0.7}
                >
                    <Text
                        style={[
                            styles.tabText,
                            activeTab === TABS.TRANSACTIONS && styles.tabTextActive,
                        ]}
                    >
                        Transações
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[
                        styles.tabButton,
                        activeTab === TABS.ADD && styles.tabButtonActive,
                    ]}
                    onPress={() => setActiveTab(TABS.ADD)}
                    activeOpacity={0.7}
                >
                    <Text
                        style={[
                            styles.tabText,
                            activeTab === TABS.ADD && styles.tabTextActive,
                        ]}
                    >
                        Adicionar
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Conteúdo Dinâmico */}
            {renderContent()}

            {/* Modal de Adicionar Transação */}
            <AddModal
                visible={modalVisible}
                type={modalType}
                onClose={closeModal}
                onConfirm={handleAddTransaction}
            />
        </View>
    );
}