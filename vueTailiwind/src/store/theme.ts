/*
 * @Author: yangyixin130 1578111082@qq.com
 * @Date: 2025-04-16 20:53:33
 * @LastEditors: yangyixin130 1578111082@qq.com
 * @LastEditTime: 2025-04-16 21:25:15
 * @FilePath: /study-materials/vue3TalidwindTs/vue3TalidwindTs/vueTailiwind/src/store/theme.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import { computed, ref } from "vue";

// 你可以任意命名 `defineStore()` 的返回值，但最好使用 store 的名字，同时以 `use` 开头且以 `Store` 结尾。
// (比如 `useUserStore`，`useCartStore`，`useProductStore`)
// 第一个参数是你的应用中 Store 的唯一 ID。
export const useThemeStore = defineStore("themes", () => {
  // 其他配置...
  const theme = ref<string>("#1677ff");
  const themeColor = computed(() => {
    return theme.value;
  });
  const changeTheme = (color: string) => {
    theme.value = color;
  };
  return {
    theme,
    themeColor,
    changeTheme,
  };
});
