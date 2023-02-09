import { $getRoot, $createTextNode, $createParagraphNode } from "lexical"
import { $createHashtagNode } from "@lexical/hashtag"
import { $createListNode, $createListItemNode } from "@lexical/list"
import { $createAutoLinkNode, $createLinkNode } from "@lexical/link"
import { $createCodeHighlightNode, $createCodeNode } from "@lexical/code"
import { $createHeadingNode, $createQuoteNode } from "@lexical/rich-text"
import {
  $createTableNode,
  $createTableRowNode,
  $createTableCellNode,
  $createTableNodeWithDimensions
} from "@lexical/table"

export function sampleText() {
  const root = $getRoot()
  if (root.getFirstChild() === null) {
    // 标题
    const h1 = $createHeadingNode("h1")
    h1.append($createTextNode("一级标题"))
    const h2 = $createHeadingNode("h2")
    h2.append($createTextNode("二级标题"))
    const h3 = $createHeadingNode("h3")
    h3.append($createTextNode("三级标题"))
    const h4 = $createHeadingNode("h4")
    h4.append($createTextNode("四级标题"))
    const h5 = $createHeadingNode("h5")
    h5.append($createTextNode("五级标题"))
    const h6 = $createHeadingNode("h6")
    h6.append($createTextNode("六级标题"))
    // 引用块
    const quote = $createQuoteNode()
    quote.append(
      $createTextNode(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      )
    )
    // 段落
    const paragraph1 = $createParagraphNode()
    paragraph1.append(
      $createTextNode(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      )
    )
    const paragraph2 = $createParagraphNode()
    paragraph2.append(
      $createTextNode(
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      )
    )
    // 代码块
    // const codeBlock = $createCodeNode()
    // codeBlock.append($createTextNode("console.log('hello world')"))
    root.append(
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      quote,
      paragraph1,
      paragraph2
      //   codeBlock
    )
  }
}
