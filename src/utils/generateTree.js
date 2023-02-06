import { nanoid } from "nanoid"

/**
 *
 * @param {Array} content
 */
export function generateTree(content) {
  const result = []
  content.forEach((node) => {
    if (node.type === "heading" && node.content) {
      result.push({
        id: nanoid(),
        level: node.attrs.level,
        content: node.content[0].text
      })
    }
  })
  return result
}
