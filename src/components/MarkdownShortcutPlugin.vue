<script setup>
import { LexicalMarkdownShortcutPlugin, useEditor } from "lexical-vue"
import {
  CHECK_LIST,
  ELEMENT_TRANSFORMERS,
  TEXT_FORMAT_TRANSFORMERS,
  TEXT_MATCH_TRANSFORMERS
} from "@lexical/markdown"
// import { HeadingNode, QuoteNode } from "@lexical/rich-text"
const PLAYGROUND_TRANSFORMERS = [
  CHECK_LIST,
  ...ELEMENT_TRANSFORMERS,
  ...TEXT_FORMAT_TRANSFORMERS,
  ...TEXT_MATCH_TRANSFORMERS
]

// const editor = useEditor()
</script>

<template>
  <LexicalMarkdownShortcutPlugin :transformers="PLAYGROUND_TRANSFORMERS" />
</template>
