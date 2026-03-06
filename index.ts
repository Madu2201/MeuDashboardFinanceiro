import { registerRootComponent } from 'expo';

import App from './src/App';

// Esse arquivo é o ponto de entrada do aplicativo. Ele registra o componente raiz do aplicativo, que é o componente App definido em src/App.tsx. O Expo usará esse componente para renderizar a interface do usuário do aplicativo.
registerRootComponent(App);
