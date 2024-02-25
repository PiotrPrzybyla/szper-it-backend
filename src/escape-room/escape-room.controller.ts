import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EscapeRoomService } from './escape-room.service';
import { CreateEscapeRoomDto } from './dto/create-escape-room.dto';
import { UpdateEscapeRoomDto } from './dto/update-escape-room.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('escape-room')
@Controller('escape-room')
export class EscapeRoomController {
  constructor(private readonly escapeRoomService: EscapeRoomService) {}

  @Post()
  create(@Body() createEscapeRoomDto: CreateEscapeRoomDto) {
    return this.escapeRoomService.create(createEscapeRoomDto);
  }

  @Get()
  findAll() {
    return this.escapeRoomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.escapeRoomService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEscapeRoomDto: UpdateEscapeRoomDto,
  ) {
    return this.escapeRoomService.update(+id, updateEscapeRoomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.escapeRoomService.remove(+id);
  }
}
