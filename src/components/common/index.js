//编写自己的vue插件库
import HeaderComponent from './header.vue';
import FooterComponent from './footer.vue';

//vue插件要求提供一个install方法，这个方法会被vue注入
export default {
    install(Vue){
        Vue.component('app-header',HeaderComponent);
        Vue.component('app-footer',FooterComponent);
    }
}
