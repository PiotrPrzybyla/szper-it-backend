import { Test, TestingModule } from '@nestjs/testing';
import { ReviewService } from './review.service';
import { PrismaService } from '../prisma/prisma.service';
import { mockPrismaService } from '../test-mocks/prismaService';

describe('ReviewService', () => {
  let service: ReviewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReviewService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<ReviewService>(ReviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
