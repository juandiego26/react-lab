import http from 'http';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';

import messages from './messages.json';

import Layout from './pages/components/Layout';
import Pages from './pages/containers/Page';
import store from './store';


const domain = process.env.NODE_ENV === 'production'
  ? 'https://juan-reactlab-sfs.now.sh'
  : 'http://localhost:3001';

function requestHandler(request, response) {
  const locale = request.headers['accept-language'].indexOf('es') >= 0 ? 'es' : 'en';
  const context = {};

  const html = ReactDOMServer.renderToStaticMarkup(
    <Provider store={store}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        <StaticRouter location={request.url} context={context}>
          <Pages />
        </StaticRouter>
      </IntlProvider>
    </Provider>,
  );

  response.setHeader('Content-Type', 'text/html');

  if (context.url) {
    response.writeHead(301, {
      Location: context.url,
    });
    response.end();
  }

  response.write(
    ReactDOMServer.renderToStaticMarkup(
      <Layout
        content={html}
        domain={domain}
      />,
    ),
  );
  response.end();
}

const server = http.createServer(requestHandler);

server.listen(3000);
