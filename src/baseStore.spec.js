import {
  pushTo,
  pullFrom,
  unsetPath,
  resetStore,
} from './baseStore'

// ENVIRONMENT VARIABLES

// TESTS
describe('pullFrom', () => {
  it('should exist', () => {
    expect(pullFrom).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(pullFrom())
  })
})

describe('pushTo', () => {
  it('should exist', () => {
    expect(pushTo).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(typeof pushTo).toBe('function')
  })
})

describe('unsetPath', () => {
  it('should exist', () => {
    expect(unsetPath).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(unsetPath())
  })
})

describe('resetStore', () => {
  it('should exist', () => {
    expect(resetStore).not.toBeUndefined()
  })

  it('should be a function', () => {
    expect(resetStore())
  })
})