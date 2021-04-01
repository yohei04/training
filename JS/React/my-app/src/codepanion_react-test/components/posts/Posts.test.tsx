import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Posts from './Posts';

const mockPostData = [
  {
    userId: 1,
    id: 1,
    title:
      'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
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

const mockNewPostData = {
  userId: 1,
  id: 8,
  title: 'モックタイトル',
  body: 'モックボディ',
};

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('Posts', () => {
  beforeEach(() => {
    fetchMock.mockResponseOnce(JSON.stringify(mockPostData));
  });

  test('fetch and render post', async () => {
    render(<Posts />);
    const text = await screen.findByText(/quia et suscipit/);
    expect(text).toBeInTheDocument();
  });

  test('fetch and render all post titles', async () => {
    render(<Posts />);
    await waitFor(() =>
      mockPostData.map((post) =>
        expect(screen.getByText(post.title)).toBeInTheDocument()
      )
    );
  });

  test('click on cancel button should hide the form and reset input to default value', async () => {
    render(<Posts />);
    fireEvent.click(await screen.findByText('Add New Post'));

    expect(screen.getByPlaceholderText('Title')).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText('Title'), {
      target: { value: 'New Post Title' },
    });

    expect(
      (screen.getByPlaceholderText('Title') as HTMLInputElement).value
    ).toBe('New Post Title');

    fireEvent.click(screen.getByText('Cancel'));

    expect(screen.queryByPlaceholderText('Title')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('Add New Post'));
    expect(
      (screen.getByPlaceholderText('Title') as HTMLInputElement).value
    ).toBe('');
  });

  test('create and render a new post and submit a form', async () => {
    render(<Posts />);
    fireEvent.click(await screen.findByText('Add New Post'));

    const titleInputEl = screen.getByPlaceholderText(
      'Title'
    ) as HTMLInputElement;
    const bodyTextareaEl = screen.getByPlaceholderText(
      'Body'
    ) as HTMLInputElement;
    const submitBtnEl = screen.getByRole('button', {
      name: 'Submit',
    });

    expect(titleInputEl.value).toBe('');
    expect(bodyTextareaEl.value).toBe('');
    expect(submitBtnEl).toBeInTheDocument();

    fireEvent.change(titleInputEl, {
      target: { value: mockNewPostData.title },
    });
    fireEvent.change(bodyTextareaEl, {
      target: { value: mockNewPostData.body },
    });

    // fetchMock.resetMocks();
    fetchMock.mockResponseOnce(JSON.stringify(mockNewPostData));

    await waitFor(() => fireEvent.click(submitBtnEl));

    expect(titleInputEl).not.toBeInTheDocument();
    expect(bodyTextareaEl).not.toBeInTheDocument();

    expect(screen.getByText(mockNewPostData.title)).toBeInTheDocument();
    expect(screen.getByText(mockNewPostData.body)).toBeInTheDocument();
  });
});
