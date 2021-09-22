import './App.css';
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Booker from './components/Booker';
import About from './components/pages/About';
import { useState } from 'react';
import {useTransition, animated} from 'react-spring';
import planet0 from './images/small/3_tatooine_100x100.png';

const App = props=> {
  // const [isVisible, setIsVisible] = useState(false);
  const [items, setItems] = useState([]);
  const transition = useTransition(items, {
    from: {x: -100, y: 600, opacity: 0},
    enter: item => (next) => ( // change enter from object to a callback
      next({x: 0, y: item.y, opacity: 1, delay: item.delay, backgroundImage: `url(${planet0})`})
    ),
    leave: {x: 100, y: 600, opacity: 0},

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
        setItems(v => v.length ? [] : [
          {y: -100, delay: 200},
          {y: 0, delay: 400},
          {y: 100, delay: 600},
        ]);
      }}>{items.length ? 'unmount' : 'mount'}</button>
      <div className="planets-card-container">
        {transition((style, item) =>
            item ? <animated.div style={style} className="item">
              {/* <div className="img"></div> */}
                 <img src={planet0} alt="planet0" />
                 {/* <animated.img src={planet0} alt={planet0} style={style} /> */}
            </animated.div> : ''
        )}
         </div>
      </div>
    </>
  );
}

export default App;