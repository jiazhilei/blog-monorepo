import { IBaseResp, IPagination } from '.'
// 文章
export interface IArticle {
  article_id?: string
  title?: string
  content?: string
  status?: articleStatus
  tags?: string[]
  classify?: string
  update_time?: string
  create_time?: string
}
export enum articleStatus {
  unknown = 0,
  draft = 1,
  publish = 2
}

// 接口参数和返回值
// 文章列表
export interface GetArticleListApiRequest {
  page?: number
  pageSize?: number
}
export interface GetArticleListApiResponse {
  base_resp?: IBaseResp
  data: {
    article_list?: IArticle[]
    pagination?: IPagination
  }
}

// 文章详情
export interface GetArticleDetailApiRequest {
  article_id?: string
}
export interface GetArticleDetailApiResponse {
  base_resp?: IBaseResp
  data: {
    articleDetial?: IArticle
  }
}
// 创建文章
export type CreateArticleApiRequest = IArticle
export interface CreateArticleApiResponse {
  base_resp?: IBaseResp
}
// 删除文章

// 修改文章
