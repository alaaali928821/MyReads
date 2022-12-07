import Book from "./book-component"
import { oneBook } from "../types/book";
import { Shelv } from "../types/shelf";

function Shelf(props: { shelf: Shelv , books:oneBook[] , key: string}) {
    return (
        <div className="bookshelf">
                <h2 className="bookshelf-title">{props.shelf.name}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {props.books.map((book, index) => (
                    <Book key={index} book={book}/>
                  ))}
                  </ol>
                </div>
              </div>
    )
}

export default Shelf;