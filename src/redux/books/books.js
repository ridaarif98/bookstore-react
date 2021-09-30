const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const SET_BOOKS = 'bookStore/books/SET_BOOKS';

// if (JSON.parse(localStorage.getItem('storeBook')) === null) {
//   localStorage.setItem('storeBook', JSON.stringify([]));
// }

// const initialState = JSON.parse(localStorage.getItem('storeBook'));
const initialState = [];


export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  book,
});

export const setBooks = (payload) => ({
  type: SET_BOOKS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book.id);
    case SET_BOOKS:
      const savedBooks = Object.entries(action.payload).map(([key, value]) => ({
        item_id: key,
        title: value[0].title,
        category: value[0].category,
      }));
      return savedBooks;
    default:
      return state;
  }
};

export default reducer;
