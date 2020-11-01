import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Home } from './containers/home';
import { Upload } from './components/upload';
import { SearchBar } from './components/searchBar';
import { Profile } from './components/profile';
import { Feed } from './components/feed';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
  return (
    //Registering the routes
    <Router>
      <Switch>
        <Route exact path='/' >
          <Redirect to='/home' />
        </Route>
        <Route path='/home' component={Home} />
        <Route path='/upload' component={Upload} />
        <Route path='/searchBar' component={SearchBar} />
        <Route path='/feed' component={Feed} />
        <Route path='/profile' component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
