import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { Post as PostModel, Prisma } from '@prisma/client';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostEntity } from './entities/post.entity';
import { PostsService } from './posts.service';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @ApiCreatedResponse({ type: PostEntity })
  @ApiOperation({
    summary: '投稿作成',
    description: '投稿作成の説明',
  })
  async create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  @ApiOkResponse({ type: [PostEntity] })
  async findAll() {
    return this.postsService.findAll();
  }

  @Get('/users/:userId')
  @ApiOkResponse({ type: [PostEntity] })
  @ApiOperation({
    summary: 'ユーザーに紐づく投稿取得',
    description: '特定のユーザーに紐づく投稿を取得する',
  })
  async findAllByUserId(@Param('userId', ParseIntPipe) userId: number) {
    return await this.postsService.findAllByUserId({ authorId: userId });
  }

  @Get(':id')
  @ApiOkResponse({ type: PostEntity })
  async findById(@Param('id') id: number) {
    const post = await this.postsService.findById({ id: Number(id) });

    if (!post) {
      throw new NotFoundException();
    }

    return post;
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updatePostDto: UpdatePostDto) {
    const post = await this.postsService.findById({ id: Number(id) });

    if (!post) {
      throw new NotFoundException();
    }

    return this.postsService.update(+id, updatePostDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: PostEntity })
  async remove(@Param('id') id: number) {
    const post = await this.postsService.findById({ id: Number(id) });

    if (!post) {
      throw new NotFoundException();
    }

    return this.postsService.remove(Number(id));
  }
}
