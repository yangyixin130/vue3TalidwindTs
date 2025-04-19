<template>
  <div class="p-4">
    <!-- 排版布局 -->
    <a-typography>
      <a-typography-title>ant-design的简单使用</a-typography-title>
      <a-typography-paragraph>
        用于学习ant的一个简单使用案例
      </a-typography-paragraph>
      <a-typography-paragraph>
        这里使用的是排版工具内容
        <a-typography-text strong> 使用strong加重样式 </a-typography-text>
      </a-typography-paragraph>
      <a-typography-title :level="2">标题level为2的h2标题</a-typography-title>
      <a-typography-paragraph>
        测试属性为mark的标签
        <a-typography-text mark>Sketch</a-typography-text>
        and
        <a-typography-text code>Axure</a-typography-text>
        ), to help people create their product prototypes beautifully and
        efficiently.
      </a-typography-paragraph>
    </a-typography>
    <!-- 轮播图操作 -->
    <a-carousel autoplay class="mt-px text-white">
      <a-carousel-item v-for="item in 4" :key="item">
        <div class="text-base">{{ item }}</div>
      </a-carousel-item>
    </a-carousel>
  </div>
</template>

<script lang="ts" setup>
import { theme } from 'ant-design-vue'
const { token } = theme.useToken()

import { useThemeStore } from '../store/theme'
const themeStore = useThemeStore()
</script>


<style  scoped lang="scss">
:deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: v-bind('themeStore.theme');
  overflow: hidden;
}
</style>