import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author, rmBook } = props;
  return (
    <li>
      <span>{title}</span>
      <span>{author}</span>
      <button type="button" onClick={rmBook}>
        Remove
      </button>
    </li>
  );
};

Book.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rmBook: PropTypes.func.isRequired,
};

export default Book;
