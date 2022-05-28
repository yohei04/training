import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(10)
  content: string;

  @IsNotEmpty()
  postId: number;
}
