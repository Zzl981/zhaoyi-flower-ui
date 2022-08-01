<template>
    <div class="block text-center">
        <el-carousel height="150px" v-if="isShow">
            <el-carousel-item v-for="item in images" :key="item">
                 <el-link :href="item.courseUrl" >
                    <el-image :src="item.imageUrl"></el-image>
                </el-link>
            </el-carousel-item>
        </el-carousel>
    </div>
    <HomeContent/>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { getBanners } from '../http/index'
import HomeContent from '../components/HomeContent.vue'
const images = ref('')
const isShow = ref(false)
onMounted(async() => {
    // 获取轮播图数据
    images.value = (await getBanners()).data
    isShow.value = true
})
</script>

<style lang="scss">
.el-carousel__container {
    height: 312px !important;
    margin-top: 10px;
}
</style>