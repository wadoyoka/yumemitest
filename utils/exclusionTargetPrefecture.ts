import type { PopulationData } from '@/types/Population/Population'
import type { PopulationCompositions } from '@/types/PopulationComposition/PopulationComposition'

/**
 * 指定された都道府県のデータを人口構成データから除外する
 * @param targetPrefName 除外する都道府県名
 * @param populationData 元の人口構成データ
 * @returns 指定された都道府県のデータを除外した新しい人口構成データ
 */
const exclusionTargetPrefecture = (
  targetPrefName: string,
  populationData: PopulationCompositions[],
): PopulationCompositions[] => {
  return populationData.map((composition) => {
    // 各人口構成（総人口、年少人口など）に対して処理
    const updatedComposition: PopulationCompositions = {
      ...composition,
      data: composition.data.map((yearData) => {
        // yearプロパティを保持しつつ、指定された都道府県を除外
        const { [targetPrefName]: _, ...remainingData } = yearData
        return remainingData as PopulationData
      }),
    }
    return updatedComposition
  })
}

export { exclusionTargetPrefecture }
