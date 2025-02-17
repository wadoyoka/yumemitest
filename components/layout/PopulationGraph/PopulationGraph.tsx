'use client'

import type { PopulationGraphProps } from '@/types/Population/Population'
import { PopulationGraphView } from './PopulationGraphView'

export default function PopulationGraph({ data }: PopulationGraphProps) {
  return <PopulationGraphView data={data} />
}
