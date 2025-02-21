import type { Prefecture } from '@/types/Prefecture/Prefecture'
import { getTargetPrefectures } from '@/utils/getTargetPrefectures'

describe('getTargetPrefectures', () => {
  const samplePrefectures: Prefecture[] = [
    { prefCode: 1, prefName: '北海道' },
    { prefCode: 2, prefName: '青森県' },
    { prefCode: 3, prefName: '岩手県' },
    { prefCode: 4, prefName: '宮城県' },
  ]

  it('should return prefectures with matching prefCodes', () => {
    const targetPrefCodes = [1, 3]
    const result = getTargetPrefectures(targetPrefCodes, samplePrefectures)
    expect(result).toEqual([
      { prefCode: 1, prefName: '北海道' },
      { prefCode: 3, prefName: '岩手県' },
    ])
  })

  it('should return an empty array if no prefCodes match', () => {
    const targetPrefCodes = [5, 6]
    const result = getTargetPrefectures(targetPrefCodes, samplePrefectures)
    expect(result).toEqual([])
  })

  it('should handle an empty targetPrefCode array', () => {
    const targetPrefCodes: number[] = []
    const result = getTargetPrefectures(targetPrefCodes, samplePrefectures)
    expect(result).toEqual([])
  })

  it('should handle an empty prefectureData array', () => {
    const targetPrefCodes = [1, 2]
    const result = getTargetPrefectures(targetPrefCodes, [])
    expect(result).toEqual([])
  })
})
