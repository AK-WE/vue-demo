//from后面的路径，如果含有./ ../那么就相对于当前文件来找文件
//如果没有，则会去node_modules里面去找对应的包
//导入第三方包

import Vue from 'vue';
import MintUi from 'mint-ui';
import axios from 'axios';
import VueRouter from 'vue-router';
import 'mint-ui/lib/style.css';
import 'mui/dist/css/mui.css';
import 'mui/examples/hello-mui/css/icons-extra.css'
import Common from '../components/common';// 会自动找到index.js导入
import RouterList from '../components/router';
import api from '../js/api_config.js';
import date from '../components/common/filter/date.js';

//启用vue插件
Vue.use(MintUi);
Vue.use(Common);
Vue.use(VueRouter);

//在vue原型中添加axios，让他可在vue全局使用;
Vue.prototype.axios = axios;
Vue.prototype.api = api;
Vue.filter('date',date.date)

//导入根组件
import AppComponent from '../components/App.vue';

//渲染根组件，启动项目
new Vue({
    el: '#app',
    render(createNode){
        return createNode(AppComponent);
    },
    router: new VueRouter(RouterList),
})