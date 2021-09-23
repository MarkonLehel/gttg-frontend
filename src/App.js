import './App.css';
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Booker from './components/Booker';
import About from './components/pages/About';
import PlanetList from './components/PlanetList';

const App = props=> {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="container">
          <div id="content">
            <Route exact path="/">
              <PlanetList />
              <Booker />
            </Route>
            <Route path="/top-five">
              
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;