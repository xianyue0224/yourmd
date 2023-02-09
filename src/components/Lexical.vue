<script setup>
import { ref } from "vue"
import { getTableOfCentent } from "../utils"
import { useEditorStore } from "../stores"
import RoughRectangle from "./RoughRectangle.vue"
import { defaultTheme } from "../theme"
import { sampleText } from "./sampleText"

import { $getRoot, ParagraphNode } from "lexical"

import {
  LexicalRichTextPlugin,
  LexicalComposer,
  LexicalOnChangePlugin,
  LexicalContentEditable,
  LexicalHistoryPlugin,
  LexicalAutoFocusPlugin,
  LexicalLinkPlugin,
  LexicalListPlugin,
  LexicalCheckListPlugin,
  LexicalTablePlugin
} from "lexical-vue"

import { HashtagNode } from "@lexical/hashtag"
import { ListItemNode, ListNode } from "@lexical/list"
import { AutoLinkNode, LinkNode } from "@lexical/link"
import { HeadingNode, QuoteNode, $isHeadingNode } from "@lexical/rich-text"
import { CodeHighlightNode, CodeNode } from "@lexical/code"
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table"

import MarkdownShortcutPlugin from "./MarkdownShortcutPlugin.vue"
import AutoLinkPlugin from "./AutoLinkPlugin.vue"

const editorStore = useEditorStore()

// 当内容更新时，同时更新目录
// TODO: 优化代码逻辑
function onChange(editorState) {
  editorState.read(() => {
    getTableOfCentent()
  })
}

const content = ref("")

function onError(err) {
  throw err
}

const config = {
  theme: defaultTheme,
  editable: true,
  editorState: sampleText,
  nodes: [
    HeadingNode,
    QuoteNode,
    ParagraphNode,
    ListNode,
    ListItemNode,
    CodeNode,
    CodeHighlightNode,
    TableNode,
    TableCellNode,
    TableRowNode,
    AutoLinkNode,
    LinkNode,
    HashtagNode
  ],
  onError
}
</script>

<template>
  <div
    class="editor-wrapper"
    :class="editorStore.isShowCatalogue ? '' : 'center'"
  >
    <LexicalComposer :initial-config="config">
      <RoughRectangle>
        <div
          class="editor-container"
          id="editor-container"
          :options="{ roughness: 2 }"
        >
          <LexicalRichTextPlugin>
            <template #contentEditable>
              <LexicalContentEditable class="editor-input" />
            </template>
            <template #placeholder>
              <div class="editor-placeholder">在此输入……</div>
            </template>
          </LexicalRichTextPlugin>
          <MarkdownShortcutPlugin />
          <LexicalHistoryPlugin />
          <LexicalLinkPlugin />
          <LexicalListPlugin />
          <LexicalCheckListPlugin />
          <LexicalAutoFocusPlugin />
          <LexicalTablePlugin />
          <AutoLinkPlugin />
          <LexicalOnChangePlugin v-model="content" @change="onChange" />
        </div>
      </RoughRectangle>
    </LexicalComposer>
  </div>
</template>

<style scoped lang="scss">
.editor-wrapper {
  width: calc(100vw - 24rem);
  height: calc(100vh - 5rem);
  margin: 1rem 1rem 1rem 0;
  transition: 1s ease;
  &.center {
    left: 50%;
    transform: translateX(-50%);
  }
}
.editor-container {
  width: 100%;
  height: 100%;
  padding: 0 1em;
  overflow-y: auto;
  position: relative;

  & div[role="textbox"] {
    &:focus-visible {
      outline: none;
    }
  }
}

.editor-container {
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
</style>
