<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.el-aside{
  height: 100vh;
  background-color: aqua;
}
.el-header{
  background-color: bisque;
}
.el-main{
  background-color: blueviolet;
}
.common-layout{
  height: 100vh;
}
</style>
