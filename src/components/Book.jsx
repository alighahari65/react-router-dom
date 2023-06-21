import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteBook, getBook } from "../data";

const Book = () => {
    const params = useParams();
    const book = getBook(parseInt(params.bookId));
    const navigate = useNavigate();
    const location = useLocation();
    
    if(!book) {
        return <p>این کتاب یافت نشد</p>
    }

    return ( 
        <main style={{padding: "1rem"}}>
            <h2>قیمت : {`${book.amount} تومان`}</h2>
            <p>{book.name}</p>
            <p>{`تاریخ انتشار: ${book.due}`}</p>
            <button onClick={() => {
                deleteBook(book.number);
                navigate(`/books/${location.search}`)
            }}>حذف</button>
        </main>
     );
}
 
export default Book;