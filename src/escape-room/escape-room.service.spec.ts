import { Test, TestingModule } from '@nestjs/testing';
import { EscapeRoomService } from './escape-room.service';
import { PrismaService } from '../prisma/prisma.service';
import { mockPrismaService } from '../test-mocks/prismaService';

describe('EscapeRoomService', () => {
  let service: EscapeRoomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EscapeRoomService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<EscapeRoomService>(EscapeRoomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
