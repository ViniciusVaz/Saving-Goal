import * as React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import routes from './config/routes'

import './style/main.scss'

const App: React.FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Switch>
        { routes.map(route => <Route {...route}/>) }
      </Switch>
    </BrowserRouter>
  )
};

export default App;
