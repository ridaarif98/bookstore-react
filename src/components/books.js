import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import store from '../redux/configureStore';
import { addBook, removeBook } from '../redux/books/books';
import Form from './form';
import Book from './book';

const Books = () => {
  const dispatch = useDispatch();
  const [bookInfo, setInfo] = useState(store.getState().booksReducer);

  const submitBookToStore = (book) => {
    const newBook = {
      id: uuidv4(),
      title: book.title,
      author: book.author,
    };
    dispatch(addBook(newBook));
    localStorage.setItem('storeBook',JSON.stringify(store.getState().booksReducer));
    setInfo(JSON.parse(localStorage.getItem('storeBook')));
  };

  const rmBook = (book) => {
    dispatch(removeBook(book));
    localStorage.setItem('storeBook', JSON.stringify(store.getState().booksReducer));
    setInfo(JSON.parse(localStorage.getItem('storeBook')));
  };

  const displayBooks = bookInfo.map((bk) => (
    <Book
      title={bk.title}
      author={bk.author}
      key={bookInfo.indexOf(bk)}
      rmBook={() => rmBook(bk)}
    />
  ));

  return (
    <div>
      <ul className="allBooks">{displayBooks}</ul>
      <Form addBook={submitBookToStore} />
    </div>
  );
};

export default Books;
