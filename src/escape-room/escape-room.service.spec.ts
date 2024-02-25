import { Test, TestingModule } from '@nestjs/testing';
import { EscapeRoomService } from './escape-room.service';

describe('EscapeRoomService', () => {
  let service: EscapeRoomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EscapeRoomService],
    }).compile();

    service = module.get<EscapeRoomService>(EscapeRoomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
