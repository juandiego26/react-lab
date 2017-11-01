import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import Home from './Home.jsx';
import Post from './Post.jsx';
import Profile from './Profile.jsx'
import Header from '../../shared/components/Header.jsx';
import Error404 from './Error404.jsx';

function Pages() {
  return (
    <main role="application">
      <Header />

      <Switch>
        {/*Nuestro home es la lista de los post*/}
        <Route
        path="/"
        exact
        component={Home}
        />
        {/* Detalle del articulo o post*/}
        <Route
          path="/post/:id"
          exact
          component={Post}
        />
        {/* Perfil de usuario*/}
        <Route
          path="/user/:id"
          exact
          component={Profile}
        />
        {/* Error 404*/}
        <Route component={Error404}/>
      </Switch>
    </main>
  );
}

export default Pages
