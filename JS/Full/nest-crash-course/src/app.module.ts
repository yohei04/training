import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { PostsModule } from './posts/posts.module';
import { PrismaModule } from './prizma/prisma.module';
import { ToursModule } from './tours/tours.module';
import { UsersModule } from './users/users.module';
import { isUniqueConstraint } from './validation/isUnique';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    PostsModule,
    CommentsModule,
    ToursModule,
  ],
  controllers: [AppController],
  providers: [AppService, isUniqueConstraint],
})
export class AppModule {}
