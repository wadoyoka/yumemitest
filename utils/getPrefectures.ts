import type { PrefectureResponse } from '@/types/Prefecture/Prefecture'
import axios, { type AxiosError } from 'axios'

const getPrefectures = async (): Promise<PrefectureResponse> => {
  try {
    const response = await axios.get<PrefectureResponse>(`${process.env.API_END_POINT}/api/v1/prefectures`, {
      headers: {
        accept: 'application/json',
        'X-API-KEY': `${process.env.API_KEY}`,
      },
    })

    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError
      switch (axiosError.response?.status) {
        case 400:
          throw new Error(
            'Bad Request: 必要なパラメータが正しく設定されていません。パラメータの設定を確認してください。',
          )
        case 403:
          throw new Error('Forbidden: APIキーが無効または存在しません。APIキーの設定を確認してください。')
        case 404:
          throw new Error('Not Found: 指定されたURLに対応するAPIが存在しません。APIのアドレスを確認してください。')
        case 500:
          throw new Error(
            'Internal Server Error: APIサーバーに問題が発生しました。しばらく時間をおいて再度お試しください。',
          )
        default:
          throw new Error(`HTTP error! status: ${axiosError.response?.status}`)
      }
    }
    throw error
  }
}

export { getPrefectures }
