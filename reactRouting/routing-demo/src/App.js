import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Switch, Route, Link} from 'react-router-dom';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>welcome to the party</h1>

        <Switch>

          <Route exact path = "/">
            <h2>Welcome to the homepage!</h2>
            <Link to="/about">Go to about page</Link> | <Link to="/">Go to homepage</Link>
          </Route>

          <Route exact path = "/about">
            <h1>This is supposed to only show on /about route</h1>
          </Route>

          <Route exact path = "/info/:id">
            <Info></Info>
          </Route>

        </Switch>

       


      </BrowserRouter>
     
    </div>
  );
}

export default App;
