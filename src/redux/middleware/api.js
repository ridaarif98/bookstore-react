// import axios from 'axios';
// import { addBook, removeBook } from '../books/books';

// const GET_BOOK_ERROR = 'ERROR';
// export const base_url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KP5PI7hEkMIt6Rn76UzC/books/';

// export const postBook = async( newBook, dispatch) => {
//   try{
//     const {bookData} = await axios.post(base_url, newBook, {
//       headers: {
//         'Content-Type': 'application/json;charset=UTF-8',
//       },
//     });
//     if(bookData==='Created') dispatch(addBook(newBook));
//   }catch (error) {
//     return dispatch({ type: GET_BOOK_ERROR, payload: error });
//   }
// };

// export const deleteBook = async(id, dispatch) => {
//    const {bookData} = await axios.delete(`${base_url}${id}`);
//    if( bookData === 'The book was deleted successfully!') {
//        dispatch(removeBook({id}));
//    }
// };

// export const getBook = async() => {
//   const {getBook} = await axios.get(base_url);
//   console.log({getBook});
// };