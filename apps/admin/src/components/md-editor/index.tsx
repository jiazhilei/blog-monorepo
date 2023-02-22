import { useState } from 'react'
import MdEditor from 'md-editor-rt'
import 'md-editor-rt/lib/style.css'
import styles from './index.module.scss'

interface INewMdEditor {
  onHtmlChanged?: (h: string) => void
}
const NewMdEditor = (props: INewMdEditor) => {
  const { onHtmlChanged } = props
  const [text, setText] = useState('# Hello Editor')
  return (
    <MdEditor
      className={styles.MdEditorBox}
      modelValue={text}
      onChange={setText}
      onHtmlChanged={onHtmlChanged}
    />
  )
}
export default NewMdEditor
