import hljs from 'highlight.js'

export default code => hljs.highlightAuto(code, ['js', 'sh']).value
