import { PartialType } from '@nestjs/swagger';
import { CreateReviewCategoryDto } from './create-review-category.dto';

export class UpdateReviewCategoryDto extends PartialType(CreateReviewCategoryDto) {}
