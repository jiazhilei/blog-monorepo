import { IBaseResp, IPagination } from '.'
// 标签
export interface ITag {
  tag_id?: string
  tag_name?: string
}

export interface GetAllTagListApiResponse {
  base_resp?: IBaseResp
  data: {
    tag_list: ITag[]
  }
}
