import Shelf from "../components/shelf-component"
import FindABook from "../components/find_A_book-component"
import React, { useEffect } from "react";
import * as BooksAPI from "../BooksAPI"
function Home() {

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      //this.setState({ books })
    })
      .catch(() => {
        // handel Error
      })
  }, []);

  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>My Reads</h1>
        </div>
        <div className="list-books-content">
          <Shelf title="Want To Read" />
          <Shelf title="Currently Reading" />
          <Shelf title="Read" />
        </div>
        <FindABook />
      </div>
    </div>
  )
}

export default Home;