import type { PopulationCompositions } from '@/types/PopulationComposition/PopulationComposition'
import { getTargetPopulationCompositions } from '@/utils/getTargetPopulationCompositions'

describe('getTargetPopulationCompositions', () => {
  // テストデータの準備
  const mockPopulationData: PopulationCompositions[] = [
    {
      label: '総人口',
      data: [
        { year: 2020, 東京都: 14000000, 大阪府: 8800000, 京都府: 2600000 },
        { year: 2021, 東京都: 14050000, 大阪府: 8850000, 京都府: 2610000 },
      ],
    },
    {
      label: '年少人口',
      data: [
        { year: 2020, 東京都: 1400000, 大阪府: 880000, 京都府: 260000 },
        { year: 2021, 東京都: 1405000, 大阪府: 885000, 京都府: 261000 },
      ],
    },
  ]

  // 各テストケース前に実行される
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('指定した都道府県のデータのみを抽出すること', () => {
    const targetPrefNames = ['東京都', '大阪府']
    const result = getTargetPopulationCompositions(mockPopulationData, targetPrefNames)

    // 期待される結果
    const expected = [
      {
        label: '総人口',
        data: [
          { year: 2020, 東京都: 14000000, 大阪府: 8800000 },
          { year: 2021, 東京都: 14050000, 大阪府: 8850000 },
        ],
      },
      {
        label: '年少人口',
        data: [
          { year: 2020, 東京都: 1400000, 大阪府: 880000 },
          { year: 2021, 東京都: 1405000, 大阪府: 885000 },
        ],
      },
    ]

    expect(result).toEqual(expected)
    expect(result).toHaveLength(2)
    expect(result[0].data[0]).toHaveProperty('東京都')
    expect(result[0].data[0]).toHaveProperty('大阪府')
    expect(result[0].data[0]).not.toHaveProperty('京都府')
  })

  test('存在しない都道府県名が指定された場合、その都道府県のデータは含まれないこと', () => {
    const targetPrefNames = ['東京都', '存在しない県']
    const result = getTargetPopulationCompositions(mockPopulationData, targetPrefNames)

    // 期待される結果
    const expected = [
      {
        label: '総人口',
        data: [
          { year: 2020, 東京都: 14000000 },
          { year: 2021, 東京都: 14050000 },
        ],
      },
      {
        label: '年少人口',
        data: [
          { year: 2020, 東京都: 1400000 },
          { year: 2021, 東京都: 1405000 },
        ],
      },
    ]

    expect(result).toEqual(expected)
    expect(result[0].data[0]).toHaveProperty('東京都')
    expect(result[0].data[0]).not.toHaveProperty('存在しない県')
  })

  test('空の都道府県配列が指定された場合、年データのみを含む結果を返すこと', () => {
    const targetPrefNames: string[] = []
    const result = getTargetPopulationCompositions(mockPopulationData, targetPrefNames)

    // 期待される結果
    const expected = [
      {
        label: '総人口',
        data: [{ year: 2020 }, { year: 2021 }],
      },
      {
        label: '年少人口',
        data: [{ year: 2020 }, { year: 2021 }],
      },
    ]

    expect(result).toEqual(expected)
    expect(result[0].data[0]).toEqual({ year: 2020 })
    expect(Object.keys(result[0].data[0])).toHaveLength(1)
  })

  test('空の人口構成データが与えられた場合、空配列を返すこと', () => {
    const emptyPopulationData: PopulationCompositions[] = []
    const targetPrefNames = ['東京都', '大阪府']
    const result = getTargetPopulationCompositions(emptyPopulationData, targetPrefNames)

    expect(result).toEqual([])
    expect(result).toHaveLength(0)
  })

  test('データの構造が維持されていること', () => {
    const targetPrefNames = ['東京都']
    const result = getTargetPopulationCompositions(mockPopulationData, targetPrefNames)

    // 構造のチェック
    expect(result).toBeInstanceOf(Array)
    expect(result[0]).toHaveProperty('label')
    expect(result[0]).toHaveProperty('data')
    expect(result[0].data).toBeInstanceOf(Array)
    expect(result[0].data[0]).toHaveProperty('year')
  })
})
