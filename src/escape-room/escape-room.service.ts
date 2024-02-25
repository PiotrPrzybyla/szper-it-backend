import { Injectable } from '@nestjs/common';
import { CreateEscapeRoomDto } from './dto/create-escape-room.dto';
import { UpdateEscapeRoomDto } from './dto/update-escape-room.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EscapeRoomService {
  constructor(private readonly prisma: PrismaService) {}

  create(createEscapeRoomDto: CreateEscapeRoomDto) {
    return this.prisma.escapeRoom.create({
      data: createEscapeRoomDto,
    });
  }

  findAll() {
    return this.prisma.escapeRoom.findMany();
  }

  findOne(id: number) {
    return this.prisma.escapeRoom.findUnique({
      where: { id },
    });
  }

  update(id: number, updateEscapeRoomDto: UpdateEscapeRoomDto) {
    return this.prisma.escapeRoom.update({
      where: { id },
      data: updateEscapeRoomDto,
    });
  }

  remove(id: number) {
    return this.prisma.escapeRoom.delete({
      where: { id },
    });
  }
}
