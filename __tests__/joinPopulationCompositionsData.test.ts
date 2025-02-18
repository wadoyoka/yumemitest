import type { PopulationCompositions } from '@/types/PopulationComposition/PopulationComposition'
import joinPopulationCompositionsData from '@/utils/joinPopulationCompositionsData'

describe('joinPopulationCompositionsData', () => {
  it('should merge two arrays with the same labels', () => {
    const existsArray: PopulationCompositions[] = [
      {
        label: '総人口',
        data: [
          { year: 2015, value: 100 },
          { year: 2020, value: 110 },
        ],
      },
    ]
    const newArray: PopulationCompositions[] = [
      {
        label: '総人口',
        data: [
          { year: 2020, value: 115 },
          { year: 2025, value: 120 },
        ],
      },
    ]
    const expected: PopulationCompositions[] = [
      {
        label: '総人口',
        data: [
          { year: 2015, value: 100 },
          { year: 2020, value: 115 },
          { year: 2025, value: 120 },
        ],
      },
    ]
    expect(joinPopulationCompositionsData(existsArray, newArray)).toEqual(expected)
  })

  it('should add new labels from newArray', () => {
    const existsArray: PopulationCompositions[] = [
      {
        label: '総人口',
        data: [{ year: 2015, value: 100 }],
      },
    ]
    const newArray: PopulationCompositions[] = [
      {
        label: '年少人口',
        data: [{ year: 2015, value: 20 }],
      },
    ]
    const expected: PopulationCompositions[] = [
      {
        label: '総人口',
        data: [{ year: 2015, value: 100 }],
      },
      {
        label: '年少人口',
        data: [{ year: 2015, value: 20 }],
      },
    ]
    expect(joinPopulationCompositionsData(existsArray, newArray)).toEqual(expected)
  })

  it('should handle empty arrays', () => {
    const existsArray: PopulationCompositions[] = []
    const newArray: PopulationCompositions[] = []
    expect(joinPopulationCompositionsData(existsArray, newArray)).toEqual([])
  })

  it('should merge data for multiple prefectures', () => {
    const existsArray: PopulationCompositions[] = [
      {
        label: '総人口',
        data: [
          { year: 2015, 東京都: 100, 大阪府: 80 },
          { year: 2020, 東京都: 110, 大阪府: 85 },
        ],
      },
    ]
    const newArray: PopulationCompositions[] = [
      {
        label: '総人口',
        data: [
          { year: 2020, 東京都: 115, 大阪府: 88 },
          { year: 2025, 東京都: 120, 大阪府: 90 },
        ],
      },
    ]
    const expected: PopulationCompositions[] = [
      {
        label: '総人口',
        data: [
          { year: 2015, 東京都: 100, 大阪府: 80 },
          { year: 2020, 東京都: 115, 大阪府: 88 },
          { year: 2025, 東京都: 120, 大阪府: 90 },
        ],
      },
    ]
    expect(joinPopulationCompositionsData(existsArray, newArray)).toEqual(expected)
  })

  it('should keep existing data when no new data is provided for a label', () => {
    const existsArray: PopulationCompositions[] = [
      {
        label: '総人口',
        data: [{ year: 2015, value: 100 }],
      },
      {
        label: '年少人口',
        data: [{ year: 2015, value: 20 }],
      },
    ]
    const newArray: PopulationCompositions[] = [
      {
        label: '総人口',
        data: [{ year: 2020, value: 110 }],
      },
    ]
    const expected: PopulationCompositions[] = [
      {
        label: '総人口',
        data: [
          { year: 2015, value: 100 },
          { year: 2020, value: 110 },
        ],
      },
      {
        label: '年少人口',
        data: [{ year: 2015, value: 20 }],
      },
    ]
    expect(joinPopulationCompositionsData(existsArray, newArray)).toEqual(expected)
  })
})
