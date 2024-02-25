import { Test, TestingModule } from '@nestjs/testing';
import { CityService } from './city.service';
import { PrismaService } from '../prisma/prisma.service';
import { mockPrismaService } from '../test-mocks/prismaService';

describe('CityService', () => {
  let service: CityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CityService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<CityService>(CityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
