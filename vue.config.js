const globalPath = require('./src/config/index.js');

/**
 *
 *  配置前端代理，以及开发环境配置
 */
module.exports = {
    publicPath: globalPath.jsonPath,
    configureWebpack: {
        resolve: {
            alias: {
                // 别名
                vue$: "vue/dist/vue.esm.js",
            },
        },
    },
    pages : {
        index : {
            entry : ['node_modules/core-js' ,'src/main.ts']
        }
    }
}