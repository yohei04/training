import { fireEvent, render, screen } from '@testing-library/react';
import AddNewPostBtn from './AddNewPostBtn';

describe('AddNewPostBtn', () => {
  test('<AddNewPostBtn /> matches snapshot', () => {
    const mockOnClick = jest.fn();
    const { asFragment } = render(<AddNewPostBtn onClick={mockOnClick} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('click button should trigger onClick callback', () => {
    const mockOnClick = jest.fn();
    render(<AddNewPostBtn onClick={mockOnClick} />);

    fireEvent.click(screen.getByText('Add New Post'));

    expect(mockOnClick).toHaveBeenCalled();
  });
});
