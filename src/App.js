import './App.css';
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Booker from './components/Booker';
import About from './components/pages/About';
import { useState } from 'react';
import {useTransition, animated} from 'react-spring';

const App = props=> {
  const [isVisible, setIsVisible] = useState(false);
  const transition = useTransition(isVisible, {
    
  });
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
      }}>{isVisible ? 'unmount' : 'mount'}</button>
      <div className="planets-card-container">
        {/* {isVisible ? <div className="item"></div> : ''} */}
        {transition((style, item) => //callback with 2 arg = check item and animate with style
            item ? <animated.div style={style} className="item"></animated.div> : ''
        )}
         </div>
      </div>
    </>
  );
}

export default App;