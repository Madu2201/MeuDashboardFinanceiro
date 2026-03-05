/**
 * Constantes da aplicação
 */

// Cores da aplicação
export const COLORS = {
  // Backgrounds
  background: '#0f172a',
  card: '#1e293b',
  overlay: 'rgba(0, 0, 0, 0.7)',

  // Textos
  textPrimary: '#ffffff',
  textSecondary: '#cbd5e1',
  textMuted: '#94a3b8',

  // Status
  success: '#22c55e',
  danger: '#ef4444',
  warning: '#f59e0b',
  info: '#3b82f6',

  // Componentes
  border: '#334155',
  buttonActive: '#3b82f6',
  buttonInactive: '#475569',
};

// Tamanhos de fonte
export const FONT_SIZES = {
  title: 28,
  subtitle: 20,
  body: 16,
  small: 14,
  tiny: 12,
};

// Espaçamento
export const SPACING = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

// Abas da aplicação
export const TABS = {
  DASHBOARD: 'dashboard',
  TRANSACTIONS: 'transacoes',
  ADD: 'adicionar',
} as const;

export type TabName = typeof TABS[keyof typeof TABS];
