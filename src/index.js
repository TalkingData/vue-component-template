import Component from './lib/components/index.vue';
import Config from './config.js';

const VueComponent = {
    Component
};

const install = function(Vue, opts = {}) {
    Vue.component(Config.componentName, Component);
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default Object.assign(VueComponent, { install });