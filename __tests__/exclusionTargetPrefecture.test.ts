import type { PopulationCompositions } from '@/types/PopulationComposition/PopulationComposition'
import { exclusionTargetPrefecture } from '@/utils/exclusionTargetPrefecture'

describe('exclusionTargetPrefecture', () => {
  const samplePopulationData: PopulationCompositions[] = [
    {
      label: '総人口',
      data: [
        { year: 2015, 北海道: 5381733, 青森県: 1308265, 岩手県: 1279594 },
        { year: 2020, 北海道: 5224614, 青森県: 1237984, 岩手県: 1210534 },
      ],
    },
    {
      label: '年少人口',
      data: [
        { year: 2015, 北海道: 612566, 青森県: 149459, 岩手県: 149803 },
        { year: 2020, 北海道: 573641, 青森県: 136375, 岩手県: 137408 },
      ],
    },
  ]

  it('should exclude the target prefecture from all data points', () => {
    const result = exclusionTargetPrefecture('北海道', samplePopulationData)
    expect(result).toEqual([
      {
        label: '総人口',
        data: [
          { year: 2015, 青森県: 1308265, 岩手県: 1279594 },
          { year: 2020, 青森県: 1237984, 岩手県: 1210534 },
        ],
      },
      {
        label: '年少人口',
        data: [
          { year: 2015, 青森県: 149459, 岩手県: 149803 },
          { year: 2020, 青森県: 136375, 岩手県: 137408 },
        ],
      },
    ])
  })

  it('should return the same data if the target prefecture is not present', () => {
    const result = exclusionTargetPrefecture('東京都', samplePopulationData)
    expect(result).toEqual(samplePopulationData)
  })

  it('should handle empty data array', () => {
    const result = exclusionTargetPrefecture('北海道', [])
    expect(result).toEqual([])
  })

  it('should preserve the year property in all data points', () => {
    const result = exclusionTargetPrefecture('北海道', samplePopulationData)
    result.forEach((composition) => {
      composition.data.forEach((dataPoint) => {
        expect(dataPoint).toHaveProperty('year')
      })
    })
  })
})
