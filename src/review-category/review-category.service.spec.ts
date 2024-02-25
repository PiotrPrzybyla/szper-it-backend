import { Test, TestingModule } from '@nestjs/testing';
import { ReviewCategoryService } from './review-category.service';
import { PrismaService } from '../prisma/prisma.service';
import { mockPrismaService } from '../test-mocks/prismaService';

describe('ReviewCategoryService', () => {
  let service: ReviewCategoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReviewCategoryService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<ReviewCategoryService>(ReviewCategoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
