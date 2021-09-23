import './App.css';
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Booker from './components/Booker';
import About from './components/pages/About';
import { useState } from 'react';
import {useTransition, animated} from 'react-spring';
import planet0 from './images/small/0_coruscant_100x100.png';
import planet1 from './images/small/1_hoth_100x100.png';
import planet2 from './images/small/2_kamino_100x100.png';
import planet3 from './images/small/3_tatooine_100x100.png';
import planet4 from './images/small/4_endor_100x100.png';

const App = props=> {
  const planets = [planet0, planet1, planet2, planet3, planet4]
  // let index = -1;
  // const [isVisible, setIsVisible] = useState(false);
  const [items, setItems] = useState([]);
  const transition = useTransition(items, {
    from: {x: -100, y: 800, opacity: 0},
    enter: item => (next) => ( // change enter from object to a callback
      // next({x: 0, y: item.y, opacity: 1, delay: item.delay, backgroundImage: `url(${planet0})`})
      next({x: 0, y: item.y, opacity: 1, delay: item.delay, key: item.key})
    ),
    leave: {x: 200, y: 600, opacity: 0},

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
          {y: -10, delay: 100, key: 0},
          {y: -5, delay: 200, key: 1},
          {y: 0, delay: 300, key: 2},
          {y: 5, delay: 400, key: 3},
          {y: 10, delay: 500, key: 4}
        ]);
        // console.log(index);
      }}>{items.length ? 'unmount' : 'mount'}</button>
      
      <div className="planets-card-container">
        {transition((style, item, key) =>
            item ? <animated.div key={key} style={style} className="item">
              {/* <div className="img"></div> */}
                 <img src={planets[0]} alt="planet0" />
                 
                 {/* <animated.img src={planet0} alt={planet0} style={style} /> */}
            </animated.div> : ''
        )}
         </div>
      </div>
    </>
  );
}

export default App;