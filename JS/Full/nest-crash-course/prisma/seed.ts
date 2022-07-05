import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.upsert({
    where: { id: 1 },
    update: {},
    create: {
      name: 'プテはし',
      posts: {
        create: [
          {
            title: 'プテはし - タイトル - 1',
            body: 'プテはし - ボディ - 1',
          },
          {
            title: 'プテはし - タイトル - 2',
            body: 'プテはし - ボディ - 2',
          },
        ],
      },
      comments: {
        create: [
          {
            postId: 1,
            content: 'プテはし - コメント - 1',
          },
          {
            postId: 1,
            content: 'プテはし - コメント - 2',
          },
          {
            postId: 2,
            content: 'プテはし - コメント - 3',
          },
        ],
      },
    },
  });

  const user2 = await prisma.user.upsert({
    where: { id: 2 },
    update: {},
    create: {
      name: 'アベレージ',
      posts: {
        create: {
          title: 'アベレージ - タイトル - 1',
          body: 'アベレージ - ボディ - 1',
        },
      },
      comments: {
        create: {
          postId: 1,
          content: 'アベレージ - コメント - 1',
        },
      },
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
