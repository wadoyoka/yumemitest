import type {
  PopulationCompositionResponse,
  PrefectureDetailData,
} from '@/types/PopulationComposition/PopulationComposition'
import type { AxiosError } from 'axios'
import axios from 'axios'

const getPopulationComposition = async (prefCode: string): Promise<PrefectureDetailData> => {
  try {
    const response = await axios.get<PopulationCompositionResponse>(
      `${process.env.API_END_POINT}/api/v1/population/composition/perYear`,
      {
        params: { prefCode },
        headers: {
          accept: 'application/json',
          'X-API-KEY': process.env.API_KEY || '',
        },
      },
    )

    if (response.data.message) {
      throw new Error(response.data.message)
    }

    return response.data.result
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError
      switch (axiosError.response?.status) {
        case 400:
          throw new Error(
            'Bad Request: 必要なパラメータが正しく設定されていません。パラメータの設定を確認してください。',
          )
        case 403:
          throw new Error('Forbidden: APIキーが存在しないか無効です。APIキーの設定を確認してください。')
        case 404:
          throw new Error('Not Found: 指定されたURLに対応するAPIが存在しません。APIのアドレスを確認してください。')
        case 500:
          throw new Error(
            'Internal Server Error: APIサーバーに問題が発生しました。しばらく時間をおいて再度お試しください。',
          )
        default:
          throw new Error(`API request failed: ${axiosError.message}`)
      }
    } else {
      throw error
    }
  }
}

export default getPopulationComposition
