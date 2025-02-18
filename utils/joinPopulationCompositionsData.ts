import type { PopulationData } from '@/types/Population/Population'
import type { PopulationCompositions } from '@/types/PopulationComposition/PopulationComposition'

function joinPopulationCompositionsData(
  existsArray: PopulationCompositions[],
  newArray: PopulationCompositions[],
): PopulationCompositions[] {
  // 結果を格納する配列
  const result: PopulationCompositions[] = []

  // 1. 既存のデータを処理
  existsArray.forEach((existsItem) => {
    const newItem = newArray.find((item) => item.label === existsItem.label)
    if (newItem) {
      // 同じラベルの新しいデータがある場合、データを結合
      result.push({
        label: existsItem.label,
        data: mergePopulationData(existsItem.data, newItem.data),
      })
    } else {
      // 新しいデータにないラベルは、そのまま追加
      result.push(existsItem)
    }
  })

  // 2. 新しいデータで、まだ追加されていないものを処理
  newArray.forEach((newItem) => {
    if (!result.some((item) => item.label === newItem.label)) {
      result.push(newItem)
    }
  })

  return result
}

function mergePopulationData(existsData: PopulationData[], newData: PopulationData[]): PopulationData[] {
  // 年をキーとして、データをマージするためのMap
  const mergedDataMap = new Map<number, PopulationData>()

  // 既存のデータをMapに追加
  existsData.forEach((item) => mergedDataMap.set(item.year, item))

  // 新しいデータをマージ
  newData.forEach((item) => {
    if (mergedDataMap.has(item.year)) {
      // 既存のデータがある場合、新しいデータで更新
      mergedDataMap.set(item.year, { ...mergedDataMap.get(item.year)!, ...item })
    } else {
      // 新しい年のデータを追加
      mergedDataMap.set(item.year, item)
    }
  })

  // MapからArrayに変換し、年順にソート
  return Array.from(mergedDataMap.values()).sort((a, b) => a.year - b.year)
}

export default joinPopulationCompositionsData
