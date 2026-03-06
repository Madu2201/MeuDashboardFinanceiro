/* Estilos globais da aplicação */
import { StyleSheet } from 'react-native';
import { COLORS, FONT_SIZES, SPACING } from '../constants/theme';

const styles = StyleSheet.create({
    /* ===== CONTAINER ===== */
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
    },

    /* ===== HEADER ===== */
    header: {
        paddingHorizontal: SPACING.md,
        paddingTop: SPACING.lg,
        paddingBottom: SPACING.md,
        backgroundColor: COLORS.background,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },

    title: {
        fontSize: FONT_SIZES.title,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        textAlign: 'center',
    },

    /* ===== TABS ===== */
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: COLORS.card,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },

    tabButton: {
        flex: 1,
        paddingVertical: SPACING.md,
        alignItems: 'center',
        borderBottomWidth: 3,
        borderBottomColor: 'transparent',
    },

    tabButtonActive: {
        borderBottomColor: COLORS.success,
    },

    tabText: {
        fontSize: FONT_SIZES.body,
        color: COLORS.textSecondary,
        fontWeight: '600',
    },

    tabTextActive: {
        color: COLORS.textPrimary,
        fontWeight: '700',
    },

    /* ===== CONTENT ===== */
    content: {
        flex: 1,
        padding: SPACING.md,
    },

    /* ===== CARD ===== */
    card: {
        backgroundColor: COLORS.card,
        borderRadius: 12,
        padding: SPACING.md,
        marginBottom: SPACING.lg,
        borderWidth: 1,
        borderColor: COLORS.border,
    },

    /* ===== SALDO ===== */
    saldoTitle: {
        fontSize: FONT_SIZES.small,
        color: COLORS.textSecondary,
        marginBottom: SPACING.sm,
        fontWeight: '600',
    },

    saldoValue: {
        fontSize: 36,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        marginBottom: SPACING.md,
    },

    saldoValueNegative: {
        color: COLORS.danger,
    },

    /* ===== SUMMÁRIO ===== */
    summaryRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: SPACING.md,
        paddingTop: SPACING.md,
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
    },

    summaryItem: {
        flex: 1,
        alignItems: 'center',
    },

    summaryLabel: {
        fontSize: FONT_SIZES.small,
        color: COLORS.textSecondary,
        marginBottom: SPACING.xs,
    },

    summaryValue: {
        fontSize: FONT_SIZES.subtitle,
        fontWeight: 'bold',
    },

    /* ===== GRÁFICO ===== */
    chartTitle: {
        fontSize: FONT_SIZES.subtitle,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        marginBottom: SPACING.md,
    },

    chartContainer: {
        alignItems: 'center',
        paddingVertical: SPACING.md,
    },

    barRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
        width: '100%',
        height: 200,
    },

    barWrapper: {
        alignItems: 'center',
        flex: 1,
    },

    bar: {
        width: 80,
        borderRadius: 8,
        marginBottom: SPACING.sm,
    },

    barLabel: {
        fontSize: FONT_SIZES.small,
        color: COLORS.textSecondary,
        fontWeight: '600',
    },

    /* ===== TRANSAÇÕES ===== */
    transactionItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: SPACING.md,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },

    transactionDesc: {
        fontSize: FONT_SIZES.body,
        fontWeight: '600',
        color: COLORS.textPrimary,
        marginBottom: SPACING.xs,
    },

    transactionDate: {
        fontSize: FONT_SIZES.small,
        color: COLORS.textMuted,
    },

    transactionValue: {
        fontSize: FONT_SIZES.body,
        fontWeight: 'bold',
    },

    transactionValueEntrada: {
        color: COLORS.success,
    },

    transactionValueSaida: {
        color: COLORS.danger,
    },

    /* ===== BOTÕES ===== */
    addButtonsContainer: {
        gap: SPACING.md,
    },

    addButton: {
        paddingVertical: SPACING.lg,
        paddingHorizontal: SPACING.md,
        borderRadius: 12,
        alignItems: 'center',
        borderWidth: 2,
    },

    addButtonEntrada: {
        backgroundColor: `${COLORS.success}20`,
        borderColor: COLORS.success,
    },

    addButtonSaida: {
        backgroundColor: `${COLORS.danger}20`,
        borderColor: COLORS.danger,
    },

    addButtonText: {
        fontSize: FONT_SIZES.subtitle,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
    },

    /* ===== MODAL ===== */
    modalOverlay: {
        flex: 1,
        backgroundColor: COLORS.overlay,
        justifyContent: 'center',
        alignItems: 'center',
    },

    modalContent: {
        backgroundColor: COLORS.card,
        borderRadius: 16,
        padding: SPACING.lg,
        width: '80%',
        maxWidth: 400,
        borderWidth: 1,
        borderColor: COLORS.border,
    },

    modalCloseButton: {
        position: 'absolute',
        top: SPACING.md,
        right: SPACING.md,
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.buttonInactive,
        borderRadius: 16,
    },

    modalCloseText: {
        fontSize: FONT_SIZES.subtitle,
        color: COLORS.textPrimary,
        fontWeight: 'bold',
    },

    modalTitle: {
        fontSize: FONT_SIZES.subtitle,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        marginBottom: SPACING.lg,
        marginTop: SPACING.md,
    },

    /* ===== INPUTS ===== */
    input: {
        backgroundColor: COLORS.background,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: 8,
        paddingHorizontal: SPACING.md,
        paddingVertical: SPACING.sm,
        marginBottom: SPACING.md,
        fontSize: FONT_SIZES.body,
        color: COLORS.textPrimary,
    },

    /* ===== MODAL BUTTONS ===== */
    modalButtons: {
        flexDirection: 'row',
        gap: SPACING.sm,
        marginTop: SPACING.lg,
    },

    modalButton: {
        flex: 1,
        paddingVertical: SPACING.md,
        borderRadius: 8,
        alignItems: 'center',
    },

    modalCancel: {
        backgroundColor: COLORS.buttonInactive,
    },

    modalConfirm: {
        backgroundColor: COLORS.buttonActive,
    },

    modalButtonText: {
        fontSize: FONT_SIZES.body,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
    },

    /* ==================== ESTILOS DA CALCULADORA ==================== */
    calculatorContainer: {
        flex: 1,
        backgroundColor: COLORS.background,
    },
    calculatorDisplayContainer: {
        paddingHorizontal: SPACING.xl + SPACING.lg,
        paddingTop: SPACING.xs,
        paddingBottom: SPACING.xs,
        alignItems: 'flex-end',
    },
    calculatorDisplay: {
        fontSize: 48,
        fontWeight: 'bold',
        color: COLORS.textPrimary,
        letterSpacing: -1,
    },
    calculatorExpression: {
        fontSize: FONT_SIZES.subtitle,
        color: COLORS.textMuted,
        marginBottom: SPACING.xs,
    },
    calculatorKeyboard: {
        paddingHorizontal: SPACING.xl + SPACING.sm,
        paddingBottom: SPACING.xl,
        marginTop: SPACING.xs,
        flex: 1,
        justifyContent: 'flex-end',
    },
    calculatorRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SPACING.md,
    },
    calculatorButton: {
        flex: 1,
        marginHorizontal: SPACING.sm,
        height: 56,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    calculatorButtonOperator: {
        backgroundColor: COLORS.warning,
    },
    calculatorButtonNumber: {
        backgroundColor: COLORS.card,
    },
    calculatorButtonZero: {
        flex: 2,
    },
    calculatorButtonText: {
        fontSize: 22,
        fontWeight: '600',
        color: COLORS.textPrimary,
    },
});

export default styles;
