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

export const testCatalogue = [
  {
    id: nanoid(),
    level: 1,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 2,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 3,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 4,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 5,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 6,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 1,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 2,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 3,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 4,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 5,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 6,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 1,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 2,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 3,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 4,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 5,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 6,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 1,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 2,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 3,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 4,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 5,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 6,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 1,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 2,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 3,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 4,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 5,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 6,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 1,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 2,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 3,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 4,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 5,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 6,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 1,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 2,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 3,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 4,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 5,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 6,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 1,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 2,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 3,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 4,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 5,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 6,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 1,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 2,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 3,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 4,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 5,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 6,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 1,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 2,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 3,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 4,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 5,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 6,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 1,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 2,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 3,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 4,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 5,
    content: "又大又长的标题"
  },
  {
    id: nanoid(),
    level: 6,
    content: "又大又长的标题"
  }
]
