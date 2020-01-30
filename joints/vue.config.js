module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    devServer: {
        public: 'kimac.joints.id',
        https: true
    },
    transpileDependencies: ['vuetify'],
    productionSourceMap: false,
};
