import React from "react";
import PropTypes from 'prop-types';

const Book= (props) => {
  const {title, author, removeBook} = props
  return(
   <li>
       <span>{title}</span>
       <span>{author}</span>
       <button type="button" onClick={removeBook}>Remove</button>
   </li>
  );
}

Book.propTypes ={
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default Book;