import "../App.css";
import { Link } from 'react-router-dom'
function FindABook() {
    return (
        <div className="open-search">
             <Link to="/search"><button>Add a book</button></Link>
        </div>
    )
}

export default FindABook;