import { Module } from '@nestjs/common';
import { ReviewCategoryService } from './review-category.service';
import { ReviewCategoryController } from './review-category.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ReviewCategoryController],
  providers: [ReviewCategoryService],
})
export class ReviewCategoryModule {}
