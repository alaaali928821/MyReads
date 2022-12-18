import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { ActionType } from '../state/action-types';
import { ABook } from '../types/book';
import * as BooksAPI from "../BooksAPI"
import { setShelf } from '../state/action-creators';

function Book(props: { book: ABook }) {
  const dispatch = useDispatch();

  const { setShelf } = bindActionCreators(actionCreators, dispatch)
  const handleOnSelect = (e: any) => {
    setShelf(props.book , e.target.value);
    updateSelectedBook(props.book, e.target.value)
  }

  const updateSelectedBook = (book: ABook, shelf: any) => {
    BooksAPI.update(book, shelf).then((updatedBook) => {
    })
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193
            }}
          >
            <img alt={props.book.title} id="bookImg" src={props.book.imageLinks.smallThumbnail} />
          </div>
          <div className="book-shelf-changer">
            <select onChange={handleOnSelect} id="selecteId" value={props.book.shelf}>
              <option value="moveTo" >Move To</option>
              <option value="wantToRead" >Want to Read</option>
              <option value="read">Read</option>
              <option value="currentlyReading">Currently reading</option>
            </select>
          </div>
        </div>
        <div className="book-title">{props.book.title}</div>
        <div className="book-authors">{props.book.authors}</div>
      </div>
    </li>
  )
}

export default Book;