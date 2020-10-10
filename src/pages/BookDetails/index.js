import React, { useState } from 'react';

import Loading from '../../components/Loading';

function BookDetails(props) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          CARREGADO <h1>MANOO</h1>{' '}
        </div>
      )}
    </>
  );
}

export default BookDetails;
