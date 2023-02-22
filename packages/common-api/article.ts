import {
    CreateArticleApiRequest,
    CreateArticleApiResponse,
    GetArticleDetailApiRequest,
    GetArticleDetailApiResponse,
    GetArticleListApiRequest,
    GetArticleListApiResponse
  } from '../common-types/article'
  import httpProvider from '../common-utils/http'
  
  // 文章列表
  export const getArticleList = async (
    params: GetArticleListApiRequest
  ): Promise<GetArticleListApiResponse> => {
    return httpProvider.request({
      url: '/article/get_article_list',
      method: 'GET',
      params
    })
  }
  
  // 文章详情
  export const getArticleDetail = (
    params: GetArticleDetailApiRequest
  ): Promise<GetArticleDetailApiResponse> => {
    return httpProvider.request({
      url: '/article/get_article_detail',
      method: 'GET',
      params
    })
  }
  // 创建文章
  export const createArticle = (
    data: CreateArticleApiRequest
  ): Promise<CreateArticleApiResponse> => {
    return httpProvider.request({
      url: '/article/create_article',
      method: 'POST',
      data
    })
  }
  