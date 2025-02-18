'use client'
import CheckBoxes from '@/components/layout/CheckBoxes/CheckBoxes'
import Header from '@/components/layout/Header/Header'
import PopulationGraph from '@/components/layout/PopulationGraph/PopulationGraph'
import RadioButtons from '@/components/layout/RadioButtons/RadioButtons'
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
  const [selectPopulatinCategory, setSelectPopulatinCategory] = useState<number>(0)

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

  const handlePopulatinCategoryChange = (index: number) => {
    setSelectPopulatinCategory(index)
  }

  useEffect(() => {
    const data = async () => {
      const prefectures: PrefectureResponse = await getPrefectures()
      setPrefectures(prefectures.result)
    }
    data()
  }, [])

  return (
    <>
      <Header color="#3F9FDB" height={60} mobileText="YUMEMI" text="YUMEMI_TEST" textColor="#FFFFFF" textSize={24} />
      <div className="mx-auto mt-6 px-4 md:px-8">
        <h1 className="mb-2 text-lg font-bold md:text-xl lg:text-2xl">都道府県</h1>
        <div className="mb-8">
          <CheckBoxes
            checkBoxSize={16}
            checkBoxStrokeWidth={2}
            checkIndexes={selectedPrefecturesIndexes}
            textSize={16}
            prefectures={prefectures}
            onCheckChange={handleCheckChange}
          />
        </div>

        {selectedPopulationCompositions.length > 0 && selectedPopulationCompositions[0].data && (
          <PopulationGraph data={selectedPopulationCompositions[selectPopulatinCategory].data} />
        )}
        <div className="flex">
          <div className="mx-auto mb-24">
            <RadioButtons
              radioButtonStrokeWidth={2}
              selectIndex={selectPopulatinCategory}
              size={24}
              textDatas={selectedPopulationCompositions.map((composition) => composition.label)}
              textSize={16}
              onSelectChange={handlePopulatinCategoryChange}
            />
          </div>
        </div>
      </div>
    </>
  )
}
