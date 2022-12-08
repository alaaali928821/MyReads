import { render, screen } from '@testing-library/react';
import Book from './book-component';
import { oneBook } from '../types/book';

test('renders book', () => {
  const onebook: oneBook = {
    shelf: 'read',
    imageLinks: { smallThumbnail: '' },
    title: '',
    authors: ''
}
  render(<Book book={onebook}/>);
  const linkElement = screen.findByTestId('bookImg');
  expect(linkElement).toBeInTheDocument();
});
