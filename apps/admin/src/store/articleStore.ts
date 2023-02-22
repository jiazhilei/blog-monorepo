import { getArticleList } from 'common-api/article'
import { GetArticleListApiRequest, IArticle } from 'common-types/article'
import { IClassify } from 'common-types/classify'
import { ITag } from 'common-types/tag'
import { message, Pagination, TablePaginationConfig,  } from 'antd'
import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import { IPagination } from 'common-types'

interface IInitState {
  articleList?: IArticle[]
  articleDetial?: IArticle
  pagination?: any ; // DOTO: 待处理
  isLoading?: boolean
  tagsOptions?: ITag[]
  classifyOptions?: IClassify[]
}
const initState: IInitState = {
  articleList: [],
  articleDetial: {},
  pagination: {
    total: 0,
    current: 1,
    pageSize: 10,
    hideOnSinglePage: true,
    pageSizeOptions: ['10', '20', '50', '100']
  },
  isLoading: false,
  tagsOptions: [],
  classifyOptions: []
}
const articleStore = create(
  combine(initState, (set, get) => ({
    fetchArticleList: async (params: GetArticleListApiRequest) => {
      set({ isLoading: true })
      try {
        const { data, base_resp } = await getArticleList(params)
        if (base_resp?.code !== 200) {
          message.error(base_resp?.message)
        } else {
          const { article_list, pagination } = data
          set({
            articleList: article_list ?? [],
            pagination: {
              ...get().pagination,
              current: pagination?.page,
              pageSize: pagination?.pageSize,
              total: pagination?.total
            }
          })
        }
      } catch (error) {
        set({ isLoading: false })
      } finally {
        set({ isLoading: false })
      }
    },
    onTablePageChange: (current = 1, pageSize = 20) => {
      const { pagination } = get()
      if (
        current !== pagination?.current ||
        pageSize !== pagination?.pageSize
      ) {
        set({ pagination: { ...get().pagination, current, pageSize } })
      }
    }
  }))
)
export default articleStore
