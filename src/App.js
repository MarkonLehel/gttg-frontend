import './App.css';
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Booker from './components/Booker';
import About from './components/pages/About';
import { useState } from 'react';

const App = props=> {
  const [isVisible, setIsVisible] = useState(false);
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
        setIsVisible(v => !v);
        //
      }}>mount</button>
      <div className="planets-card-container">
        {isVisible ? <div className="item"></div> : ''}
         </div>
      </div>
    </>
  );
}

export default App;