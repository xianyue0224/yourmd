<script setup>
import { LexicalAutoLinkPlugin } from "lexical-vue"

const URL_MATCHER =
  /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/

const MATCHERS = [
  (text) => {
    const match = URL_MATCHER.exec(text)
    if (match === null) {
      return null
    }
    const fullMatch = match[0]
    return {
      index: match.index,
      length: fullMatch.length,
      text: fullMatch,
      url: fullMatch.startsWith("http") ? fullMatch : `https://${fullMatch}`
      // attributes: { rel: 'noopener', target: '_blank' }, // Optional link attributes
    }
  }
]
</script>

<template>
  <LexicalAutoLinkPlugin :matchers="MATCHERS" />
</template>
