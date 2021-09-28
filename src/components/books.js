import React, { useState } from 'react';
import Form from './form';
import Book from './book';

const Books = () => {
  if (JSON.parse(localStorage.getItem('storeBook')) === null) {
    const initialBooks = [
      {
        title: 'Book 1',
        author: 'Author 1',
      },
      {
        title: 'Book 2',
        author: 'Author 2',
      },
      {
        title: 'Book 3',
        author: 'Author 3',
      },
    ];
    localStorage.setItem('storeBook', JSON.stringify(initialBooks));
  }

  const [bookInfo, setInfo] = useState(
    JSON.parse(localStorage.getItem('storeBook'))
  );

  const addBooks = (book) => {
    const newBook = bookInfo;
    newBook.push(book);
    localStorage.setItem('storeBook', JSON.stringify(newBook));
    setInfo(JSON.parse(localStorage.getItem('storeBook')));
  };

  const removeBook = (book) => {
    const updateBookList = bookInfo.filter((bkInfo) => bkInfo !== book);
    localStorage.setItem('storeBook', JSON.stringify(updateBookList));
    setInfo(JSON.parse(localStorage.getItem('storeBook')));
  };

  const displayBooks = bookInfo.map((bk) => (
    <Book
      title={bk.title}
      author={bk.author}
      key={bookInfo.indexOf(bk)}
      removeBook={() => removeBook(bk)}
    />
  ));

  return (
    <div>
      <ul className="allBooks">{displayBooks}</ul>
      <Form addBooks={addBooks} />
    </div>
  );
};

export default Books;
