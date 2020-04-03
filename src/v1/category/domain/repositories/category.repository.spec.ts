import { IdType } from './../../../../infrastructure/entities/id.type';
import { CategoryEntity } from '../entities/category.entity';
import { CategoryRepository } from './category.repository';
import { Test, TestingModule } from "@nestjs/testing";
import { getEntityManagerToken } from '@nestjs/typeorm';
import { Repository, EntityManager } from 'typeorm';

describe("CategoryRepository", () => {
  let categoryRepository: CategoryRepository;
  let module: TestingModule;
  let manager: EntityManager

  beforeAll(async () => {
    module = await Test.createTestingModule({
      providers: [ 
        CategoryRepository,
        {
          provide: getEntityManagerToken(),
          useClass: Repository,
        },
      ]
    }).compile();

    categoryRepository = module.get<CategoryRepository>(CategoryRepository);
    manager = module.get<EntityManager>(getEntityManagerToken());
  });

  afterAll(async () => {
    module.close();
  });

  it("should be defined", () => {
    expect(categoryRepository).toBeDefined();
  });

  it('should create entity', async () => {
    const result = new CategoryEntity(new IdType('739999d3-8a06-4740-8235-aad7c4d2076a'), 'awesome category');
    jest.spyOn(manager, 'save').mockResolvedValueOnce(result);
    const saved = await categoryRepository.add(result)
    expect(saved).toEqual(result);
  });

  it('should remove entity by uuid', async () => {
    const result = new CategoryEntity(new IdType('739999d3-8a06-4740-8235-aad7c4d2076a'), 'awesome category');
    jest.spyOn(manager, 'softRemove').mockImplementation();
    expect(await categoryRepository.remove(result)).toBeUndefined();
  });
})