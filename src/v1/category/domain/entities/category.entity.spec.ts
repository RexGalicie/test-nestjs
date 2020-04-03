import { CategoryEntity } from './category.entity';
import { IdType } from '../../../../infrastructure/entities/id.type';

describe('News Entity', () => {
  it('should fill fields via constructor', () => {
    const id = IdType.generate()
    const category = new CategoryEntity(id, 'first category')
    expect(category.id).toBe(id.getValue())
    expect(category.getTitle()).toBe('first category')
  })

  it('should update title', () => {
    const id = IdType.generate()
    const category = new CategoryEntity(id, 'first category')
    category.setTitle('updated title')
    expect(category.getTitle()).toBe('updated title')
    expect(category.isActive()).toBeTruthy()
  })

  it('should update title', () => {
    const id = IdType.generate()
    const category = new CategoryEntity(id, 'first category')
    category.setTitle('updated title')
    expect(category.getTitle()).toBe('updated title')
  })

  it('should disactivate category', () => {
    const id = IdType.generate()
    const category = new CategoryEntity(id, 'first category')
    category.disactivate()
    expect(category.isActive()).toBeFalsy()
  })

  it('should activate category', () => {
    const id = IdType.generate()
    const category = new CategoryEntity(id, 'first category')
    category.activate()
    expect(category.isActive()).toBeTruthy()
  })
})