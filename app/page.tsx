import TopClient from '@/app/TopClient'
import Header from '@/components/layout/Header/Header'
import type { PopulationCompositions } from '@/types/PopulationComposition/PopulationComposition'
import type { PrefectureResponse } from '@/types/Prefecture/Prefecture'
import { getPopulationCompositions } from '@/utils/getPopulationCompositions'
import { getPrefectures } from '@/utils/getPrefectures'

export const revalidate = 86400

export default async function Home() {
  const prefectures: PrefectureResponse = await getPrefectures()
  const populationCompositions: PopulationCompositions[] = await getPopulationCompositions(prefectures.result)

  return (
    <div className="bg-white">
      <Header color="#3F9FDB" height={60} mobileText="YUMEMI" text="YUMEMI_TEST" textColor="#FFFFFF" textSize={24} />
      <div className="mx-auto mt-6 px-4 md:px-8">
        <TopClient prefectures={prefectures.result} populationCompositions={populationCompositions} />
      </div>
    </div>
  )
}
