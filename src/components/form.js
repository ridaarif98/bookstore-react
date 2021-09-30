import React, { useState } from 'react';
//import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addBook } from '../redux/books/books';

// const Form = ({ addBook }) => {
//   const [book, setBook] = useState({});

//   const onChange = (e) => {
//     setBook({ ...book, [e.target.name]: [e.target.value] });
//   };

//   const handleSubmit = (e) => {
//     addBook(book);
//     book.title = '';
//     book.author = '';
//     e.preventDefault();
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bookForm">
//       <input
//         type="text"
//         placeholder="title"
//         value={book.title}
//         name="title"
//         onChange={onChange}
//       />
//       <input
//         type="text"
//         placeholder="author"
//         value={book.author}
//         name="author"
//         onChange={onChange}
//       />
//       <button className="input-submit" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// };

// Form.propTypes = {
//   addBook: PropTypes.func.isRequired,
// };

const Form = () => {
  const dipatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const createBook = (newBook) => {
    axios.post(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KP5PI7hEkMIt6Rn76UzC/books',
      newBook,
    ).then((res)=>{
      if(res.status===201) {
        console.log("suucess");
        dipatch(addBook(newBook));
      }
    }).catch((error)=>error);
  }

  const submitBookToStore = (e) => {
    e.preventDefault();
    const book = {
      item_id: uuidv4(),
      title,
      category,
    };
    createBook(book);
    setTitle('');
  }

  return(
        <form onSubmit={submitBookToStore} className="bookForm">
      <input
        type="text"
        placeholder="title"
        value={title}
        name="title"
        onChange={(e)=> setTitle(e.target.value)}
      />
      <select
          placeholder="Categorie"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
      <button className="input-submit" type="submit">
        Submit
      </button>
    </form>

  );
}
export default Form;
