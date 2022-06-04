import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { IsCommentAlreadyExist } from 'src/validation/IsCommentAlreadyExist';

export class CreateCommentDto {
  @IsNotEmpty()
  @MaxLength(10)
  // @MinLength(15)
  @IsCommentAlreadyExist()
  content: string;

  @IsNotEmpty()
  userId: number;

  @IsNotEmpty()
  postId: number;
}
