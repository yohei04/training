import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { Post as PostModel, Prisma, User as UserModel } from '@prisma/client';

import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  // @ApiOkResponse({ type: User, isArray: true })
  // @ApiQuery({ name: 'name', required: false })
  // @Get()
  // getUsers(@Query('name') name?: string): User[] {
  //   return this.usersService.findAll(name);
  // }

  @Get()
  @ApiOkResponse({ type: [UserEntity] })
  async findAll(): Promise<UserModel[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: UserEntity, description: 'The user' })
  getUserById(@Param('id') id: string) {
    return this.usersService.findById(Number(id));
  }

  @Post()
  @ApiCreatedResponse({ type: UserEntity })
  createUser(@Body() body: CreateUserDto) {
    return this.usersService.create(body);
  }
}
