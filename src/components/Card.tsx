/**
 * Componente Card
 * Container reutilizável para seções de conteúdo
 */
import React from 'react';
import { View, ViewProps } from 'react-native';
import styles from '../styles/globalStyles';

interface CardProps extends ViewProps {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, style, ...props }) => {
    return (
        <View style={[styles.card, style]} {...props}>
            {children}
        </View>
    );
};

export default Card;