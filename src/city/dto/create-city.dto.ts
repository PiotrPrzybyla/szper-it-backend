import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCityDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;
}
