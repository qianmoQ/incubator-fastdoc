<template>
  <div class="common-layout">
    <el-container>
      <FastDocLayoutHeader>
      </FastDocLayoutHeader>
      <FastDocLayoutContent>
      </FastDocLayoutContent>
      <FastDocLayoutFooter>
      </FastDocLayoutFooter>
    </el-container>
  </div>
</template>

<script lang="ts">
import FastDocLayoutHeader from '@/layouts/basic/components/LayoutHeader.vue'
import FastDocLayoutContent from '@/layouts/basic/components/LayoutContent.vue'
import FastDocLayoutFooter from '@/layouts/basic/components/LayoutFooter.vue'
import { ElContainer } from 'element-plus'

export default {
  name: 'FastDocLayoutContainer',
  components: {
    ElContainer,
    FastDocLayoutHeader,
    FastDocLayoutContent,
    FastDocLayoutFooter
  }
}
</script>
