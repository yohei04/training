import { PostsService } from 'src/posts/posts.service';

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
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentEntity } from './entities/comment.entity';

@Controller('comments')
@ApiTags('comments')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService,
    private readonly postsService: PostsService,
  ) {}

  @Post()
  @ApiCreatedResponse({ type: [CommentEntity] })
  async create(@Body() createCommentDto: CreateCommentDto) {
    const { postId } = createCommentDto;
    const post = await this.postsService.findById({ id: postId });

    if (!post) {
      throw new NotFoundException();
    }

    return this.commentsService.create(createCommentDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(+id);
  }

  @Get('/posts/:postId')
  @ApiOkResponse({ type: [CommentEntity] })
  async findAllByPostId(@Param('postId', ParseIntPipe) postId: number) {
    return await this.commentsService.findAllByPostId(postId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(+id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(+id);
  }
}
