<script setup>
const props = defineProps({
  content: { type: Array, default: [] }
})

defineEmits(["jumpIntoView"])

function jump(idx) {
  // target.classList.add("jumpin")
  // console.log(target)
}
</script>

<template>
  <ul class="catalogue" v-if="props.content.length !== 0">
    <li
      class="catalogue_item"
      :class="`catalogue_item${level}`"
      :style="{ paddingLeft: `${level}rem` }"
      v-for="({ id, level, content }, idx) in props.content"
      :key="id"
      @click="$emit('jumpIntoView', idx)"
    >
      <span>{{ content }}</span>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.catalogue {
  width: 100%;
  height: fit-content;
  list-style: none;
  padding-left: 0;
}

.catalogue_item {
  color: #646a73;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  &:hover {
    color: #00aae2;
  }
}

.catalogue_item1 {
  font-weight: bolder;
}
</style>
