import type { PopulationCompositions, PrefectureDetailData } from '@/types/PopulationComposition/PopulationComposition'
import type { Prefecture } from '@/types/Prefecture/Prefecture'
import { formatPopulationCompositionsData } from '@/utils/formatPopulationCompositionsData'
import getPopulationComposition from '@/utils/getPopulationComposition'
import { getPopulationCompositions } from '@/utils/getPopulationCompositions'

// モックの設定
jest.mock('@/utils/getPopulationComposition')
jest.mock('@/utils/formatPopulationCompositionsData')

describe('getPopulationCompositions', () => {
  // テストの前にモックをリセット
  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should fetch and format population data for multiple prefectures', async () => {
    // モックデータの準備
    const mockPrefectures: Prefecture[] = [
      { prefCode: 13, prefName: '東京都' },
      { prefCode: 27, prefName: '大阪府' },
    ]

    const mockPrefectureDetailData: PrefectureDetailData = {
      boundaryYear: 2020,
      data: [
        {
          label: '総人口',
          data: [
            { year: 2015, value: 1000000 },
            { year: 2020, value: 1100000 },
          ],
        },
      ],
    }

    const mockFormattedData: PopulationCompositions[] = [
      {
        label: '総人口',
        data: [
          { year: 2015, 東京都: 1000000, 大阪府: 800000 },
          { year: 2020, 東京都: 1100000, 大阪府: 850000 },
        ],
      },
    ]

    // モック関数の設定
    ;(getPopulationComposition as jest.Mock).mockResolvedValue(mockPrefectureDetailData)
    ;(formatPopulationCompositionsData as jest.Mock).mockReturnValue(mockFormattedData)

    // 関数の実行
    const result = await getPopulationCompositions(mockPrefectures)

    // 期待される結果の検証
    expect(result).toEqual(mockFormattedData)

    // getPopulationComposition が正しく呼び出されたかの検証
    expect(getPopulationComposition).toHaveBeenCalledTimes(2)
    expect(getPopulationComposition).toHaveBeenCalledWith('13')
    expect(getPopulationComposition).toHaveBeenCalledWith('27')

    // formatPopulationCompositionsData が正しく呼び出されたかの検証
    expect(formatPopulationCompositionsData).toHaveBeenCalledTimes(1)
    expect(formatPopulationCompositionsData).toHaveBeenCalledWith([
      { prefName: '東京都', data: mockPrefectureDetailData },
      { prefName: '大阪府', data: mockPrefectureDetailData },
    ])
  })

  it('should handle empty prefecture list', async () => {
    const emptyPrefectures: Prefecture[] = []
    const emptyFormattedData: PopulationCompositions[] = []

    ;(formatPopulationCompositionsData as jest.Mock).mockReturnValue(emptyFormattedData)

    const result = await getPopulationCompositions(emptyPrefectures)

    expect(result).toEqual(emptyFormattedData)
    expect(getPopulationComposition).not.toHaveBeenCalled()
    expect(formatPopulationCompositionsData).toHaveBeenCalledWith([])
  })

  it('should handle errors from getPopulationComposition', async () => {
    const mockPrefectures: Prefecture[] = [{ prefCode: 13, prefName: '東京都' }]

    ;(getPopulationComposition as jest.Mock).mockRejectedValue(new Error('API Error'))

    await expect(getPopulationCompositions(mockPrefectures)).rejects.toThrow('API Error')
    expect(formatPopulationCompositionsData).not.toHaveBeenCalled()
  })
})
