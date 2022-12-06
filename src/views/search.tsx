import React, { useState } from 'react';
import Book from '../components/book-component';
import * as BookApis from '../BooksAPI'
export const Search: React.FC = () => {
    const [message, setMessage] = useState('');
    const [filteredBooks, setFilteredBooks] = useState([]);


    const handleChange = (e: { target: { value: string; }; }) => {
        setMessage(e.target.value);
        BookApis.search(e.target.value, 5).then((filterdBooks) => {
            setFilteredBooks(filterdBooks)
        })

    };


    return (
        <React.Fragment>

            <div className="search-books">
                <div className="search-books-bar">
                    <input
                        type="text"
                        id="message"
                        name="message"
                        onChange={handleChange}
                        value={message}
                        placeholder="What are you looking for?"
                    />
                </div>
            </div>
            <div>
                <div className="books-grid">

                    {filteredBooks && filteredBooks.length > 0 && filteredBooks.map((value: any) => {
                        return (
                            <Book key={value.id} book={value} />
                        );
                    })}
                    {!filteredBooks && <h1>No Books Found</h1>}
                </div>
            </div>
        </React.Fragment>

    );
}

export default Search;