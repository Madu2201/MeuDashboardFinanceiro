// Esse arquivo é necessário para o Expo funcionar corretamente. Ele configura o Babel para usar o preset do Expo, que inclui as transformações necessárias para que o código funcione em dispositivos móveis.
export default function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
    };
};