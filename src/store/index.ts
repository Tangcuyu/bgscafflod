

import Vue from 'vue';
import Vuex from 'vuex';

import helloModule from './module/helloModule/hello';

Vue.use(Vuex);

export default new Vuex.Store({

    modules: {
        helloModule,
    },
});


