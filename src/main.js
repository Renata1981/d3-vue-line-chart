import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
Vue.config.productionTip = false;

import Chart from './v-chart/v-chart-plugin';
Vue.use(Chart);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
