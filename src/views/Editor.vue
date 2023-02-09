<script setup>
import Lexical from "../components/Lexical.vue"
import Catalogue from "../components/Catalogue.vue"
import { useEditorStore } from "../stores"
const editorStore = useEditorStore()
</script>

<template>
  <div class="editor">
    <header>
      <button
        @click="editorStore.isShowCatalogue = !editorStore.isShowCatalogue"
      >
        控制目录开关
      </button>
    </header>
    <main>
      <Catalogue />
      <Lexical />
    </main>
  </div>
</template>

<style lang="scss">
$header_height: 3rem;
.editor {
  height: 100%;
  display: grid;
  grid-template-rows: 3rem auto;
  grid-template-areas: "header" "main";

  header {
    height: 100%;
    grid-area: header;
    border-bottom: 1px solid #dee0e3;
  }

  main {
    height: 100%;
    width: 100%;
    grid-area: main;
    display: flex;
    gap: 1rem;
    position: relative;
    overflow: hidden;
  }
}
</style>
