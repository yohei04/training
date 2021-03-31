import { render, screen } from '@testing-library/react';
import Posts from './Posts';

const mockPostData = [
  {
    userId: 1,
    id: 1,
    title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body:
      'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    userId: 1,
    id: 2,
    title: 'qui est esse',
    body:
      'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
  },
  {
    userId: 1,
    id: 3,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body:
      'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
  },
];

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('Posts', () => {
  test('fetch and render post', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockPostData));
    render(<Posts />);
    const text = await screen.findByText(/quia et suscipit/);
    expect(text).toBeInTheDocument();
  });

  test('fetch and render all post titles', async () => {
    fetchMock.mockResponseOnce(JSON.stringify(mockPostData));
    render(<Posts />);
    await screen.findByText(/quia et suscipit/);
    mockPostData.map((post) => expect(screen.getByText(post.title)).toBeInTheDocument());
  });
});
