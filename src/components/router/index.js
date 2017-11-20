import HomeComponent from '../home/home.vue';
import NewsListComponent from '../news/news_list.vue';
import NewsDetailComponent from '../news/news_detail.vue';
import PhotoListComponent from '../photo/photo_list.vue';
import PhotoDetailComponent from '../photo/photo_detail.vue';
export default {
    routes: [
        { path: '/', redirect: '/index' },
        { path: '/index', component: HomeComponent },
        { name: 'nl', path: '/news/list', component: NewsListComponent },
        { name: 'nd', path: '/news/detail/:id', component: NewsDetailComponent },
        { name: 'il', path: '/photo/list/:id', component: PhotoListComponent },
        { name: 'id', path: '/photo/detail/:id', component: PhotoDetailComponent },
    ]
}