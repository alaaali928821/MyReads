import Shelf from "../components/shelf-component"
import FindABook from "../components/find_A_book-component"
import React, { useEffect, useState } from "react";
import * as BooksAPI from "../BooksAPI"
import { oneBook } from "../types/book"
import { Shelv } from "../types/shelf"
import { useSelector } from "react-redux";
import { RootState } from '../state/reducers';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux';
import { actionCreators } from "../state";


function Home() {

  const shelves = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to Read' },
    { key: 'read', name: 'Read' },
  ]

  const AllBooks: oneBook[] = useSelector((state: RootState) => state.book)
  const dispatchBooks = useDispatch()
  const { getAllBooks } = bindActionCreators(actionCreators, dispatchBooks)

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      getAllBooks(books)
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