import Shelf from "../components/shelf-component"
import FindABook from "../components/find_A_book-component"
import React, { useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI"
import { oneBook } from "../types/book"
import { Shelv } from "../types/shelf"


function Home() {

  const shelves = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Read' },
  ]

  const initAllBook: oneBook[] = []
  const [AllBooks, setAllBooks] = useState(initAllBook)

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      setAllBooks(books);
    })
      .catch(() => {
        // handel Error
      })
  }, []);

  function booksOnShelf(shelf: Shelv) {
    return AllBooks.filter(book => book.shelf === shelf.key)
  }

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>My Reads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map(shelf => (
            <Shelf key={shelf.key} shelf={shelf} books={booksOnShelf(shelf)} />
          ))}
        </div>
      </div>
      <FindABook />
    </div>
  )
}

export default Home;