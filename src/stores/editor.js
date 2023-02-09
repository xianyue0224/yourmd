import { ref, computed } from "vue"
import { defineStore } from "pinia"
import { testCatalogue } from "../utils"

export const useEditorStore = defineStore("Editor", () => {
  // 编辑器实例
  const editor = ref({})
  // 目录的内容
  const tableOfContent = ref([])
  // 是否展示目录
  const isShowCatalogue = ref(true)
  return { tableOfContent, editor, isShowCatalogue }
})
