import Book from "./book-component";
import { render , } from "@testing-library/react";
import { Provider } from "react-redux";
describe('Book', function () {
  it('should Test Book', function () {
    const book = {
      shelf: 'read',
      imageLinks: { smallThumbnail: '' },
      title: '',
      authors: ''
    }
  
    const store = [{
      shelf: 'read',
      imageLinks: { smallThumbnail: '' },
      title: '',
      authors: ''
    },
    {
      shelf: 'wantToread',
      imageLinks: { smallThumbnail: '' },
      title: '',
      authors: ''
    }]
    render(<Provider store={store}><Book book={book} /></Provider>);
    const renderElement = screen.queryAllByTestId('selecteId')
    expect(renderElement).toBeInTheDocument();
  });
});
