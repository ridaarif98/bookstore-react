import { Route, Switch } from "react-router-dom";
import './App.css';
import Books from './components/books';
import Categries from './components/categories';
import Navbar from "./components/navBar";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
