<template>
    <article>
        <div class="mui-bar">
            <router-link :to="{ name: 'nl' }" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"><span>返回</span></router-link>
            <h1 class="mui-title">图文详情</h1>
        </div>
        <div class="top-bar"></div>
        <div class="main">
            <h2 class="title">{{ newsDetail.title }}</h2>
            <div class="tips">
                <span>{{ newsDetail.add_time | date }}</span>
                <span>{{ newsDetail.click }}次浏览</span>
            </div>
            <div class="content" v-html="newsDetail.content"></div>
        </div>
    </article>

</template>
<script>
    export default {
        data(){
            return {
                newsDetail:''
            }
        },
        methods: {
            getNewsDetail(){
                this.axios.get(this.api.getND+this.$route.params.id)
                .then(result => this.newsDetail = result.data.message[0])
            }
        },
        created(){
            this.getNewsDetail()
        }
    }
</script>
<style lang="less">
.mui-action-back{
    span{
        font-size: 17px;
    }
}
h1{
    line-height: 44px;
}
.tips{
    color: #999;
    font-size: 12px;
    padding: 10px 0;
    span{
        margin-right: 10px;
    }
}
.main{
    padding: 10px;
    img{
        width: 100%;
    }
    .content{
        p{
            color: #2b2b2b !important;
        }
    }
}
.top-bar{
    height: 44px;
}
.mui-title{
    color: rgb(40,140,244);
}
h2{
    color: rgb(40,140,244);
    font-size: 18px;
}

</style>

