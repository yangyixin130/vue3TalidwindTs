<!--
 * @Author: yangyixin130 1578111082@qq.com
 * @Date: 2025-04-18 20:44:15
 * @LastEditors: yangyixin130 1578111082@qq.com
 * @LastEditTime: 2025-04-19 09:05:30
 * @FilePath: /study-materials/vue3TalidwindTs/vue3TalidwindTs/vueTailiwind/src/components/FooterNav.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template lang="">
    <div class='flex justify-between items-center cursor-pointer' @click='targetMine'>
        <div class='text-2xl font-bold'>{{userName}}</div>
        <div class='text-2xl font-bold'>{{email}}</div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const userName = ref<string>('yyx')
const email: string = '1578111082@qq.com'

const router = useRouter()
const route = useRoute()

const targetMine = (): void => {
  router.push({
    name: 'mine',
    query: {
      ...route.query,
    },
  })
}
</script>

<style lang="scss">
</style>