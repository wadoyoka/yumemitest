import type {
  BufferPopulationCompositionsData,
  PopulationCompositions,
} from '@/types/PopulationComposition/PopulationComposition'
import { formatPopulationCompositionsData } from '@/utils/formatPopulationCompositionsData'

describe('formatPopulationCompositionsData', () => {
  it('should correctly format data for a single prefecture and category', () => {
    const input: BufferPopulationCompositionsData[] = [
      {
        prefName: '東京都',
        data: {
          boundaryYear: 2020,
          data: [
            {
              label: '総人口',
              data: [
                { year: 2015, value: 13515271 },
                { year: 2020, value: 14047594 },
              ],
            },
          ],
        },
      },
    ]

    const expected: PopulationCompositions[] = [
      {
        label: '総人口',
        data: [
          { year: 2015, 東京都: 13515271 },
          { year: 2020, 東京都: 14047594 },
        ],
      },
    ]

    expect(formatPopulationCompositionsData(input)).toEqual(expected)
  })

  it('should correctly format data for multiple prefectures and categories', () => {
    const input: BufferPopulationCompositionsData[] = [
      {
        prefName: '東京都',
        data: {
          boundaryYear: 2020,
          data: [
            {
              label: '総人口',
              data: [
                { year: 2015, value: 13515271 },
                { year: 2020, value: 14047594 },
              ],
            },
            {
              label: '年少人口',
              data: [
                { year: 2015, value: 1518130 },
                { year: 2020, value: 1477751 },
              ],
            },
          ],
        },
      },
      {
        prefName: '大阪府',
        data: {
          boundaryYear: 2020,
          data: [
            {
              label: '総人口',
              data: [
                { year: 2015, value: 8839469 },
                { year: 2020, value: 8837685 },
              ],
            },
            {
              label: '年少人口',
              data: [
                { year: 2015, value: 1170615 },
                { year: 2020, value: 1111000 },
              ],
            },
          ],
        },
      },
    ]

    const expected: PopulationCompositions[] = [
      {
        label: '総人口',
        data: [
          { year: 2015, 東京都: 13515271, 大阪府: 8839469 },
          { year: 2020, 東京都: 14047594, 大阪府: 8837685 },
        ],
      },
      {
        label: '年少人口',
        data: [
          { year: 2015, 東京都: 1518130, 大阪府: 1170615 },
          { year: 2020, 東京都: 1477751, 大阪府: 1111000 },
        ],
      },
    ]

    expect(formatPopulationCompositionsData(input)).toEqual(expected)
  })

  it('should handle empty input', () => {
    const input: BufferPopulationCompositionsData[] = []
    const expected: PopulationCompositions[] = []

    expect(formatPopulationCompositionsData(input)).toEqual(expected)
  })

  it('should handle input with no data', () => {
    const input: BufferPopulationCompositionsData[] = [
      {
        prefName: '東京都',
        data: {
          boundaryYear: 2020,
          data: [],
        },
      },
    ]
    const expected: PopulationCompositions[] = []

    expect(formatPopulationCompositionsData(input)).toEqual(expected)
  })

  it('should sort data by year', () => {
    const input: BufferPopulationCompositionsData[] = [
      {
        prefName: '東京都',
        data: {
          boundaryYear: 2020,
          data: [
            {
              label: '総人口',
              data: [
                { year: 2020, value: 14047594 },
                { year: 2015, value: 13515271 },
              ],
            },
          ],
        },
      },
    ]

    const expected: PopulationCompositions[] = [
      {
        label: '総人口',
        data: [
          { year: 2015, 東京都: 13515271 },
          { year: 2020, 東京都: 14047594 },
        ],
      },
    ]

    expect(formatPopulationCompositionsData(input)).toEqual(expected)
  })
})
