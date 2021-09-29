import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ addBook }) => {
  const [book, setBook] = useState({});

  const onChange = (e) => {
    setBook({ ...book, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = (e) => {
    addBook(book);
    book.title = '';
    book.author = '';
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="bookForm">
      <input
        type="text"
        placeholder="title"
        value={book.title}
        name="title"
        onChange={onChange}
      />
      <input
        type="text"
        placeholder="author"
        value={book.author}
        name="author"
        onChange={onChange}
      />
      <button className="input-submit" type="submit">
        Submit
      </button>
    </form>
  );
};

Form.propTypes = {
  addBook: PropTypes.func.isRequired,
};
export default Form;
