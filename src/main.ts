import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/index';
import 'element-ui/packages/theme-chalk/lib/index.css';
import { messagePlugin } from '@/util/message';

Vue.config.productionTip = false;

import publishObjectPath from '@/util/configRegistry';

import * as ElementUI from 'element-ui';

Vue.use(ElementUI);

Vue.use(messagePlugin, 'messageBus');

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
