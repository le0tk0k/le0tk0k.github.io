import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { nord } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const Code = (props) => {
  const language = props.className.replace(/language-/, '')
  return (
    <SyntaxHighlighter language={language} style={nord}>
      {props.children.trim()}
    </SyntaxHighlighter>
  )
}

export default Code
