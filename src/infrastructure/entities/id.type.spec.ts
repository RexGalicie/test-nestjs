import { IdType } from "./id.type"
import { v4 } from 'uuid'
import validator from 'validator'

describe('Id Type', () => {
  it('should correct create new object with valid uuid', () => {
    const uuid = v4()
    const id = new IdType(uuid)
    expect(id.getValue()).toBe(uuid)
  })

  it('should correct generate new object with valid uuid', () => {
    const id = IdType.generate()
    expect(id.getValue()).not.toBeNull()
    expect(validator.isUUID(id.getValue(), '4')).toBe(true)
  })

  it('should throw error if not valid uuid string', () => {
    expect(() => {
      new IdType('not valid uuid')
    }).toThrowError('ID must be valid UUID string');
  })

  it('should transform method "from"', () => {
    const from = IdType.transformer.from
    const uuid  = v4()
    const id = from(uuid)
    expect(id.getValue()).toBe(uuid)
  })

  it('should transform method "to"', () => {
    const to = IdType.transformer.to
    const uuid = v4()
    const validUuid = to(new IdType(uuid))
    expect(validUuid).toBe(uuid)
  })
})