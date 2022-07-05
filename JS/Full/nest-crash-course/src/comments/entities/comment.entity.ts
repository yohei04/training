import { Comment } from '@prisma/client';

export class CommentEntity implements Comment {
  id: number;

  content: string;

  createdAt: Date;

  updatedAt: Date;

  userId: number;

  postId: number;
}
