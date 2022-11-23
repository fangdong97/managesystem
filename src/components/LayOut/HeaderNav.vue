<template>
  <el-row>
    <el-col :span="1">
      <el-icon><Fold /> </el-icon>
    </el-col>
    <el-col :span="16">
      <el-breadcrumb separator="/" class="breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-col :span="4" class="icon">
      <el-icon><Search /></el-icon>
      <el-icon><FullScreen /></el-icon>
      <el-icon class="bell"><Bell /></el-icon>
    </el-col>
    <el-col :span="3">
      <el-dropdown>
        <div class="el-dropdown-link">
          <span>XXXXX</span>
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item disabled>Action 4</el-dropdown-item>
            <el-dropdown-item divided>Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.el-row {
  height: 100%;
  .icon {
    display: flex;
    justify-content: space-around;
    background-color: cadetblue;
  }
  .el-col {
    .el-icon {
      height: 100%;
      font-size: 18px;
      font-weight: 300;
      color: rgb(78, 82, 82);
    }
    .bell {
      color: rgb(162, 165, 165);
    }
    .el-dropdown {
      height: 100%;
      float: right;
      margin-right: 10px;
      .el-dropdown-link {
        display: flex;
        align-items: center;
        .el-avatar{
            margin-left:10px;
        }
      }
    }
    .el-breadcrumb {
      height: 100%;
      span {
        height: 100%;
      }
    }
  }
}
</style>
