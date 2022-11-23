<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"><AsideMenu/></el-aside>
      <el-container>
        <el-header><HeaderNav/></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AsideMenu from '@/components/LayOut/AsideMenu';
import HeaderNav from '@/components/LayOut/HeaderNav.vue';
export default {
  components:{
    AsideMenu,
    HeaderNav
  }
};
</script>

<style lang="scss" scoped>
.el-aside{
  height: 100vh;
}
.el-header{
  height: 50px;
  background-color: rgb(156, 188, 189);
}
.el-main{
  background-color: rgb(218, 216, 221);
}
.common-layout{
  height: 100vh;
}
</style>
