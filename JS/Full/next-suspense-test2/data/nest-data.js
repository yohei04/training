module.exports = () => {
  const data = {
    data: [],
  };

  // Create 1000 users
  for (let i = 0; i < 100; i++) {
    data.data.push({
      id: i,
      name: `user-${i}`,
      posts: [
        {
          id: i,
          title: `post-${i}`,
          body: `post-${i} body`,
          userId: i,
          comments: [
            {
              id: i,
              body: `comment-${i}`,
              postId: i,
              userId: i,
            },
          ],
          likes: i,
        },
      ],
    });
  }
  return data;
};
