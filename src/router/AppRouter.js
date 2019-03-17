import React from 'react';
import {
  Router, Route, Switch,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ConnectedPrivateRoute from './PrivateRoute';
import ConnectedPublicRoute from './PublicRoute';
import AddFriends from '../components/AddFriends/AddFriends';
import Budgets from '../components/BudgetsPage/BudgetsPage';
import Feed from '../components/FeedPage/FeedPage';
import Home from '../components/HomePage/HomePage';
import Login from '../components/LoginPage/LoginPage';
import NotFound from '../components/NotFoundPage/NotFoundPage';
import Settings from '../components/SettingsPage/SettingsPage';

const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <ConnectedPublicRoute exact path="/" component={Login} />
      <ConnectedPrivateRoute exact path="/home" component={Home} />
      <ConnectedPrivateRoute exact path="/friends" component={AddFriends} />
      <ConnectedPrivateRoute exact path="/budgets" component={Budgets} />
      <ConnectedPrivateRoute exact path="/feed" component={Feed} />
      <ConnectedPrivateRoute exact path="/settings" component={Settings} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
export default AppRouter;
