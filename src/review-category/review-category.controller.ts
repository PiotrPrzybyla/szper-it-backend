import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ReviewCategoryService } from './review-category.service';
import { CreateReviewCategoryDto } from './dto/create-review-category.dto';
import { UpdateReviewCategoryDto } from './dto/update-review-category.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('review-category')
@Controller('review-category')
export class ReviewCategoryController {
  constructor(private readonly reviewCategoryService: ReviewCategoryService) {}

  @Post()
  create(@Body() createReviewCategoryDto: CreateReviewCategoryDto) {
    return this.reviewCategoryService.create(createReviewCategoryDto);
  }

  @Get()
  findAll() {
    return this.reviewCategoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewCategoryService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateReviewCategoryDto: UpdateReviewCategoryDto,
  ) {
    return this.reviewCategoryService.update(+id, updateReviewCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewCategoryService.remove(+id);
  }
}
