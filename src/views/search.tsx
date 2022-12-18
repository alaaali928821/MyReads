import React, { useState } from 'react';
import Book from '../components/book-component';
import * as BookApis from '../BooksAPI'
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { bindActionCreators } from 'redux';
import { actionCreators } from "../state";
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers';
import { ABook } from '../types/book';
import { Link } from 'react-router-dom';

export const Search: React.FC = () => {
    const filteredBooks: ABook[] = useSelector((state: RootState) => state.book)
    const [message, setMessage] = useState('');
    const dispatchSearchedBooks = useDispatch();
    const dispatchEmptySearchedBooks = useDispatch();
    const { getSearchedBooks } = bindActionCreators(actionCreators, dispatchSearchedBooks);
    const { emptySearchedBooks } = bindActionCreators(actionCreators, dispatchEmptySearchedBooks);

    const handleChange = (e: { target: { value: string; }; }) => {
        setMessage(e.target.value);
        if (e.target.value !== "") {
            BookApis.search(e.target.value, 20).then((filterdBooks) => {
                getSearchedBooks(filterdBooks);
            }).catch(()=>{
                emptySearchedBooks();
            })
        } else {
            emptySearchedBooks()
        }

    };

    return (
        <React.Fragment>
            <div className="search-books">
                <div className="search-books-bar">
                <Link className="close-search" to="/">Close</Link>
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
                    {filteredBooks && filteredBooks.length === 0 &&  <div className="error-div"><h1>NO Books Found</h1></div>}
                </div>
            </div>
        </React.Fragment>

    );
}

export default Search;