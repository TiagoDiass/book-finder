import React, { useState } from 'react';

import api from '../../services/api';

// Styled components
import { InputSection, SubmitButton, BooksSection } from './styles';
import BookBlock from '../../components/BookBlock';

function Main() {
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleInput(event) {
    setQuery(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (!query) {
      setError('You must type something!');
      setTimeout(() => {
        setError('');
      }, 3000);
      return;
    }

    setLoading(true);
    await api.get(`/volumes?q=${query}`).then((response) => {
      const books = response.data.items.map((book) => {
        const thumbnailUrl = book.volumeInfo.imageLinks
          ? book.volumeInfo.imageLinks.thumbnail
          : 'https://books.google.com.br/googlebooks/images/no_cover_thumb.gif';

        return {
          title: book.volumeInfo.title,
          authors: book.volumeInfo.authors,
          description: book.volumeInfo.description,
          thumbnailUrl,
          infoLink: book.volumeInfo.infoLink,
        };
      });

      setBooks(books);
      setLoading(false);
    });
  }

  return (
    <>
      <InputSection>
        <div className="container">
          <h1 className="logo">
            <span className="logo-blue">Book</span>Finder
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="label">
              <label htmlFor="book">Type an author or book name...</label>
            </div>

            <div className="input">
              <input
                onChange={handleInput}
                value={query}
                autoComplete="off"
                type="text"
                id="book"
                placeholder="Author or book name"
              />

              <SubmitButton loading={loading ? 'loading' : undefined} type="submit">
                {loading ? <i className="fas fa-spinner"></i> : <i className="fas fa-search"></i>}
              </SubmitButton>
            </div>

            {error && (
              <div className="error">
                <span>{error}</span>
              </div>
            )}
          </form>
        </div>
      </InputSection>
      <BooksSection>
        <div className="container">
          {!books.length ? (
            <h1 className="no-books">No books yet, you need to search for some book</h1>
          ) : (
            books.map((book, index) => <BookBlock book={book} key={index} />)
          )}
        </div>
      </BooksSection>
    </>
  );
}

export default Main;
