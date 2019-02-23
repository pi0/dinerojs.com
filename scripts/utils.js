import marked from 'marked'
import Prism from 'prismjs'

const highlight = code => Prism.highlight(code, Prism.languages.javascript, 'javascript')

export const highlightedMarkdown = marked.setOptions({ highlight })

export const javascriptHighlight = highlight
