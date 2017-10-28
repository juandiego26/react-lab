import http from 'http';
import React from 'react';
import { renderToString } from 'react-dom/server';

function requestHandler(request, response) {
  const html = renderToString (
    <div>
      <h1>Hola</h1>
    </div>
  );

  response.write(html);
  response.end();
}
const server = http.createServer(requestHandler)

server.listen(3000);
