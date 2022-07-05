import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(10)
  @ApiProperty()
  title: string;

  @ApiProperty()
  body: string;

  @ApiProperty()
  userId: number;
}
