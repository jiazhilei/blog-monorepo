import { SetStateAction, useEffect, useState } from 'react'
import articleStore from '../../store/articleStore'
import { IArticle } from 'common-types/article'
import { Button, Card, Input, Select, Space, Table } from 'antd'
import { ColumnsType } from 'antd/es/table/InternalTable'
import styles from './index.module.scss'

const { Option } = Select
const ArticleList = () => {
  const {
    articleList,
    tagsOptions,
    // classifyOptions,
    pagination,
    isLoading,
    fetchArticleList,
    onTablePageChange
  } = articleStore(state => state)
  const [keyword, setKeyWord] = useState('')
  const columns: ColumnsType<IArticle> = [
    {
      title: '文章标题',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: '创建时间',
      dataIndex: 'create_time',
      key: 'create_time',
      render: (_, item) => item.create_time
    },
    {
      title: '最后更新',
      dataIndex: 'update_time',
      key: 'update_time',
      render: (_, item) => item.update_time
    },
    {
      title: '操作',
      key: 'action',
      align: 'center',
      render: (_, item: IArticle) => (
        <Space size="middle" direction="vertical">
          <Button type="default" size="small">
            查看
          </Button>
          <Button type="primary" size="small">
            编辑
          </Button>
          <Button type="primary" danger size="small">
            删除
          </Button>
        </Space>
      )
    }
  ]
  const handleChange = (value: string) => {
    console.log(`selected ${value}`)
  }
  const onSearch = () => {
    console.log()
  }

  useEffect(() => {
    fetchArticleList({
      page: pagination?.current,
      pageSize: pagination?.pageSize
    })
  }, [pagination?.current, pagination?.pageSize])

  return (
    <>
      <Card>
        <div className={styles.search}>
          <Space wrap>
            <Input
              placeholder="Basic usage"
              style={{ width: 300 }}
              prefix="关键字查询"
              value={keyword}
              onChange={(e: { target: { value: SetStateAction<string> } }) => {
                setKeyWord(e.target.value)
              }}
            />
            <Select
              defaultValue=""
              onChange={handleChange}
              style={{ width: 150 }}
            >
              {tagsOptions?.map(item => (
                <Option key={item.tag_id} value={item?.tag_id}>
                  {item.tag_name}
                </Option>
              ))}
            </Select>
          </Space>
          <Space wrap>
            <Button type="primary" onClick={() => onSearch}>
              搜索
            </Button>
            <Button type="default">重置</Button>
          </Space>
        </div>
        <div className={styles.create}>
          <Button
            type="primary"
            onClick={() => window.open('/article/create', '_blank')}
          >
            添加文章
          </Button>
        </div>
        <Table
          rowKey="article_id"
          bordered
          loading={isLoading}
          columns={columns}
          dataSource={articleList ?? []}
          pagination={articleList?.length ? pagination : false}
          onChange={pages => {
            onTablePageChange(pages?.current, pages?.pageSize)
          }}
        />
      </Card>
    </>
  )
}
export default ArticleList
