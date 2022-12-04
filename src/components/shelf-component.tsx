import Book from "./book-component"
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Shelf(props: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) {
    return (
        <div className="bookshelf">
                <h2 className="bookshelf-title">{props.title}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    <Book />
                  </ol>
                </div>
              </div>
    )
}

export default Shelf;