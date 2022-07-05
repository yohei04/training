import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { isUnique } from 'src/validation/isUnique';

export class CreateCommentDto {
  @IsNotEmpty()
  @MaxLength(10)
  // @MinLength(15)
  @isUnique({ context: 'comment' })
  content: string;

  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  postId: number;
}
