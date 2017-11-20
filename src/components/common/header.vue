<template>
    <header>
        <mt-header fixed title="小买卖" style="z-index:999">
            <mt-button icon="back" slot="left" v-if="$route.path != '/index'" @click="$router.go(-1)"></mt-button>
        </mt-header>
        <i></i>
    </header>
</template>
<style scoped>
    header i{
        display: block;
        height: 40px;
    }
</style>
