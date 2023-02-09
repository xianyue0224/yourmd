import { $getRoot } from "lexical"
import { $isHeadingNode } from "@lexical/rich-text"
import { useEditorStore } from "../stores"

export function getTableOfCentent() {
  const editorStore = useEditorStore()
  const root = $getRoot()

  // 新目录
  let current = []
  // 旧目录
  const prev = [...editorStore.tableOfContent]

  // 遍历所有lexical节点，将标题节点的信息整理成对象按顺序加入新目录
  root.getChildren().forEach((node) => {
    if (!$isHeadingNode(node)) return
    current.push({
      level: node.__tag.charAt(1),
      text: node.getTextContent(),
      active: false
    })
  })

  let i = 0
  // 遍历页面输入框中的节点，如果是标题节点，就按顺序整合到新目录中
  document.querySelector(".editor-input").childNodes.forEach((node) => {
    if (node instanceof HTMLHeadingElement) {
      current[i].node = node
      i++
    }
  })

  // 判断是否有旧目录，没有的话，直接更新到页面
  if (prev.length === 0) {
    editorStore.tableOfContent = current
    return
  }

  // 有旧目录，查找是否有激活的一项
  const activeItem = prev.find((item) => item.active)

  if (activeItem) {
    // 有激活项就要把新目录中对应的一项设置为激活
    current = current.map((item) => {
      if (item.node === activeItem.node) item.active = true
      return item
    })
  }

  // 最后更新到页面中
  editorStore.tableOfContent = current
}
