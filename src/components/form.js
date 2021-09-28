import React, { useState } from "react";
import PropTypes from 'prop-types';

const Form = ({addBooks}) => {
  const [book, setBook] = useState({});

  const onChange = e => {
    setBook({...book,[e.target.name] : [e.target.value]});
  };

  const handleSubmit = e => {
    addBooks(book);
    e.preventDefault();
  };

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="title" value={book.title} name="title" onChange={onChange}/>
      <input type="text" placeholder="author" value={book.author} name="author" onChange={onChange}/>
      <button className="input-submit" type="submit">Submit</button> 
    </form>
  );
};

Form.propTypes = {
  addBooks: PropTypes.func.isRequired,
};
export default Form;