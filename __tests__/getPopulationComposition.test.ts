import type { PopulationCompositionResponse } from '@/types/PopulationComposition/PopulationComposition'
import getPopulationComposition from '@/utils/getPopulationComposition'
import { afterEach, beforeEach, describe, expect, it, jest } from '@jest/globals'
import axios from 'axios'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

jest.mock('axios')

describe('getPopulationComposition', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch population composition from the API', async () => {
    const result = await getPopulationComposition('1')

    // Check if the result is of the correct type
    expect(result).toBeDefined()
    expect(result.boundaryYear).toBeDefined()
    expect(Array.isArray(result.data)).toBe(true)

    // Check if we have at least one population category
    expect(result.data.length).toBeGreaterThan(0)

    // Check the structure of the first population category
    const firstCategory = result.data[0]
    expect(firstCategory).toHaveProperty('label')
    expect(firstCategory).toHaveProperty('data')
    expect(Array.isArray(firstCategory.data)).toBe(true)

    // Check the structure of the first data point
    const firstDataPoint = firstCategory.data[0]
    expect(firstDataPoint).toHaveProperty('year')
    expect(firstDataPoint).toHaveProperty('value')

    // Check types
    expect(typeof result.boundaryYear).toBe('number')
    expect(typeof firstCategory.label).toBe('string')
    expect(typeof firstDataPoint.year).toBe('number')
    expect(typeof firstDataPoint.value).toBe('number')

    // Optional: Log the result for manual inspection
    console.log(JSON.stringify(result, null, 2))
  }, 10000) // Increase timeout to 10 seconds for API call

  it('should fetch population composition from the API (use mock)', async () => {
    const mockResponse: PopulationCompositionResponse = {
      message: null,
      result: {
        boundaryYear: 2020,
        data: [
          {
            label: '総人口',
            data: [
              { year: 2015, value: 5381733 },
              { year: 2020, value: 5224614 },
            ],
          },
        ],
      },
    }
    jest.spyOn(axios, 'get').mockResolvedValue({ data: mockResponse })

    const result = await getPopulationComposition('1')

    expect(result).toEqual(mockResponse.result)
    expect(result.data.length).toBeGreaterThan(0)
    expect(result.data[0]).toHaveProperty('label')
    expect(result.data[0]).toHaveProperty('data')
    expect(typeof result.boundaryYear).toBe('number')
    expect(typeof result.data[0].label).toBe('string')
    expect(typeof result.data[0].data[0].year).toBe('number')
    expect(typeof result.data[0].data[0].value).toBe('number')
  })

  it('should throw an error for 400 Bad Request', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue({
      isAxiosError: true,
      response: { status: 400 },
    })

    await expect(getPopulationComposition('1')).rejects.toThrow(
      'Bad Request: 必要なパラメータが正しく設定されていません。パラメータの設定を確認してください。',
    )
  })

  it('should throw an error for 403 Forbidden', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue({
      isAxiosError: true,
      response: { status: 403 },
    })

    await expect(getPopulationComposition('1')).rejects.toThrow(
      'Forbidden: APIキーが存在しないか無効です。APIキーの設定を確認してください。',
    )
  })

  it('should throw an error for 404 Not Found', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue({
      isAxiosError: true,
      response: { status: 404 },
    })

    await expect(getPopulationComposition('1')).rejects.toThrow(
      'Not Found: 指定されたURLに対応するAPIが存在しません。APIのアドレスを確認してください。',
    )
  })

  it('should throw an error for 500 Internal Server Error', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue({
      isAxiosError: true,
      response: { status: 500 },
    })

    await expect(getPopulationComposition('1')).rejects.toThrow(
      'Internal Server Error: APIサーバーに問題が発生しました。しばらく時間をおいて再度お試しください。',
    )
  })

  it('should throw a generic error for other Axios errors', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue({
      isAxiosError: true,
      message: 'Network Error',
    })

    await expect(getPopulationComposition('1')).rejects.toThrow('API request failed: Network Error')
  })
})
