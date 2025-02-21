import TopClient from '@/app/TopClient'
import Header from '@/components/layout/Header/Header'
import type { PrefectureResponse } from '@/types/Prefecture/Prefecture'
import { getPrefectures } from '@/utils/getPrefectures'

export default async function Home() {
  const prefectures: PrefectureResponse = await getPrefectures()

  return (
    <div className="bg-white">
      <Header color="#3F9FDB" height={60} mobileText="YUMEMI" text="YUMEMI_TEST" textColor="#FFFFFF" textSize={24} />
      <div className="mx-auto mt-6 px-4 md:px-8">
        <TopClient prefectures={prefectures.result} />
      </div>
    </div>
  )
}
