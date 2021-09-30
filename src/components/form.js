import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dipatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const createBook = (newBook) => {
    axios
      .post(
        'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KP5PI7hEkMIt6Rn76UzC/books',
        newBook
      )
      .then((res) => {
        if (res.status === 201) {
          console.log('suucess');
          dipatch(addBook(newBook));
        }
      })
      .catch((error) => error);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const book = {
      item_id: uuidv4(),
      title,
      category,
    };
    createBook(book);
    setTitle('');
  };

  return (
    <form onSubmit={submitBookToStore} className="bookForm">
      <input
        type="text"
        placeholder="title"
        value={title}
        name="title"
        required
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        placeholder="Categorie"
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Action">Action</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
        <option value="Fairy Tales">Fairy Tales</option>
      </select>
      <button className="input-submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
