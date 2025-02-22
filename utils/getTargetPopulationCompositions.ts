import type { PopulationData } from '@/types/Population/Population'
import type { PopulationCompositions } from '@/types/PopulationComposition/PopulationComposition'

/**
 * 指定された都道府県の人口構成データのみを抽出する関数
 * @param populationCompositions 全都道府県の人口構成データ
 * @param targetPrefNames 抽出したい都道府県名の配列
 * @returns 指定された都道府県の人口構成データ
 */
export const getTargetPopulationCompositions = (
  populationCompositions: PopulationCompositions[],
  targetPrefNames: string[],
): PopulationCompositions[] => {
  // 各人口構成カテゴリ（総人口、年少人口など）に対して処理
  return populationCompositions.map((compositionCategory) => {
    return {
      label: compositionCategory.label,
      // 各年のデータに対して処理
      data: compositionCategory.data.map((yearlyData) => {
        // 年データを基本として新しいオブジェクトを作成
        const filteredYearData: PopulationData = {
          year: yearlyData.year,
        }

        // 指定された都道府県のデータのみを追加
        targetPrefNames.forEach((prefectureName) => {
          const populationValue = yearlyData[prefectureName]
          if (populationValue !== undefined) {
            filteredYearData[prefectureName] = populationValue
          }
        })

        return filteredYearData
      }),
    }
  })
}
