'use client'
import CheckBoxes from '@/components/layout/CheckBoxes/CheckBoxes'
import Header from '@/components/layout/Header/Header'
import PopulationGraph from '@/components/layout/PopulationGraph/PopulationGraph'
import type { PopulationCompositions } from '@/types/PopulationComposition/PopulationComposition'
import type { Prefecture, PrefectureResponse } from '@/types/Prefecture/Prefecture'
import { exclusionTargetPrefecture } from '@/utils/exclusionTargetPrefecture'
import { getPopulationCompositions } from '@/utils/getPopulationCompositions'
import { getPrefectures } from '@/utils/getPrefectures'
import { getTargetPrefectures } from '@/utils/getTargetPrefectures'
import isExistsArray from '@/utils/isExistsArray'
import joinPopulationCompositionsData from '@/utils/joinPopulationCompositionsData'
import { useEffect, useState } from 'react'

export default function Home() {
  const [selectedPrefecturesIndexes, setSelectedPrefecturesIndexes] = useState<number[]>([])
  const [prefectures, setPrefectures] = useState<Prefecture[]>([])
  const [selectedPopulationCompositions, setSelectedPopulationCompositions] = useState<PopulationCompositions[]>([])

  const handleCheckChange = async (prefCode: number, indexes: number[]) => {
    const targetNumbers: number[] = [prefCode]
    const targetPrefecture = getTargetPrefectures(targetNumbers, prefectures)
    if (!isExistsArray(prefCode, selectedPrefecturesIndexes)) {
      const targetPopulationCompositions = await getPopulationCompositions(targetPrefecture)
      const newPopulationCompositions = joinPopulationCompositionsData(
        selectedPopulationCompositions,
        targetPopulationCompositions,
      )
      setSelectedPopulationCompositions(newPopulationCompositions)
    } else {
      setSelectedPopulationCompositions(
        exclusionTargetPrefecture(targetPrefecture[0].prefName, selectedPopulationCompositions),
      )
    }
    setSelectedPrefecturesIndexes(indexes)
    console.log('Selected prefectures:', indexes)
  }

  useEffect(() => {
    const data = async () => {
      const prefectures: PrefectureResponse = await getPrefectures()
      setPrefectures(prefectures.result)
    }
    data()
  }, [])

  return (
    <div>
      <Header color="#3F9FDB" height={60} mobileText="YUMEMI" text="YUMEMI_TEST" textColor="#FFFFFF" textSize={24} />
      <h1>都道府県</h1>
      <CheckBoxes
        checkBoxSize={24}
        checkBoxStrokeWidth={2}
        checkIndexes={selectedPrefecturesIndexes}
        textSize={16}
        prefectures={prefectures}
        onCheckChange={handleCheckChange}
      />
      {selectedPopulationCompositions.length > 0 && selectedPopulationCompositions[0].data && (
        <PopulationGraph data={selectedPopulationCompositions[0].data} />
      )}
    </div>
  )
}
