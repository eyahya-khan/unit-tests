import { multiply } from './1-multiplication'

describe('1-multiplication', () => {
  it('should return the value from multiplying two numbers', () => {
    expect(multiply(2, 2)).toEqual(4)
  })
})

describe('2-multiplication', () => {
  it('should return the value from multiplying two numbers', () => {
    expect(multiply(3, 2)).toEqual(6)
  })
})