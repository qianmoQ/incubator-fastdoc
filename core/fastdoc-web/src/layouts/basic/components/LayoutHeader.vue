<template>
  <div>
    <el-menu mode="horizontal"
             router
             :default-active="defaultActiveMenu"
             :ellipsis="false">
      <el-menu-item>
        FastDoc
      </el-menu-item>
      <el-menu-item index="home" route="/">
        <template #title>
          <el-icon>
            <font-awesome-icon icon="home" />
          </el-icon>
          <span>首页</span>
        </template>
      </el-menu-item>
      <div class="flex-grow"/>
      <el-menu-item route="register">
        <template #title>
          <el-icon>
            <font-awesome-icon :icon="['fas', 'user-plus']" />
          </el-icon>
          <span>注册</span>
        </template>
      </el-menu-item>
      <el-menu-item index="/auth/login">
        <template #title>
          <el-icon>
            <font-awesome-icon :icon="['fas', 'right-to-bracket']" />
          </el-icon>
          <span>登录</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
export default {
  name: 'FastDocLayoutHeader',
  data () {
    return {
      defaultActiveMenu: 'home'
    }
  }
}
</script>
<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
