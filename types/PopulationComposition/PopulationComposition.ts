export interface DataPoint {
  year: number
  value: number
  rate?: number
}

export interface PopulationCategory {
  label: string
  data: DataPoint[]
}

export interface PrefectureDetailData {
  boundaryYear: number
  data: PopulationCategory[]
}

export interface PopulationCompositionResponse {
  message: string | null
  result: PrefectureDetailData
}
