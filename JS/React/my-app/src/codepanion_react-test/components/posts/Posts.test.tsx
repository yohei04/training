import { render } from '@testing-library/react';
import Posts from './Posts';

describe('Posts', () => {
  test('fetch and render posts', () => {
    render(<Posts />);
  });
});
