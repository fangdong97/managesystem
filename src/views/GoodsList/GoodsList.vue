<template>
  <div>
    商品管理页
    <el-table :data="goodsList" stripe style="width: 100%">
      <el-table-column prop="id" label="id" width="120" />
      <el-table-column prop="itemName" label="商品名" />
      <el-table-column prop="itemPrice" label="商品价格" />
      <el-table-column prop="thumb" label="商品图片">
        <template #default="scope">
          <img style="display:block" width="40" :src="scope.row.thumb" alt="">
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios'
import getGoodsList from '@/api/goodsList'

export default {
  name: 'GoodsList',
  data () {
    return {
      goodsList: []
    }
  },
  methods: {},
  created () {
    axios
      .get(
        'https://www.fastmock.site/mock/18c2724ae4c2605f0c0caef8af93be62/api/getGoodsList'
      )
      .then((res) => {
        if (res.data.code === 200) {
          this.goodsList = res.data.data
          console.log(this.goodsList)
        }
      })
    getGoodsList().then((res) => {
      console.log(res)
      if (res.data.code === 200) this.goodsList = res.data.data
    })
  }
}
</script>

<style lang="scss" scoped></style>
