import RichCodeEditor from '@uiw/react-textarea-code-editor'
import { editorStyles } from 'constants'

const CodeEditor = ({ disabled, data, onChange }) => {
  return (
    <div>
      <RichCodeEditor
        value={JSON.stringify(data)}
        language="js"
        placeholder="{}"
        disabled={disabled}
        onChange={(evnt) => {
          const { value } = evnt.target
          onChange(value)
        }}
        padding={15}
        style={editorStyles}
      />
    </div>
  )
}

CodeEditor.defaultProps = {
  disabled: false,
  data: {},
  onChange: () => null,
}
export default CodeEditor
