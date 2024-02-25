import { Test, TestingModule } from '@nestjs/testing';
import { EscapeRoomController } from './escape-room.controller';
import { EscapeRoomService } from './escape-room.service';
import { PrismaService } from '../prisma/prisma.service';
import { mockPrismaService } from '../test-mocks/prismaService';

describe('EscapeRoomController', () => {
  let controller: EscapeRoomController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EscapeRoomController],
      providers: [
        EscapeRoomService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    controller = module.get<EscapeRoomController>(EscapeRoomController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
