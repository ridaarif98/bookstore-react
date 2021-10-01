import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/api/api';
import '../circle.css';

const Book = ({ books }) => {
  const dispatch = useDispatch();

  return (
    <ul className="allBooks">
      {books.map((book) => (
        <li key={book.item_id} className="book-panel">
          <div className="firstDiv">
          <span className="bookcategory">
            {book.category}
          </span>
          <h3>
            {book.title}
          </h3>
          <span className="bookAuthor">
            {book.author}
          </span>
          <span className="bookButtons">
          <button type="button" id={book.item_id} className="bookBtn">
            Comment
          </button>
          <button type="button" id={book.item_id} className="bookBtn" onClick={() => dispatch(deleteBook(book.item_id))}>
            Remove
          </button>
          <button type="button" id={book.item_id} className="bookBtn lastBtn">
            Edit
          </button>
          </span>
          </div>
          
          <svg viewBox='0 0 100 100'>
            <circle cx='50' cy='50' r='45' id='gray'/>
            <circle cx='50' cy='50' r='45' id='green'/>
          </svg>
          
        </li>
      ))}
    </ul>
  );
};

Book.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default Book;
