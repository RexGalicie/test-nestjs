import { NewsEntity } from './news.entity';
import { IdType } from '../../../infrastructure/entities/id.type';

describe('News Entity', () => {
  it('should fill fields while create', () => {
    const id = IdType.generate()
    const news = new NewsEntity(id, 'first news', 'url-to-news')
    expect(news.id).toBe(id.getValue())
    expect(news.getTitle()).toBe('first news')
    expect(news.getUrl()).toBe('url-to-news')
  })
  it('should update created entity fields', () => {
    const id = IdType.generate()
    const news = new NewsEntity(id, 'created news', 'created-url')
    news.setTitle('updated news')
    news.setUrl('updated-url')
    expect(news.getTitle()).toBe('updated news')
    expect(news.getUrl()).toBe('updated-url')
  })
})