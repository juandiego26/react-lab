import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Pages from './pages/containers/Page';

hydrate(
  <BrowserRouter>
    <Pages />
  </BrowserRouter>,
  document.getElementById('render-target'),
);
