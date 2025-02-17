export interface Prefecture {
  prefCode: number
  prefName: string
}

export interface PrefectureResponse {
  message: string | null
  result: Prefecture[]
}
