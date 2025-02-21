import type { Prefecture } from '@/types/Prefecture/Prefecture'

const getTargetPrefectures = (targetPrefCode: number[], prefectureData: Prefecture[]): Prefecture[] => {
  return prefectureData.filter((prefecture) => targetPrefCode.includes(prefecture.prefCode))
}

export { getTargetPrefectures }
