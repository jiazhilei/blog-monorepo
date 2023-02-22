// 分页
export interface IPagination {
    total?: number
    page?: number
    pageSize?: number
    pages?: number
    pageSizeOptions?: Array<string>
  }
  // 状态code和状态信息
  export interface IBaseResp {
    code?: number
    message?: string
  }
  