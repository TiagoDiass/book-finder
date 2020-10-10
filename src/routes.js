import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import BookDetails from './pages/BookDetails';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/books/:book_id" component={BookDetails} />
      </Switch>
    </BrowserRouter>
  );
}
