import Vue from 'Vue';
import app from '../components/App.vue'

new Vue({
    el: '#app',
    render(c){
        return c(app);
    }
})