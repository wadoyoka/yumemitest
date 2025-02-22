'use client'
import CheckBoxes from '@/components/layout/CheckBoxes/CheckBoxes'
import PopulationGraphHighCharts from '@/components/layout/PopulationGraphHighCharts/PopulationGraphHighCharts'
import PrefectureSelectModal from '@/components/layout/PrefectureSelectModal/PrefectureSelectModal'
import PrefecturesMobile from '@/components/layout/PrefecturesMobile/PrefecturesMobile'
import RadioButtons from '@/components/layout/RadioButtons/RadioButtons'
import SelectDisplayItemList from '@/components/layout/SelectDisplayItemList/SelectDisplayItemList'
import type { PopulationCompositions } from '@/types/PopulationComposition/PopulationComposition'
import type { Prefecture } from '@/types/Prefecture/Prefecture'
import { exclusionTargetPrefecture } from '@/utils/exclusionTargetPrefecture'
import { getPopulationCompositions } from '@/utils/getPopulationCompositions'
import { getTargetPrefectures } from '@/utils/getTargetPrefectures'
import isExistsArray from '@/utils/isExistsArray'
import joinPopulationCompositionsData from '@/utils/joinPopulationCompositionsData'
import { useState } from 'react'

interface TopClientProps {
  prefectures: Prefecture[]
}

export default function TopClient({ prefectures }: TopClientProps) {
  const [selectedPrefecturesIndexes, setSelectedPrefecturesIndexes] = useState<number[]>([])
  const [selectedPrefectures, setSelectedPrefectures] = useState<string[]>([])
  const [selectedPopulationCompositions, setSelectedPopulationCompositions] = useState<PopulationCompositions[]>([])
  const [selectPopulatinCategory, setSelectPopulatinCategory] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCheckChange = async (prefCode: number, indexes: number[]) => {
    const targetNumbers: number[] = [prefCode]
    const targetPrefecture = getTargetPrefectures(targetNumbers, prefectures)
    setSelectedPrefecturesIndexes(indexes)
    if (!isExistsArray(prefCode, selectedPrefecturesIndexes)) {
      const targetPopulationCompositions = await getPopulationCompositions(targetPrefecture)
      const newPopulationCompositions = joinPopulationCompositionsData(
        selectedPopulationCompositions,
        targetPopulationCompositions,
      )
      setSelectedPrefectures((prev) => [...prev, targetPrefecture[0].prefName])
      setSelectedPopulationCompositions(newPopulationCompositions)
    } else {
      setSelectedPopulationCompositions(
        exclusionTargetPrefecture(targetPrefecture[0].prefName, selectedPopulationCompositions),
      )
      setSelectedPrefectures((prev) => prev.filter((p) => p !== targetPrefecture[0].prefName))
    }
  }

  const handlePopulatinCategoryChange = (index: number) => {
    setSelectPopulatinCategory(index)
  }

  // 都道府県追加のモーダル表示
  const handlePlusClick = () => {
    setIsModalOpen(true)
  }

  // モーダルを閉じる
  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  // モーダルでの決定
  const handleModalConfirm = () => {
    setIsModalOpen(false)
  }

  // 都道府県の削除
  const handleDeleteClick = (targetPrefectureName: string) => {
    const targetPrefecture = prefectures.filter((prefecture) => targetPrefectureName.includes(prefecture.prefName))
    const newIndexes = selectedPrefecturesIndexes.includes(targetPrefecture[0].prefCode)
      ? selectedPrefecturesIndexes.filter((index) => index !== targetPrefecture[0].prefCode)
      : [...selectedPrefecturesIndexes, targetPrefecture[0].prefCode]
    setSelectedPrefecturesIndexes(newIndexes)
    setSelectedPopulationCompositions(exclusionTargetPrefecture(targetPrefectureName, selectedPopulationCompositions))
    setSelectedPrefectures((prev) => prev.filter((p) => p !== targetPrefectureName))
  }

  return (
    <>
      <h1 className="mb-2 text-lg font-bold md:text-xl lg:text-2xl">都道府県</h1>
      <div className="mb-8 hidden md:block">
        <CheckBoxes
          checkBoxSize={16}
          checkBoxStrokeWidth={2}
          checkIndexes={selectedPrefecturesIndexes}
          textSize={16}
          prefectures={prefectures}
          onCheckChange={handleCheckChange}
        />
      </div>
      <div className="mb-8 block w-full md:hidden">
        <PrefecturesMobile
          plusSize={24}
          plusStrokeWidth="2"
          plusColor="#6B7280"
          plusHoverColor="#374151"
          deleteButtonSize={24}
          deleteButtonStrokeWidth="2"
          deleteButtonColor="#6B7280"
          deleteButtonHoverColor="#374151"
          prefectures={selectedPrefectures}
          textSize={16}
          textColor="#1F2937"
          hoverTextColor="#111827"
          baseColor="#E5E7EB"
          hoverColor="#F3F4F6"
          borderColor="#D1D5DB"
          onPlusClick={handlePlusClick}
          onDeleteClick={handleDeleteClick}
        />
      </div>
      <div className="block md:hidden">
        <PrefectureSelectModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onConfirm={handleModalConfirm}
          onCheckChange={handleCheckChange}
          prefectures={prefectures}
          currentSelected={selectedPrefecturesIndexes}
        />
      </div>

      <div className="block md:hidden">
        <h1 className="mb-2 text-lg font-bold md:text-xl lg:text-2xl">表示項目</h1>
        <SelectDisplayItemList
          baseColor="#FFFFFF"
          borderColor="#000000"
          borderWidth={1}
          items={['総人口', '年少人口', '生産年齢人口', '老年人口']}
          onSelect={handlePopulatinCategoryChange}
          selectedIndex={selectPopulatinCategory}
          textColor="#1F2937"
          textSize={16}
        />
      </div>

      {selectedPopulationCompositions.length > 0 && selectedPopulationCompositions[0].data && (
        <PopulationGraphHighCharts data={selectedPopulationCompositions[selectPopulatinCategory].data} />
      )}
      <div className="flex">
        <div className="mx-auto mb-24">
          <RadioButtons
            radioButtonStrokeWidth={2}
            selectIndex={selectPopulatinCategory}
            size={24}
            textDatas={['総人口', '年少人口', '生産年齢人口', '老年人口']}
            textSize={16}
            onSelectChange={handlePopulatinCategoryChange}
          />
        </div>
      </div>
    </>
  )
}
