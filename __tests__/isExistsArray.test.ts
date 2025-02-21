import isExistsArray from '@/utils/isExistsArray'

describe('isExistsArray', () => {
  it('should return true when the number exists in the array', () => {
    expect(isExistsArray(5, [1, 2, 3, 4, 5])).toBe(true)
    expect(isExistsArray(1, [1, 2, 3])).toBe(true)
    expect(isExistsArray(3, [1, 2, 3])).toBe(true)
  })

  it('should return false when the number does not exist in the array', () => {
    expect(isExistsArray(6, [1, 2, 3, 4, 5])).toBe(false)
    expect(isExistsArray(0, [1, 2, 3])).toBe(false)
    expect(isExistsArray(4, [1, 2, 3])).toBe(false)
  })

  it('should return false for an empty array', () => {
    expect(isExistsArray(1, [])).toBe(false)
  })

  it('should work with negative numbers', () => {
    expect(isExistsArray(-1, [-2, -1, 0, 1, 2])).toBe(true)
    expect(isExistsArray(-3, [-2, -1, 0, 1, 2])).toBe(false)
  })

  it('should work with decimal numbers', () => {
    expect(isExistsArray(1.5, [1, 1.5, 2])).toBe(true)
    expect(isExistsArray(1.7, [1, 1.5, 2])).toBe(false)
  })
})
