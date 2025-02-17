export interface PopulationData {
  year: number
  [prefecture: string]: number
}

export interface PopulationGraphProps {
  data: PopulationData[]
}
