import React, { useState } from "react";
import PropTypes from 'prop-types';

const Book= (props) => {
  const {title, author} = props
  return(
   <li>
       <span>{title}</span>
       <span>{author}</span>
       <button type="button">Remove</button>
   </li>
  );
}

Book.propTypes ={
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Book;