import { Test, TestingModule } from '@nestjs/testing';
import { ReviewCategoryController } from './review-category.controller';
import { ReviewCategoryService } from './review-category.service';
import { PrismaService } from '../prisma/prisma.service';
import { mockPrismaService } from '../test-mocks/prismaService';

describe('ReviewCategoryController', () => {
  let controller: ReviewCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReviewCategoryController],
      providers: [
        ReviewCategoryService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    controller = module.get<ReviewCategoryController>(ReviewCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
