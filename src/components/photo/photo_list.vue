<template>
    <div id="slider" class="mui-slider" >
        <div class="nav-bar">
            <div id="sliderSegmentedControl" class="mui-slider-indicator mui-segmented-control mui-segmented-control-inverted mui-segmented-control-primary">
                <router-link class="mui-control-item mui-active" :to="{ name: 'il', params: { id: 0 } }">全部</router-link>
                <router-link class="mui-control-item mui-active" :to="{ name: 'il', params: { id: item.id } }" v-for="item in titleList" :key="item.id">
                    <span>{{ item.title }}</span>
                </router-link>
            </div>
        </div>
        <div class="photo-content">
            <ul>
                <li v-for="val in photoList" :key="val.id">
                    <router-link :to="{ name: 'id', params: { id: val.id } }" class="img-detail">
                        <img v-lazy="val.img_url">
                        <div class="content">
                            <h3>{{ val.title }}</h3>
                            <span>{{ val.zhaiyao }}</span>  
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      titleList: [],
      photoList: []
    };
  },
  methods: {
    getTitileList() {
      this.axios
        .get(this.api.getPL)
        .then(result => (this.titleList = result.data.message));
    },
    getPhotoList() {
      this.axios
        .get(this.api.getPC + this.$route.params.id)
        .then(result => (this.photoList = result.data.message));
    }
  },
  watch: {
    $route() {
      this.getPhotoList();
    }
  },
  created() {
    this.getTitileList();
    this.getPhotoList();
  }
};
</script>
<style scoped lang="less">
.active {
  border-bottom: 2px solid #007aff;
}
#sliderSegmentedControl {
  width: auto;
}
.nav-bar::-webkit-scrollbar {
  display: none;
}
.nav-bar {
  overflow-x: auto;
}
.mui-table-view-cell {
  background-color: #000;
}
.mui-content-padded {
  background-color: #000;
}
.mui-control-item {
  box-sizing: border-box;
  overflow: visible;
  padding: 0 10px;
  span {
    display: block;
    width: 100%;
  }
}
.photo-content {
  width: 100%;
  ul {
    width: 100%;
    padding: 10px 0;
    margin: 0;
    list-style: none;
  }
  li {
    width: 100%;
    position: relative;
    .img-detail{
        color: #fff;
    }
  }
  img {
    width: 100%;
    height: 300px;
  }
  .content {
    overflow: hidden;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    h3 {
      font-size: 16px;
    }
    span {
      font-size: 14px;
    }
  }
}
</style>
