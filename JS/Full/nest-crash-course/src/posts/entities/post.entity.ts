import { Post } from '@prisma/client';

export class PostEntity implements Post {
  // @ApiProperty()
  id: number;

  // @ApiProperty()
  title: string;

  // @ApiProperty()
  body: string;

  // @ApiProperty()
  createdAt: Date;

  // @ApiProperty()
  updatedAt: Date;

  userId: number;
}
