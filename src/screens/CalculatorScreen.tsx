import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/globalStyles';

export default function CalculatorScreen() {
    const [display, setDisplay] = useState('0');
    const [expression, setExpression] = useState('');
    const [pendingOp, setPendingOp] = useState('');
    const [firstNumber, setFirstNumber] = useState('');
    const [justCalculated, setJustCalculated] = useState(false);

    const handleNumber = (value: string) => {
        if (justCalculated) {
            setDisplay(value);
            setExpression(value);
            setJustCalculated(false);
            return;
        }

        if (value === '.' && display.includes('.')) return;

        setDisplay(display === '0' && value !== '.' ? value : display + value);
        setExpression(expression + value);
    };

    const handleOperation = (op: string) => {
        if (justCalculated) {
            setFirstNumber(display);
            setExpression(display + ' ' + op + ' ');
            setPendingOp(op);
            setDisplay('0');
            setJustCalculated(false);
            return;
        }

        if (firstNumber && pendingOp) {
            const prev = parseFloat(firstNumber);
            const curr = parseFloat(display);
            let result = 0;

            switch (pendingOp) {
                case '+': result = prev + curr; break;
                case '-': result = prev - curr; break;
                case '×': result = prev * curr; break;
                case '÷': result = curr !== 0 ? prev / curr : NaN; break;
            }

            const final = isNaN(result) ? 'Error' : result.toString();
            setFirstNumber(final);
            setExpression(final + ' ' + op + ' ');
            setPendingOp(op);
            setDisplay('0');
        } else {
            setFirstNumber(display);
            setExpression(expression + ' ' + op + ' ');
            setPendingOp(op);
            setDisplay('0');
        }
    };

    const calculate = () => {
        if (!firstNumber || !pendingOp) return;

        const prev = parseFloat(firstNumber);
        const curr = parseFloat(display);
        let result = 0;

        switch (pendingOp) {
            case '+': result = prev + curr; break;
            case '-': result = prev - curr; break;
            case '×': result = prev * curr; break;
            case '÷': result = curr !== 0 ? prev / curr : NaN; break;
        }

        const final = isNaN(result) ? 'Error' : result.toString();
        setDisplay(final);
        setExpression(expression + display + ' = ' + final);
        setPendingOp('');
        setFirstNumber('');
        setJustCalculated(true);
    };

    const clearCalculator = () => {
        setDisplay('0');
        setExpression('');
        setPendingOp('');
        setFirstNumber('');
        setJustCalculated(false);
    };

    const buttons = [
        ['C', '÷'],
        ['7', '8', '9', '×'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '='],
    ];

    return (
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
            <View style={styles.calculatorContainer}>

                {/* Display da Calculadora */}
                <View style={styles.calculatorDisplayContainer}>
                    <Text style={styles.calculatorExpression}>
                        {expression || '0'}
                    </Text>
                    <Text style={styles.calculatorDisplay}>
                        {display}
                    </Text>
                </View>

                {/* Teclado da Calculadora */}
                <View style={styles.calculatorKeyboard}>
                    {buttons.map((row, rowIndex) => (
                        <View key={rowIndex} style={styles.calculatorRow}>
                            {row.map((btn) => {
                                const isOperator = ['C', '÷', '×', '-', '+', '='].includes(btn);
                                const isZero = btn === '0';

                                return (
                                    <TouchableOpacity key={btn}
                                        style={[
                                            styles.calculatorButton,
                                            isOperator ? styles.calculatorButtonOperator : styles.calculatorButtonNumber,
                                            isZero && styles.calculatorButtonZero,
                                        ]}
                                        onPress={() => {
                                            if (btn === 'C') clearCalculator();
                                            else if (btn === '=') calculate();
                                            else if (['+', '-', '×', '÷'].includes(btn)) handleOperation(btn);
                                            else handleNumber(btn);
                                        }}>
                                        <Text style={styles.calculatorButtonText}>{btn}</Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}