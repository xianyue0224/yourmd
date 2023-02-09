import { QuoteNode } from "@lexical/rich-text"
import { $applyNodeReplacement } from "lexical"
import rough from "roughjs"

function $createCustomQuoteNode() {
  return $applyNodeReplacement(new CustomQuoteNode())
}

export class CustomQuoteNode extends QuoteNode {
  static getType() {
    return "custom-quote"
  }

  static clone(node) {
    return new CustomQuoteNode(node.__key)
  }

  createDOM(config) {
    const dom = super.createDOM(config)
    const svg = document.createElement("svg")
    dom.append(svg)
    const roughSvg = rough.svg(svg)

    console.log(dom)
    return dom
  }

  exportJSON() {
    const obj = super.exportJSON()
    obj.type = "custom-quote"
    return obj
  }

  static importJSON(serializedNode) {
    const node = $createCustomQuoteNode()
    node.setFormat(serializedNode.format)
    node.setIndent(serializedNode.indent)
    node.setDirection(serializedNode.direction)
    return node
  }
}
