<script setup>
import { ref } from "vue"
import { generateTree, testContent } from "../utils"
import { useEditor, EditorContent } from "@tiptap/vue-3"
import StarterKit from "@tiptap/starter-kit"
import Catalogue from "../components/Catalogue.vue"

const catalogueContent = ref([])

const editor = useEditor({
  content: testContent(),
  extensions: [
    StarterKit.configure({
      heading: {
        HTMLAttributes: {
          flag: "heading"
        }
      }
    })
  ],
  editorProps: {
    attributes: {
      spellcheck: false
    }
  },
  onUpdate({ editor }) {
    catalogueContent.value = generateTree(editor.getJSON().content)
  }
})

function jumpIntoView(idx) {
  const target = document.querySelectorAll("[flag=heading]")[idx]
  target.scrollIntoView({
    behavior: "smooth",
    block: "start"
  })
}
</script>

<template>
  <div class="container" v-if="editor">
    <header></header>
    <div class="sidebar">
      <Catalogue :content="catalogueContent" @jumpIntoView="jumpIntoView" />
    </div>
    <EditorContent :editor="editor" />
  </div>
</template>

<style lang="scss">
$header_height: 3rem;
.container {
  height: 100vh;
  display: grid;
  grid-template-rows: $header_height auto;
  grid-template-columns: 300px auto;
  grid-template-areas:
    "header header header"
    "sidebar main main";

  header {
    height: 100%;
    grid-area: header;
    border-bottom: 1px solid #dee0e3;
  }

  .sidebar {
    grid-area: sidebar;
    overflow: auto;
    padding-top: 0.5rem;

    &:hover::-webkit-scrollbar-thumb {
      background: #d0d2d5;
      &:hover {
        background: #a2a6ab;
      }
    }

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
}

div:has(.ProseMirror) {
  position: relative;
  grid-area: main;
}

.ProseMirror {
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;

  > * {
    margin-top: 0.75em;
    margin-right: 10rem;
  }

  &:focus {
    outline: none;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: "JetBrainsMono", monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  hr {
    margin: 1rem 0;
    margin-right: 10rem;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, 0.1);
  }
}
</style>
