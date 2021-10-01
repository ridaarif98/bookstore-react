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
            <span className="bookcategory">{book.category}</span>
            <h3>{book.title}</h3>
            <span className="bookAuthor">Author Undefined</span>
            <span className="bookButtons">
              <button type="button" id={book.item_id} className="bookBtn">
                Comment
              </button>
              <button
                type="button"
                id={book.item_id}
                className="bookBtn"
                onClick={() => dispatch(deleteBook(book.item_id))}
              >
                Remove
              </button>
              <button
                type="button"
                id={book.item_id}
                className="bookBtn lastBtn"
              >
                Edit
              </button>
            </span>
          </div>
          <div className="secondDiv">
            <svg viewBox="0 0 100 100" className="circle">
              <circle cx="50" cy="50" r="45" id="gray" />
              <circle cx="50" cy="50" r="45" id="green" />
            </svg>

            <div className="progress">
              <h2>64%</h2>
              <span>Completed</span>
            </div>

            <div className="chapter">
              <h4>CURRENT CHAPTER</h4>
              <span>Introduction</span>
              <button type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        </li>
      ))}
      <div class="Line"></div>
    </ul>
  );
};

Book.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default Book;
