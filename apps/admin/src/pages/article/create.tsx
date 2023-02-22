import { SetStateAction, useState } from 'react'
import NewMdEditor from '../../components/md-editor'
import { Button, Input, Select, Space } from 'antd'
import { articleStatus } from 'common-types/article'
import articleStore from '../../store/articleStore'

import styles from './create.module.scss'

const { Option } = Select
const ArticleCreate = () => {
  const { tagsOptions, classifyOptions } = articleStore.getState()
  const [title, setTitle] = useState('')
  const [html, setHtml] = useState('')
  const [tags, setTags] = useState<string[]>([])
  const [classify, setClassify] = useState<string>()
  const sanitize = (html: string) => {
    setHtml(html)
    return html
  }

  const create = async (status: articleStatus) => {
    console.log(status)
  }

  // useEffect(() => {}, [])
  return (
    <div className={styles.container}>
      <div className={styles.articleTitle}>
        <Input
          placeholder="请输入文章标题"
          addonBefore="文章标题"
          onChange={(e: { target: { value: SetStateAction<string> } }) => {
            setTitle(e.target.value)
          }}
        />
        <Space className={styles.publishBtn}>
          <Button
            type="default"
            onClick={() => create(articleStatus.draft)}
            style={{}}
          >
            存为草稿
          </Button>
          <Button type="primary" onClick={() => create(articleStatus.publish)}>
            发布文章
          </Button>
        </Space>
      </div>
      <div className={styles.tagAndClassify}>
        <Select
          mode="multiple"
          className={styles.tagSelect}
          allowClear
          maxTagCount={2}
          placeholder="请选择文章标标签"
          defaultValue={tags}
          onChange={(value: string[]) => {
            setTags(value)
          }}
        >
          {tagsOptions?.map(item => {
            return (
              <Option key={item.tag_id} value={item.tag_id}>
                {item.tag_name}
              </Option>
            )
          })}
        </Select>
        <Select
          className={styles.classifySelect}
          allowClear
          placeholder="请选择文章分类"
          defaultValue={classify}
          onChange={(value: string) => {
            setClassify(value)
          }}
        >
          {classifyOptions?.map(item => {
            return (
              <Option key={item.classify_id} value={item.classify_id}>
                {item.classify_name}
              </Option>
            )
          })}
        </Select>
      </div>
      <NewMdEditor onHtmlChanged={sanitize} />
    </div>
  )
}
export default ArticleCreate
