<script setup>
import { onMounted, ref, useSlots } from "vue"
import rough from "roughjs"

const slots = useSlots()

let el

// 默认配置
const options = ref({
  roughness: 1
})

const vRectangle = {
  mounted(svg) {
    // 在异步任务中可以同时访问到目标元素以及svg
    Promise.resolve().then(() => {
      const removeUnit = (data) => Number(data.replace("px", ""))
      const elStyle = window.getComputedStyle(el)

      // 如果目标元素未设置定位，则将它设置为相对定位
      if (elStyle.position === "static") {
        el.style.position = "relative"
        el.style.zIndex = 999
      }

      const wrapperEl = el.parentNode
      const wrapperElStyle = window.getComputedStyle(wrapperEl)

      if (wrapperElStyle.position === "static") {
        wrapperEl.style.position = "relative"
      }

      if (wrapperElStyle.overflow !== "visible") {
        console.warn("wrapper 元素的 overflow 属性值建议为 visible")
      }

      // 定位
      svg.style.top = elStyle.top
      svg.style.left = elStyle.left
      // zIndex要比目标元素低，设置为背景
      svg.style.zIndex = elStyle.zIndex - 1
      // 宽高和目标元素一致
      svg.style.width = elStyle.width
      svg.style.height = elStyle.height
      const rc = rough.svg(svg)
      const node = rc.rectangle(
        0,
        0,
        removeUnit(elStyle.width),
        removeUnit(elStyle.height),
        options.value
      )
      svg.appendChild(node)
    })
  }
}

onMounted(() => {
  const id = slots.default()[0].props.id
  el = document.getElementById(id)
  options.value = Object.assign(
    {},
    options.value,
    slots.default()[0].props.options
  )
})
</script>

<template>
  <slot></slot>
  <svg class="rectangle" v-rectangle></svg>
</template>

<style scoped lang="scss">
.rectangle {
  position: absolute;
  overflow: visible;
}
</style>
