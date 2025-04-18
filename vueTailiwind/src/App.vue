<script setup lang="ts">
import { useThemeStore } from './store/theme'
const themeStore = useThemeStore()
// 应用主题色
import { theme } from 'ant-design-vue'
const { token } = theme.useToken()

import Headers from './components/HeaderNav.vue'
import FooterNav from './components/FooterNav.vue'
</script>

<template>
  <div>
    <a-config-provider
      :theme="{
        token: { colorPrimary: themeStore.theme, colorText: themeStore.theme },
      }"
    >
      <a-layout class="min-h-screen [&_.ant-layout]:!min-h-full">
        <a-layout-header class="ps-0 pe-0 [&__.ant-layout-header]:!pe-0">
          <Headers></Headers>
        </a-layout-header>
        <a-layout-content> <router-view /> </a-layout-content>
        <a-layout-footer> <FooterNav></FooterNav> </a-layout-footer>
      </a-layout>
    </a-config-provider>
  </div>
</template>

<style scoped>
:deep(.ant-layout-header) {
  background-color: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  padding-inline: 0;
}
</style>
