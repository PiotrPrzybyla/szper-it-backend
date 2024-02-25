import { IsInt, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewCategoryDto {
  @ApiProperty()
  @IsInt()
  @IsNotEmpty()
  value: number;

  @ApiProperty()
  @IsInt()
  reviewId: number;

  @ApiProperty()
  @IsInt()
  categoryId: number;
}
