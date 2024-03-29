import { PrismaService } from 'src/prisma/prisma.service';

import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  create(createPostDto: CreatePostDto) {
    const { title, body, userId } = createPostDto;
    return this.prisma.post.create({
      data: {
        title,
        body,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.post.findMany();
  }

  findById(postWhereUniqueInput: Prisma.PostWhereUniqueInput) {
    return this.prisma.post.findUnique({
      where: postWhereUniqueInput,
    });
  }

  findAllByUserId(userId: Prisma.PostWhereInput) {
    return this.prisma.post.findMany({
      where: userId,
    });
  }

  findFilteredPosts(params: { where: Prisma.PostWhereInput }) {
    const { where } = params;
    return this.prisma.post.findMany({
      where,
    });
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.prisma.post.update({
      where: { id },
      data: updatePostDto,
    });
  }

  remove(id: number) {
    return this.prisma.post.delete({ where: { id } });
  }
}
