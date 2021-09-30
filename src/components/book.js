import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/api/api';

const Book = ({ books }) => {
  const dispatch = useDispatch();

  return (
    <ul className="allBooks">
      {books.map((book) => (
        <li key={book.item_id}>
          <span>
            {book.title}
            {book.category}
          </span>
          <button type="button" id={book.item_id} onClick={() => dispatch(deleteBook(book.item_id))}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
};

Book.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default Book;
