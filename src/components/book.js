import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { removeBook }  from '../redux/books/books';

const Book = ({books}) => {
  const dispatch = useDispatch();
  const deleteBook = (e) => {
    const btnId = e.target.id;
    console.log(btnId);
    axios.delete(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KP5PI7hEkMIt6Rn76UzC/books/${btnId}`,
    ).then((res)=>{
      if(res.status===201) {
        dispatch(removeBook(btnId));
      }
    });
  };

  return (
    <ul className="allBooks">
      
        {books.map((book)=>(
        <li>
          <span>{book.title} {book.category}</span>
          <button type="button" id={book.item_id} onClick={deleteBook}>Remove</button>
        </li>
        ))}
      
    </ul>
    // <li>
    //   <span>{title}</span>
    //   <span>{author}</span>
    //   <button type="button" onClick={rmBook}>
    //     Remove
    //   </button>
    // </li>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rmBook: PropTypes.func.isRequired,
};

export default Book;
