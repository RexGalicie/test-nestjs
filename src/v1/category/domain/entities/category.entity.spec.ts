import { Id } from '../../../../infrastructure/domain/entities/id'
import { CategoryEntity } from './category.entity'

describe('News Entity', () => {
  it('should fill fields via constructor', () => {
    const id = Id.generate()
    const category = new CategoryEntity(id, 'first category')
    expect(category.uuid).toBe(id.getValue())
    expect(category.getTitle()).toBe('first category')
  })

  it('should update title', () => {
    const id = Id.generate()
    const category = new CategoryEntity(id, 'first category')
    category.setTitle('updated title')
    expect(category.getTitle()).toBe('updated title')
  })

  it('should update title', () => {
    const id = Id.generate()
    const category = new CategoryEntity(id, 'first category')
    category.setTitle('updated title')
    expect(category.getTitle()).toBe('updated title')
  })

  it('should disactivate category', () => {
    const id = Id.generate()
    const category = new CategoryEntity(id, 'first category')
    expect(category.isActive()).toBeTruthy()
    category.disactivate()
    expect(category.isActive()).toBeFalsy()
  })

  it('should not disactivate category if not active any more', () => {
    const id = Id.generate()
    const category = new CategoryEntity(id, 'first category')
    category.disactivate()
    expect(category.isActive()).toBeFalsy()
    expect(() => {
      category.disactivate()
    }).toThrowError('Category already deactivated')
    expect(category.isActive()).toBeFalsy()
  })

  it('should activate category', () => {
    const id = Id.generate()
    const category = new CategoryEntity(id, 'first category', false)
    expect(category.isActive()).toBeFalsy()
    category.activate()
    expect(category.isActive()).toBeTruthy()
  })

  it('should not active if category active already', () => {
    const id = Id.generate()
    const category = new CategoryEntity(id, 'first category')
    expect(category.isActive()).toBeTruthy()
    expect(() => {
      category.activate()
    }).toThrowError('Category active')
    expect(category.isActive()).toBeTruthy()
  })
})
