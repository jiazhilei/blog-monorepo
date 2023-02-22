import { IBaseResp } from '.'

// 分类
export interface IClassify {
  classify_id?: string
  classify_name?: string
}
export interface GetAllClassifyListApiResponse {
  base_resp?: IBaseResp
  data: {
    classify_list: IClassify[]
  }
}
