import axios from 'axios';
import { addBook, removeBook, setBooks } from '../books/books';

export const loadBooks = async (dispatch) => {
  const booksGet = await axios
    .get(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KP5PI7hEkMIt6Rn76UzC/books',
    )
    .then((res) => res.data);
  dispatch(setBooks(booksGet));
};

export const createBook = (newBook, dispatch) => {
  axios
    .post(
      'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KP5PI7hEkMIt6Rn76UzC/books',
      newBook,
    )
    .then((res) => {
      if (res.status === 201) {
        dispatch(addBook(newBook));
      }
    })
    .catch((error) => error);
};

export const deleteBook = (btnId, dispatch) => {
  axios
    .delete(
      `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KP5PI7hEkMIt6Rn76UzC/books/${btnId}`,
    )
    .then((res) => {
      if (res.status === 201) {
        dispatch(removeBook(btnId));
      }
    }).catch((error) => error);
};
