<template>
  <div>
    <el-container>
      <el-header style="padding: 0;">
        <FastDocLayoutHeader>
        </FastDocLayoutHeader>
      </el-header>
      <el-main>
        <FastDocLayoutContent>
        </FastDocLayoutContent>
      </el-main>
      <el-footer>
        <FastDocLayoutFooter>
        </FastDocLayoutFooter>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import FastDocLayoutHeader from '@/layouts/basic/components/LayoutHeader.vue'
import FastDocLayoutContent from '@/layouts/basic/components/LayoutContent.vue'
import FastDocLayoutFooter from '@/layouts/basic/components/LayoutFooter.vue'

export default {
  name: 'FastDocLayoutContainer',
  components: {
    FastDocLayoutHeader,
    FastDocLayoutContent,
    FastDocLayoutFooter
  }
}
</script>
