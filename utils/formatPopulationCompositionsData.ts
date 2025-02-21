import type { PopulationData } from '@/types/Population/Population'
import type { BufferPopulationCompositionsData } from '@/types/PopulationComposition/PopulationComposition'

interface PopulationCompositions {
  label: string
  data: PopulationData[]
}

function formatPopulationCompositionsData(data: BufferPopulationCompositionsData[]): PopulationCompositions[] {
  const categorizedData: Record<string, Record<number, PopulationData>> = {}

  // Step 1: データの整理
  data.forEach(({ prefName, data: prefData }) => {
    prefData.data.forEach((category) => {
      const { label } = category

      if (!categorizedData[label]) {
        categorizedData[label] = {}
      }

      category.data.forEach(({ year, value }) => {
        if (!categorizedData[label][year]) {
          categorizedData[label][year] = { year }
        }
        categorizedData[label][year][prefName] = value
      })
    })
  })

  // Step 2: 結果のフォーマット
  return Object.entries(categorizedData).map(([label, yearData]) => ({
    label,
    data: Object.values(yearData).sort((a, b) => a.year - b.year),
  }))
}

export { formatPopulationCompositionsData }
