import { Test, TestingModule } from '@nestjs/testing';
import { ReviewCategoryService } from './review-category.service';

describe('ReviewCategoryService', () => {
  let service: ReviewCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReviewCategoryService],
    }).compile();

    service = module.get<ReviewCategoryService>(ReviewCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
