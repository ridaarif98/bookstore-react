import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './stylesheets/App.css';
import Books from './components/books';
import Categries from './components/categories';
import Navbar from './components/navBar';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Switch>
        <Route path="/">
          <div className="App">
            <Route exact path="/">
              <Books />
            </Route>
            <Route exact path="/categories">
              <Categries />
            </Route>
          </div>
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
