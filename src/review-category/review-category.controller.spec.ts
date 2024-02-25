import { Test, TestingModule } from '@nestjs/testing';
import { ReviewCategoryController } from './review-category.controller';
import { ReviewCategoryService } from './review-category.service';

describe('ReviewCategoryController', () => {
  let controller: ReviewCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewCategoryController],
      providers: [ReviewCategoryService],
    }).compile();

    controller = module.get<ReviewCategoryController>(ReviewCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
