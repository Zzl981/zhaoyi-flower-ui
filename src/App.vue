<template>
<!-- 网站头部组件 -->
  <HeaderCom/>
<!-- 路由标签 -->
  <router-view></router-view>
<!-- 网站尾部组件 -->
<FooterCom/>
</template>

<script lang="ts" setup>
import HeaderCom from './components/HeaderCom.vue';
import FooterCom from './components/FooterCom.vue';
// import HelloWorld from './components/HelloWorld.vue';

// export default defineComponent({
//   name: 'App',
//   components: {
//     // HelloWorld
//   }
// });
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
