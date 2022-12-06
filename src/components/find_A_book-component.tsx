import "../App.css";
import { Link } from 'react-router-dom'
function FindABook(props: any) {
    return (
        <div className="open-search">
             <Link to="/search"><button  onClick={props.resetSearch}>Add a book</button></Link>
        </div>
    )
}

export default FindABook;