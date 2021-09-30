import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setBooks } from '../redux/books/books';
import Form from './form';
import Book from './book';

const Books = () => {
  const dispatch = useDispatch();

  // useSelector allows you to extract data from react store
  const books = useSelector((state) => state.books);

  const loadBooks = async () => {
    const booksGet = await axios
      .get(
        'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KP5PI7hEkMIt6Rn76UzC/books',
      )
      .then((res) => res.data);
    dispatch(setBooks(booksGet));
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div>
      <Book books={books} />
      <Form />
    </div>
  );
};

export default Books;
