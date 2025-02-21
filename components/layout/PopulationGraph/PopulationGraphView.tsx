'use client'

import type { PopulationData } from '@/types/Population/Population'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

interface PopulationGraphViewProps {
  data: PopulationData[]
}

export function PopulationGraphView({ data }: PopulationGraphViewProps) {
  // 色を生成する関数
  const generateColor = (str: string) => {
    let hash = 0
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash)
    }
    const color = Math.abs(hash).toString(16).substring(0, 6)
    return `#${'0'.repeat(6 - color.length)}${color}`
  }

  // 都道府県名を取得（yearを除く）
  const prefectures = Object.keys(data[0]).filter((key) => key !== 'year')

  // 各都道府県の色を動的に生成
  const colors = prefectures.reduce(
    (acc, prefecture) => {
      acc[prefecture] = generateColor(prefecture)
      return acc
    },
    {} as Record<string, string>,
  )

  // データの年の範囲を取得
  const years = data.map((item) => item.year)
  const minYear = Math.min(...years)
  const maxYear = Math.max(...years)

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            bottom: 20,
            left: 40,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
          <XAxis
            dataKey="year"
            type="number"
            domain={[minYear, maxYear]}
            tickCount={7}
            stroke="#6B7280"
            fontSize={12}
          />
          <YAxis domain={[0, 'auto']} tickCount={8} width={40} stroke="#6B7280" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #E5E7EB',
              borderRadius: '6px',
              padding: '8px',
            }}
          />
          <Legend verticalAlign="bottom" height={36} iconType="circle" />
          {prefectures.map((prefecture) => (
            <Line
              key={prefecture}
              type="monotone"
              dataKey={prefecture}
              stroke={colors[prefecture]}
              strokeWidth={2}
              dot={{ r: 4, fill: '#FFFFFF', strokeWidth: 2 }}
              activeDot={{ r: 6 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
