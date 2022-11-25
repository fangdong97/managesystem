<template>
  <div class="todoList">
    <div class="input">
      <el-input v-model="input"/>
      <el-button type="primary" @click="addList">添加</el-button>
    </div>
    <div class="itemList">
      <div class="item" v-for="(item, index) in todoList" :key="index">
        <p>{{item}}</p>
        <el-button type="danger" @click="delItem(index)">删除</el-button>
        <el-button type="success">点击完成</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DemoPage',
  data () {
    return {
      input: '',
      todoList: []
    }
  },
  methods: {
    addList () {
      if (this.input) { this.todoList.push(this.input) }
      this.input = ''
    },
    delItem (index) {
      this.todoList.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.todoList{
  width: 400px;
  .input{
    display:  flex;
    .el-button{
      margin-left: 5px;
    }
  }
  .itemList{
    margin-top: 10px;
    .item{
      display: flex;
      padding: 0 10px;
      margin: 5px;
      border-radius:5px;
      background-color: rgb(182, 147, 117);
      v:first-child{
        margin-top: 30px;
      }
      p{
        flex: 1;
        font-size: 14px;
        line-height: 30px;
        color: rgb(41, 40, 43);
      }
      .el-button{
        padding: 0;
        height: 20px;
        margin-top: 5px;
        margin-left: 5px;
      }
    }
  }
}
</style>
