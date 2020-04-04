import { v4 } from 'uuid'
import validator from 'validator'
import { Id } from './id'

describe('Id Type', () => {
  it('should correct create new object with valid uuid', () => {
    const uuid = v4()
    const id = new Id(uuid)
    expect(id.getValue()).toBe(uuid)
  })

  it('should correct generate new object with valid uuid', () => {
    const id = Id.generate()
    expect(id.getValue()).not.toBeNull()
    expect(validator.isUUID(id.getValue(), '4')).toBe(true)
  })

  it('should throw error if not valid uuid string', () => {
    expect(() => {
      // tslint:disable-next-line:no-unused-expression
      new Id('not valid uuid')
    }).toThrowError('ID must be valid UUID string')
  })

  it('should be equial IDs', () => {
    const id = Id.generate()
    expect(id.isEqual(id)).toBeTruthy()
  })

  it('should be not equial IDs', () => {
    const id = Id.generate()
    const id2 = Id.generate()
    expect(id.isEqual(id2)).toBeFalsy()
  })
})
