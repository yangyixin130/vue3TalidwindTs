<!--
 * @Author: yangyixin130 1578111082@qq.com
 * @Date: 2025-04-15 19:41:51
 * @LastEditors: yangyixin130 1578111082@qq.com
 * @LastEditTime: 2025-04-16 21:54:12
 * @FilePath: /study-materials/vue3TalidwindTs/vue3TalidwindTs/vueTailiwind/src/components/headerNav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script lang="ts" setup>
import { ref } from 'vue'
import { useThemeStore } from '../store/theme'
const themeColor = ref<boolean>(false)
const themeStore = useThemeStore()
// 切换主题色
const themeColorChange = () => {
  themeStore.changeTheme(themeColor.value ? 'red' : 'blue')
}
</script>

<template>
  <div
    class="flex items-center h-full bg-slate-100 px-4 opacity-80 sticky max-w-8xl"
  >
    <div class="text-2xl font-bold">溺水的鱼的博客</div>
    <ul class="lg:flex items-center space-x-8 ml-auto hidden">
      <li><a href="#" class="hover:text-sky-500">github</a></li>
      <li><a href="#" class="hover:text-sky-500">邮箱</a></li>
    </ul>
    <a-switch
      v-model:checked="themeColor"
      class="lg:hidden ml-auto bg-white"
      @change="themeColorChange"
    ></a-switch>
    <div class="pl-6 md:hidden">
      <svg width="24" height="24">
        <path
          d="M5 6h14M5 12h14M5 18h14"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        ></path>
      </svg>
    </div>
  </div>
</template>

<style  scoped>
@media (min-width: 1024px) {
  .lg\:flex {
    display: flex;
  }
}
ul {
  margin-bottom: 0;
}
</style>