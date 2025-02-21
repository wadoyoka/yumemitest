'use client'

import type { PopulationGraphProps } from '@/types/Population/Population'
import { PopulationGraphHighChartsView } from './PopulationGraphHighChartsView'

export default function PopulationGraphHighCharts({ data }: PopulationGraphProps) {
  return <PopulationGraphHighChartsView data={data} />
}
