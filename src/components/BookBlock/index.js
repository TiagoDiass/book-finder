import React from 'react';

import { BookBlock as BookBlockStyled, DetailsButton } from './styles';

const BookBlock = (props) => {
  const { thumbnailUrl, title, authors, description } = props.book;

  return (
    <BookBlockStyled>
      <div className="thumbnail">
        <img src={thumbnailUrl} alt={`${title} - Thumbnail`} />
      </div>
      <div className="book-data">
        <div className="main-info">
          <h3>{title}</h3>
          <h5>{authors ? authors.join(', ') : ''}</h5>
        </div>
        <p>{description}</p>
        <div className="details">
          <DetailsButton>
            DETAILS <i className="fas fa-info-circle"></i>
          </DetailsButton>
        </div>
      </div>
    </BookBlockStyled>
  );
};

export default BookBlock;
