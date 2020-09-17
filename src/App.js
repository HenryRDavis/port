import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import './App.css';
import Home from './Home';

function App() {
  
  return (
    <main>
      <div>
        <NavLink to='/about'>
          <P>
            About
          </P>
        </NavLink>

        <NavLink to='/contact'>
          <P>Contact</P>
        </NavLink>
        <Switch>

        <Route path='/'>
          <Home>
            
          </Home>
        </Route>

        <Route path='/about'>
          <About>

          </About>
        </Route>

        <Route path='/contact'>
          <Contact>

          </Contact>
        </Route>

        </Switch>
      </div>

    </main>
  );
}

export default App;
