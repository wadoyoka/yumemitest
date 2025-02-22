'use client'

import type { PopulationData } from '@/types/Population/Population'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useMemo } from 'react'

interface PopulationGraphHighChartsViewProps {
  data: PopulationData[]
}

export function PopulationGraphHighChartsView({ data }: PopulationGraphHighChartsViewProps) {
  // 色を生成する関数
  const colors = useMemo(
    () => [
      '#2196F3', // 青
      '#673AB7', // 紫
      '#4CAF50', // 緑
      '#FF5722', // オレンジ
      '#9E9E9E', // グレー
    ],
    [],
  )

  // 都道府県名を取得（yearを除く）
  const prefectures = Object.keys(data[0]).filter((key) => key !== 'year')

  const options: Highcharts.Options = useMemo(() => {
    // marker設定を修正
    const series: Highcharts.SeriesOptionsType[] = prefectures.map((prefecture, index) => ({
      type: 'line',
      name: prefecture,
      data: data.map((item) => [item.year, item[prefecture]]),
      color: colors[index % colors.length],
      marker: {
        symbol: 'circle',
        radius: 4,
        fillColor: '#FFFFFF',
        lineWidth: 2,
        lineColor: undefined,
      },
      states: {
        hover: {
          lineWidth: 3,
        },
      },
    }))

    return {
      chart: {
        type: 'line',
        style: {
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        },
        height: 500,
        spacing: [20, 20, 20, 20],
      },
      title: {
        text: '総人口推移グラフ',
        align: 'left',
        style: {
          fontSize: '18px',
          fontWeight: 'bold',
        },
      },
      subtitle: {
        text: 'データ出典：RESAS（地域経済分析システム）のデータを加工して作成',
        align: 'left',
        style: {
          color: '#666',
          fontSize: '12px',
        },
      },
      xAxis: {
        type: 'linear',
        title: {
          text: '年度',
          style: {
            color: '#666',
            fontSize: '14px',
          },
        },
        gridLineWidth: 1,
        gridLineDashStyle: 'Dot',
        gridLineColor: '#E5E7EB',
        lineColor: '#E5E7EB',
        tickColor: '#E5E7EB',
        labels: {
          style: {
            color: '#666',
            fontSize: '12px',
          },
        },
      },
      yAxis: {
        type: 'linear',
        title: {
          text: '人口数',
          style: {
            color: '#666',
            fontSize: '14px',
          },
        },
        gridLineWidth: 1,
        gridLineDashStyle: 'Dot',
        gridLineColor: '#E5E7EB',
        labels: {
          style: {
            color: '#666',
            fontSize: '12px',
          },
          formatter() {
            // 数値型にキャストして使用
            return Highcharts.numberFormat(Number(this.value), 0, '', ',')
          },
        },
      },
      tooltip: {
        shared: false,
        backgroundColor: '#FFFFFF',
        borderColor: '#E5E7EB',
        borderRadius: 8,
        padding: 12,
        shadow: {
          color: 'rgba(0,0,0,0.05)',
          offsetX: 0,
          offsetY: 4,
          width: 8,
        },
        formatter() {
          return `<span style="font-size: 12px">${this.x}年</span><br/>
            <span style="color: ${this.color}">●</span> ${this.series.name}: 
            <b>${Highcharts.numberFormat(Number(this.y), 0, '', ',')}</b>人`
        },
      },
      legend: {
        align: 'center',
        verticalAlign: 'bottom',
        layout: 'horizontal',
        itemStyle: {
          color: '#666',
          fontWeight: 'normal',
          fontSize: '12px',
        },
        symbolRadius: 4,
        itemDistance: 20,
        margin: 20,
      },
      credits: {
        enabled: false,
      },
      plotOptions: {
        series: {
          animation: {
            duration: 1000,
          },
          lineWidth: 2,
          states: {
            hover: {
              enabled: true,
              lineWidth: 3,
            },
          },
        },
      },
      series,
    }
  }, [data, prefectures, colors])

  return (
    <div className="w-full rounded-lg bg-white py-4">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}
