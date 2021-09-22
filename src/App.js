import './App.css';
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Booker from './components/Booker';
import About from './components/pages/About';

const App = props=> {
  return (
    <>
    <div className="container">
      <Router>
        <Header />
        <Route exact path="/">
          <Booker>

          </Booker>
        </Route>
        <Route path="/top-five">

        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Router>
    </div>
    
    <div className="planets-segment">
      <button onClick={() => {
        //
      }}>mount</button>
      <div className="planets-card-container">
        <div className="item"></div>
         </div>
      </div>
    </>
  );
}

export default App;