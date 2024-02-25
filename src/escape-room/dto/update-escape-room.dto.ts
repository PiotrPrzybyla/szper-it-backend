import { PartialType } from '@nestjs/swagger';
import { CreateEscapeRoomDto } from './create-escape-room.dto';

export class UpdateEscapeRoomDto extends PartialType(CreateEscapeRoomDto) {}
