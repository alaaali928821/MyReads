import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { ActionType } from '../state/action-types';
import { oneBook } from '../types/book';

function Book(props: { book: oneBook }) {
  const dispatch = useDispatch();

  const { addTowantToread, addToRead, addtoCurrentlyReading } = bindActionCreators(actionCreators, dispatch)
  const handleOnSelect = (e: any) => {
    switch (e.target.value) {
      case ActionType.WTREAD:
        addTowantToread(props.book)
        break;
      case ActionType.READ:
        addToRead(props.book)
        break;
      case ActionType.CURREAD:
        addtoCurrentlyReading(props.book)
        break;
      default:
        break;
    }
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
            <img id="bookImg" src={props.book.imageLinks.smallThumbnail} />
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