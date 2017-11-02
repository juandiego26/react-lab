import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import Header from '../../shared/components/Header';
import Error404 from './Error404';

function Pages() {
  return (
    <main role="application">
      <Header />

      <Switch>
        {/* Nuestro home es la lista de los post */}
        <Route
          path="/"
          exact
          component={Home}
        />
        {/* Detalle del articulo o post */}
        <Route
          path="/post/:id"
          exact
          component={Post}
        />
        {/* Perfil de usuario */}
        <Route
          path="/user/:id"
          exact
          component={Profile}
        />
        {/* Error 404 */}
        <Route component={Error404} />
      </Switch>
    </main>
  );
}

export default Pages;
