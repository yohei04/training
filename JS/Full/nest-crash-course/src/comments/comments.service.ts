import { PrismaService } from 'src/prizma/prisma.service';

import { Get, Injectable } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';

import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}

  async create(createCommentDto: CreateCommentDto) {
    return this.prisma.comment.create({
      data: createCommentDto,
    });
  }

  @Get()
  @ApiOkResponse({ type: [CommentEntity] })
  async findAll() {
    return this.prisma.comment.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  findByContent(content: string) {
    return this.prisma.comment.findFirst({
      where: {
        content,
      },
    });
  }

  findAllByPostId(postId: number) {
    return this.prisma.comment.findMany({
      where: {
        postId,
      },
    });
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return this.prisma.comment.delete({ where: { id } });
  }
}
