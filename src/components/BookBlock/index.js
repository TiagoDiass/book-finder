import React from 'react';

import { BookBlock as BookBlockStyled } from './styles';

const BookBlock = (props) => {
  const { thumbnailUrl, title, author, description } = props.book;

  return (
    <BookBlockStyled>
      <div className="thumbnail">
        <img src={thumbnailUrl} alt={`${title} - Thumbnail`} />
      </div>
      <div className="book-data">
        <h3>{title}</h3>
        <h5>{author}</h5>
        <p>{description}</p>
      </div>
    </BookBlockStyled>
  );
};

export default BookBlock;
