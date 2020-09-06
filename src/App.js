import React from 'react';
import {Route, Switch} from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';

function App() {
  return (
      <>
          <Switch>
              <Route path="/" component={PostListPage} exact/>
              <Route path="/:id" component={PostPage} exact/>
          </Switch>
      </>
  );
}

export default App;
