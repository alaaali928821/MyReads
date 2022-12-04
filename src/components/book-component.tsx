import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { RootState } from '../state/reducers';
import { oneBook } from '../types/book';

function Book(props: { book: oneBook }) {
  const state = useSelector((state: RootState) => state.book)
  const dispatch = useDispatch();

  const { addTowantToread, addToRead, addtoNone } = bindActionCreators(actionCreators, dispatch)

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
            <img src={props.book.imageLinks.smallThumbnail} />
          </div>
          <div className="book-shelf-changer">
            <select>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">
                Currently Reading
              </option>
              <option onClick={() => addTowantToread({})} value="wantToRead">Want to Read</option>
              <option onClick={() => addToRead({})} value="read">Read</option>
              <option onClick={() => addtoNone()} value="none">None</option>
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