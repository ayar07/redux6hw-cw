import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../../store/actions/bookCreator";
import BookListItem from "./BookListItem";
import BookError from "../error/BookError";
import BookLoading from "../loading/BookLoading";

const BookList = () => {
    const { books, booksIsLoading, booksIsError } = useSelector((state) => state.booksReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooks());
    }, []);

    console.log(books, booksIsError, booksIsLoading);

    if (booksIsError) {
        return <div> {<BookError />}</div>
    }

    return (
        <ul>
            {booksIsLoading ? (
                <div>{<BookLoading />}</div>
            ) : (
                books.map((el) => <BookListItem key={`books-${el.id}`} book={el} />)
            )}
        </ul>
    );
};

export default BookList;