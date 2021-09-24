import './App.css';
import  { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Booker from './components/Booker';
import About from './components/pages/About';
import PlanetList from './components/PlanetList';
import EventList from './components/EventList';
import { PlanetProvider } from './components/PlanetContext';
import { EventProvider } from './components/EventContext';
import TripList from './components/TripList';
import { TripProvider } from './components/TripContext';
import Footer from './components/layout/Footer';

const App = props=> {
  return (
    <div className="App">
      <Router>
        <PlanetProvider>
          <EventProvider>
            <TripProvider>
              <Header />
              <div className="container">
                <div id="content">
                  <Route exact path="/">
                    <PlanetList />
                    <Booker />
                    {/* <EventList />
                    <TripList /> */}
                  </Route>
                  <Route path="/top-five">
                    
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                </div>
              </div>
              <Footer/>
            </TripProvider>
          </EventProvider>
        </PlanetProvider>
      </Router>
    </div>
  );
}

export default App;