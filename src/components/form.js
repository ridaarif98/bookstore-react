import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createBook } from '../redux/api/api';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const submitBookToStore = (e) => {
    e.preventDefault();
    const book = {
      item_id: uuidv4(),
      title,
      category,
    };
    createBook(book, dispatch);
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
