import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { CityModule } from './city/city.module';
import { EscapeRoomModule } from './escape-room/escape-room.module';
import { UserModule } from './user/user.module';
import { ReviewModule } from './review/review.module';
import { CategoryModule } from './category/category.module';
import { ReviewCategoryModule } from './review-category/review-category.module';

@Module({
  imports: [
    PrismaModule,
    CityModule,
    EscapeRoomModule,
    UserModule,
    ReviewModule,
    CategoryModule,
    ReviewCategoryModule,
  ],
})
export class AppModule {}
