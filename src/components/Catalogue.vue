<script setup>
import RoughRectangle from "./RoughRectangle.vue"
import { useEditorStore } from "../stores"

const editorStore = useEditorStore()

let prevNode
/**
 * 点击目录跳转对应的标题
 * @param {*} node 要跳转的标题节点
 * @param {*} id 唯一id
 */
function jumpIntoView(node) {
  // 只让目录中的被点击的一项高亮
  for (let i = 0; i < editorStore.tableOfContent.length; i++) {
    const item = editorStore.tableOfContent[i]
    if (item.node === node) item.active = true
    else item.active = false
  }
  // 让上一次跳转的标题立刻取消背景色
  if (prevNode) {
    prevNode.classList.remove("bgflash")
  }
  // 将本次跳转的标题节点保存
  prevNode = node
  // 让本次要跳转的标题节点移入视口
  node.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
  // 给本次要跳转的标题节点添加一个背景色
  node.classList.add("bgflash")
  setTimeout(() => {
    // 3秒后移除背景色
    node.classList.remove("bgflash")
  }, 3000)
}
</script>

<template>
  <Transition>
    <div
      class="catalogue_wrapper"
      v-if="
        editorStore.tableOfContent.length !== 0 && editorStore.isShowCatalogue
      "
    >
      <RoughRectangle>
        <div class="catalogue" id="catalogue" :options="{ roughness: 3 }">
          <div
            class="catalogue_item"
            :class="`level${level}`"
            :style="{
              paddingLeft: `${level}rem`,
              color: active ? '#00aae2' : '#646a73'
            }"
            v-for="{
              id,
              level,
              text,
              node,
              active
            } in editorStore.tableOfContent"
            :key="id"
            @click="jumpIntoView(node)"
          >
            {{ text }}
          </div>
        </div>
      </RoughRectangle>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
.catalogue_wrapper {
  margin: 1rem;
  width: 20rem;
  height: calc(100vh - 5rem);
}
.catalogue {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.catalogue_item {
  color: #646a73;
  width: 20rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  &:hover {
    color: #00aae2;
  }
}

.level1 {
  font-weight: bolder;
}

// 这是目录的滚动条样式，目前先暂时隐藏滚动条
.catalogue {
  // &:hover::-webkit-scrollbar-thumb {
  //   background: #d0d2d5;
  //   &:hover {
  //     background: #a2a6ab;
  //   }
  // }

  &::-webkit-scrollbar {
    width: 8px;
    height: 1px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(#0d0d0d, 0);
  }

  &::-webkit-scrollbar-track {
    background: rgba(#0d0d0d, 0);
  }
}

.v-enter-active {
  animation: move 0.5s;
}
.v-leave-active {
  animation: move 0.5s reverse;
}

@keyframes move {
  0% {
    transform: translateX(-100%);
  }

  80% {
    transform: translateX(10%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
