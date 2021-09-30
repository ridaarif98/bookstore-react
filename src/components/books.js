import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
//import store from '../redux/configureStore';
import { setBooks } from '../redux/books/books';
import Form from './form';
import Book from './book';

const Books = () => {
  //const [bookInfo, setInfo] = useState(store.getState().booksReducer);

  // const submitBookToStore = (book) => {
  //   const newBook = {
  //     id: uuidv4(),
  //     title: book.title,
  //     author: book.author,
  //   };
  //   dispatch(addBook(newBook));
  //   localStorage.setItem('storeBook', JSON.stringify(store.getState().booksReducer));
  //   setInfo(JSON.parse(localStorage.getItem('storeBook')));
  // };

  // const rmBook = (book) => {
  //   dispatch(removeBook(book));
  //   localStorage.setItem('storeBook', JSON.stringify(store.getState().booksReducer));
  //   setInfo(JSON.parse(localStorage.getItem('storeBook')));
  // };

  const dispatch = useDispatch();
  // useSelector allows you to extract data from react store
  const books = useSelector((state) => state.books);

  const loadBooks = async () => {
    const booksGet = await axios.get(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KP5PI7hEkMIt6Rn76UzC/books'
    ).then((res)=>res.data);
    dispatch(setBooks(booksGet));
  };

  useEffect(() => {
    loadBooks();
  }, []);

  // const displayBooks = bookInfo.map((bk) => (
  //   <Book
  //     title={bk.title}
  //     author={bk.author}
  //     key={bookInfo.indexOf(bk)}
  //     rmBook={() => rmBook(bk)}
  //   />
  // ));

  return (
    <div>
      {/* <ul className="allBooks">{displayBooks}</ul> */}
      {/* <Form addBook={submitBookToStore} /> */}
      <Book books={books}/>
      <Form />
    </div>
  );
};

export default Books;