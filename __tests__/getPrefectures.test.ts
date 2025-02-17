import { afterEach, beforeEach, describe, expect, it, jest } from '@jest/globals'
import axios from 'axios'
import dotenv from 'dotenv'
import type { PrefectureResponse } from '../types/Prefecture/Prefecture'
import { getPrefectures } from '../utils/getPrefectures'

// Load environment variables from .env file
dotenv.config()

jest.mock('axios')

describe('getPrefectures', () => {
  beforeEach(() => {
    jest.resetAllMocks()
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should fetch prefectures from the API', async () => {
    const result = await getPrefectures()

    // Check if the result is of the correct type
    expect(result).toBeDefined()
    expect(result.message).toBeDefined()
    expect(Array.isArray(result.result)).toBe(true)

    // Check if we have at least one prefecture
    expect(result.result.length).toBeGreaterThan(0)

    // Check the structure of the first prefecture
    const firstPrefecture = result.result[0]
    expect(firstPrefecture).toHaveProperty('prefCode')
    expect(firstPrefecture).toHaveProperty('prefName')

    // Check types
    expect(typeof firstPrefecture.prefCode).toBe('number')
    expect(typeof firstPrefecture.prefName).toBe('string')

    // Optional: Log the result for manual inspection
    console.log(JSON.stringify(result, null, 2))
  }, 10000) // Increase timeout to 10 seconds for API call

  it('should fetch prefectures from the API(use mock)', async () => {
    const mockResponse: PrefectureResponse = {
      message: null,
      result: [
        { prefCode: 1, prefName: '北海道' },
        { prefCode: 2, prefName: '青森県' },
      ],
    }
    jest.spyOn(axios, 'get').mockResolvedValue({ data: mockResponse })

    const result = await getPrefectures()

    expect(result).toEqual(mockResponse)
    expect(result.result.length).toBeGreaterThan(0)
    expect(result.result[0]).toHaveProperty('prefCode')
    expect(result.result[0]).toHaveProperty('prefName')
    expect(typeof result.result[0].prefCode).toBe('number')
    expect(typeof result.result[0].prefName).toBe('string')
  })

  it('should throw an error for 400 Bad Request', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue({
      isAxiosError: true,
      response: { status: 400 },
    })

    await expect(getPrefectures()).rejects.toThrow(
      'Bad Request: 必要なパラメータが正しく設定されていません。パラメータの設定を確認してください。',
    )
  })

  it('should throw an error for 403 Forbidden', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue({
      isAxiosError: true,
      response: { status: 403 },
    })

    await expect(getPrefectures()).rejects.toThrow(
      'Forbidden: APIキーが無効または存在しません。APIキーの設定を確認してください。',
    )
  })

  it('should throw an error for 404 Not Found', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue({
      isAxiosError: true,
      response: { status: 404 },
    })

    await expect(getPrefectures()).rejects.toThrow(
      'Not Found: 指定されたURLに対応するAPIが存在しません。APIのアドレスを確認してください。',
    )
  })

  it('should throw an error for 500 Internal Server Error', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue({
      isAxiosError: true,
      response: { status: 500 },
    })

    await expect(getPrefectures()).rejects.toThrow(
      'Internal Server Error: APIサーバーに問題が発生しました。しばらく時間をおいて再度お試しください。',
    )
  })

  it('should throw a generic error for other HTTP errors', async () => {
    jest.spyOn(axios, 'get').mockRejectedValue({
      isAxiosError: true,
      response: { status: 418 },
    })

    await expect(getPrefectures()).rejects.toThrow('HTTP error! status: 418')
  })
})
