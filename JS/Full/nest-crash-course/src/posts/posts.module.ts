import { PrismaService } from 'src/prisma/prisma.service';

import { Module } from '@nestjs/common';

import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  exports: [PostsService],
  controllers: [PostsController],
  providers: [PostsService, PrismaService],
})
export class PostsModule {}
