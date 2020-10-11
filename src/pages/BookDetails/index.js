import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import Loading from '../../components/Loading';

import { FullPageContainer, Container, LeftBlock, MiddleBlock, RightBlock } from './styles';

function BookDetails(props) {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchBook() {
      setLoading(true);
      await api.get(`/volumes/${props.match.params.book_id}`).then(({ data: response }) => {
        const thumbnailUrl = response.volumeInfo.imageLinks
          ? response.volumeInfo.imageLinks.thumbnail
          : 'https://books.google.com.br/googlebooks/images/no_cover_thumb.gif';

        let saleInfo;

        if (response.saleInfo.saleability === 'FOR_SALE') {
          saleInfo = {
            isForSale: true,
            price: response.saleInfo.listPrice.amount,
            currency: response.saleInfo.listPrice.currencyCode,
            priceFormatted: new Intl.NumberFormat(
              response.saleInfo.listPrice.currencyCode === 'BRL' ? 'pt-BR' : 'en-US',
              {
                style: 'currency',
                currency: response.saleInfo.listPrice.currencyCode,
              }
            ).format(response.saleInfo.listPrice.amount),
          };
        } else {
          saleInfo = {
            isForSale: false,
          };
        }

        const bookLoaded = {
          id: response.id,
          title: response.volumeInfo.title,
          subtitle: response.volumeInfo.subtitle,
          authors: response.volumeInfo.authors,
          description: response.volumeInfo.description,
          thumbnailUrl,
          infoLink: response.volumeInfo.infoLink,
          pagesAmount: response.volumeInfo.pageCount,
          averageRating: response.volumeInfo.averageRating,
          publisher: response.volumeInfo.publisher,
          publishedDate: response.volumeInfo.publishedDate,
          categories: response.volumeInfo.categories ? response.volumeInfo.categories[0].split(' / ') : [],
          saleInfo,
        };

        setBook(bookLoaded);

        setLoading(false);
      });
    }

    fetchBook();
  }, [props.match.params.book_id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <FullPageContainer>
          <Link to="/" className="back-link">
            <i className="fas fa-arrow-left"></i> Back
          </Link>
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
                <div className="stat-row">
                  <label>Average Rating:</label> <span>{book.averageRating} / 5</span>
                </div>
              </div>
            </LeftBlock>

            <MiddleBlock cover2Columns={book.saleInfo && !book.saleInfo.isForSale}>
              <div className="desc-row">
                <h2>Book Description</h2>
                <p className="description" dangerouslySetInnerHTML={{ __html: book.description }}></p>
              </div>
            </MiddleBlock>

            {book.saleInfo && book.saleInfo.isForSale && (
              <RightBlock>
                <div className="is-for-sale-label">
                  FOR SALE <i className="fas fa-check"></i>
                </div>

                <div className="book-mini-data-row">
                  <h2>{book.title}</h2>
                  <h4>{book.subtitle}</h4>
                  <div className="categories">
                    {book.categories.map((category, index) => (
                      <span key={index}>{category}</span>
                    ))}
                  </div>
                </div>

                <div className="price-row">
                  <span className="pre-price-label">You can buy this book at Google Books for</span>
                  <span className="price">{book.saleInfo.priceFormatted}</span>
                </div>

                <div className="button-row">
                  <a href={book.infoLink} target="_blank" rel="noopener noreferrer">
                    BUY THIS BOOK
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </RightBlock>
            )}
          </Container>
        </FullPageContainer>
      )}
    </>
  );
}

export default BookDetails;
