import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import Loading from '../../components/Loading';

import { FullPageContainer, Container, LeftBlock } from './styles';

function BookDetails(props) {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchBook() {
      setLoading(true);
      await api.get(`/volumes/${props.match.params.book_id}`).then(({ data: response }) => {
        console.log(response);

        const thumbnailUrl = response.volumeInfo.imageLinks
          ? response.volumeInfo.imageLinks.thumbnail
          : 'https://books.google.com.br/googlebooks/images/no_cover_thumb.gif';

        const bookLoaded = {
          id: response.id,
          title: response.volumeInfo.title,
          authors: response.volumeInfo.authors,
          description: response.volumeInfo.description,
          thumbnailUrl,
          infoLink: response.volumeInfo.infoLink,
          pagesAmount: response.volumeInfo.pageCount,
          averageRating: response.volumeInfo.averageRating,
          publisher: response.volumeInfo.publisher,
          publishedDate: response.volumeInfo.publishedDate,
        };

        setBook(bookLoaded);
        setLoading(false);
      });
    }

    fetchBook();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <FullPageContainer>
          <Container>
            <LeftBlock className="book-image">
              <div className="title-and-image">
                <img src={book.thumbnailUrl} alt={`${book.title} Cover`} />
                <h1>{book.title}</h1>
              </div>

              <div className="stats">
                <div className="stat-row">
                  <label>Author(s):</label> <span>{book.authors ? book.authors.join(', ') : 'UNKNOWN AUTHOR'}</span>
                </div>
                <div className="stat-row">
                  <label>Publisher:</label> <span>{book.publisher}</span>
                </div>
                <div className="stat-row">
                  <label>Published in:</label> <span>{book.publishedDate}</span>
                </div>
                <div className="stat-row">
                  <label>Pages amount:</label> <span>{book.pagesAmount}</span>
                </div>
                {/* <div dangerouslySetInnerHTML={{ __html: book.description }}></div> */}
              </div>
            </LeftBlock>
          </Container>
        </FullPageContainer>
      )}
    </>
  );
}

export default BookDetails;
