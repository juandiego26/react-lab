import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { addLocaleData, IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

import Pages from './pages/containers/Page';
import store from './store';

import messages from './messages.json';

addLocaleData([...en, ...es]);

const locale = navigator.languages.indexOf('es') >= 0 ? 'es' : 'en';

hydrate(
  <Provider store={store}>
    <IntlProvider locale={locale} messages={messages[locale]}>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </IntlProvider>
  </Provider>,
  document.getElementById('render-target'),
);
