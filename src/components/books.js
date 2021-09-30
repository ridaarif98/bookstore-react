import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadBooks } from '../redux/api/api';
import Form from './form';
import Book from './book';

const Books = () => {
  const dispatch = useDispatch();

  // useSelector allows you to extract data from react store
  const books = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(loadBooks);
  }, []);

  return (
    <div>
      <Book books={books} />
      <Form />
    </div>
  );
};

export default Books;
