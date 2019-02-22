/**
 * Created by aresn on 19/2/22.
 */
import 'babel-polyfill';
import VueRouter from 'vue-router';
import App from './app.vue';

import './styles/index.less';

Vue.use(VueRouter);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
    esModule: false,
    mode: 'history',
    routes: [
        {
            path: '/',
            component: (resolve) => require(['./routers/index.vue'], resolve)
        },
    ]
});

const app = new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
