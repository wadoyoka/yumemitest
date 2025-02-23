'use client'

import type { PopulationGraphProps } from '@/types/Population/Population'
import dynamic from 'next/dynamic'

const PopulationGraphHighChartsView = dynamic(
  () => import('./PopulationGraphHighChartsView').then((mod) => mod.PopulationGraphHighChartsView),
  { ssr: false },
)

export default function PopulationGraphHighCharts({ data }: PopulationGraphProps) {
  return <PopulationGraphHighChartsView data={data} />
}
