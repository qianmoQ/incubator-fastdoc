<template>
  <div>
    <el-menu mode="horizontal"
             :default-active="defaultActiveMenu"
             :ellipsis="false">
      <el-menu-item>
        FastDoc
      </el-menu-item>
      <el-menu-item index="home" route="/">
        <template #title>
          <el-icon>
            <HomeFilled/>
          </el-icon>
          <span>首页</span>
        </template>
      </el-menu-item>
      <div class="flex-grow"/>
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
