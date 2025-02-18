import type {
  BufferPopulationCompositionsData,
  PopulationCompositions,
} from '@/types/PopulationComposition/PopulationComposition'
import type { Prefecture } from '@/types/Prefecture/Prefecture'
import { formatPopulationCompositionsData } from '@/utils/formatPopulationCompositionsData'
import getPopulationComposition from '@/utils/getPopulationComposition'

async function getPopulationCompositions(prefectures: Prefecture[]): Promise<PopulationCompositions[]> {
  // ステップ1: 各県の人口構成データを取得
  const populationDataPromises = prefectures.map(fetchPrefectureData)
  const buffer: BufferPopulationCompositionsData[] = await Promise.all(populationDataPromises)

  // ステップ2: データをフォーマット
  const formattedData = formatPopulationCompositionsData(buffer)

  // ステップ3: 結果を返す
  return formattedData
}

// 各都道府県のデータを取得する補助関数
async function fetchPrefectureData(prefecture: Prefecture): Promise<BufferPopulationCompositionsData> {
  const data = await getPopulationComposition(prefecture.prefCode.toString())
  return {
    prefName: prefecture.prefName,
    data,
  }
}

export { getPopulationCompositions }
