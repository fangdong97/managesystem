<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      default-active:
      collapse-transition
      router
    >
      <el-menu-item index="2">
        <el-icon><Menu /></el-icon>
        <span>控制台</span>
      </el-menu-item>
      <el-sub-menu>
        <template #title>
          <el-icon><Goods /></el-icon>
          <span>商品管理</span>
        </template>
        <el-menu-item index="/goodsList">商品列表</el-menu-item>
        <el-menu-item index="/goodsType">商品分类</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3" disabled>
        <el-icon><User /></el-icon>
        <span>用户管理</span>
      </el-menu-item>
      <el-menu-item index="/orderList">
        <el-icon><Tickets /></el-icon>
        <span>订单管理</span>
      </el-menu-item>
      <el-menu-item index="/setting">
        <el-icon><setting /></el-icon>
        <span>设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import emitter from '@/untils/bus'
export default {
  methods: {
  },
  mounted () {
    emitter.on('handleMenu', value => {
      console.log(value)
    })
  }
}
</script>

<style lang="scss" scoped></style>
