import { Module } from '@nestjs/common';
import { EscapeRoomService } from './escape-room.service';
import { EscapeRoomController } from './escape-room.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [EscapeRoomController],
  providers: [EscapeRoomService],
})
export class EscapeRoomModule {}
