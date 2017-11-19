<template>
    <ul class="mui-table-view">
        <li class="mui-bar">
			<router-link to="/" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span>返回</span></router-link>
			<h1 class="mui-title">图文资讯</h1>
		</li>
        <li class=" top-bar"></li>
        <li class="mui-table-view-cell mui-media" v-for="item in newsList" v-bind:key="item.id">
            <router-link :to="{ name: 'nd', params:{ id: item.id } }">
                <img class="mui-media-object mui-pull-left" :src="item.img_url">
                <div class="mui-media-body">
                    <p class="mui-ellipsis title" v-text="item.title"></p>
                    <span class="mui-pull-left" >发表时间：{{ item.add_time | date }}</span>
                    <span class="mui-pull-right" v-text="'点击:'+item.click"></span>
                </div>
            </router-link>
        </li>
    </ul>
</template>
<script>
    export default {
        data(){
            return {
                newsList: [],
            }
        },
        methods: {
            getNewsList(){
                this.axios.get(this.api.getNL)
                .then(result => this.newsList = result.data.message);
            }
        },
        created(){
            this.getNewsList();
        },
        
    }
</script>
<style scoped lang="less">
    .mui-action-back{
        span{
            font-size: 17px;
        }
    }
    .top-bar{
        height: 44px;
    }
    h1{
        color: rgb(40,140,244);
    }
    span{
        color: rgb(40,140,244);
        font-size: 12px;
    }
    
</style>

