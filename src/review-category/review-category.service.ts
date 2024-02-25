import { Injectable } from '@nestjs/common';
import { CreateReviewCategoryDto } from './dto/create-review-category.dto';
import { UpdateReviewCategoryDto } from './dto/update-review-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ReviewCategoryService {
  constructor(private readonly prisma: PrismaService) {}

  create(createReviewCategoryDto: CreateReviewCategoryDto) {
    return this.prisma.reviewCategory.create({
      data: createReviewCategoryDto,
    });
  }

  findAll() {
    return this.prisma.reviewCategory.findMany();
  }

  findOne(id: number) {
    return this.prisma.reviewCategory.findUnique({
      where: { id },
    });
  }

  update(id: number, updateReviewCategoryDto: UpdateReviewCategoryDto) {
    return this.prisma.reviewCategory.update({
      where: { id },
      data: updateReviewCategoryDto,
    });
  }

  remove(id: number) {
    return this.prisma.reviewCategory.delete({
      where: { id },
    });
  }
}
