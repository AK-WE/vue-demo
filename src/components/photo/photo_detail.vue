<template>
    <article>
        <div class="mui-bar">
            <router-link :to="{ name: 'il', params: { id: 0 }}" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span>返回</span></router-link>
            <h1 class="mui-title">图片详情</h1>
        </div>
        <div class="top-bar"></div>
        <div class="img-detail">
            <h3>{{ photoDetail.title }}</h3>
            <div class="tips">
                <span>{{ photoDetail.add_time | date }}</span>
                <span>{{ photoDetail.click }}次浏览</span>
            </div>
            <div class="img-list">
                <a v-for="item in photoList" :key="item.src">
                    <img :src="item.src">
                </a>
            </div>
            <div v-html="photoDetail.content"></div> 
        </div>
    </article>
</template>
<script>
    export default {
        data(){
            return {
                photoDetail: '',
                photoList: [],
            }
        },
        methods: {
            getContent(){
                this.axios.get(this.api.getPI+this.$route.params.id)
                .then(result => this.photoDetail = result.data.message[0])
            },
            getImgs(){
                this.axios.get(this.api.getPD+this.$route.params.id)
                .then(result => this.photoList = result.data.message)
            }
        },
        created(){
            this.getContent();
            this.getImgs();
        }
    }
</script>
<style lang="less" scoped>
    .img-list{
        width: 100%;
        a{
            display: inline-block;
            width: 33%;
            padding: 8px;
            img{
                width: 100%;
            }
        }
    }
    .mui-action-back{
        span{
            font-size: 17px;
        }
    }
    .top-bar{
        height: 44px;
    }
    .mui-title{
        color: rgb(40,140,244);
    }
    h3{
        color: rgb(40,140,244);
        font-size: 19px;
    }
    .img-detail{
        padding: 10px 5px;
    }
    .tips{
        padding: 10px 0;
        font-size: 12px;
        span{
            margin-right: 10px;
        }
    }
</style>

