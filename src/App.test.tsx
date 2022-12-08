import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import  './state/index'
import { oneBook } from "./types/book";
const book: oneBook = {
    authors: ["vvvvv"],
    shelf: "currentlyReading",
    title: "kooipooioi",
    imageLinks: { smallThumbnail: "" },
  }
;
export const renderWithContext = (element: React.ReactElement) => {
  store.dispatch(booksActions.appendBooks(book));
  render(<Provider store={store}>{element}</Provider>, { wrapper: Router });
};