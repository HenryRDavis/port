import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import './App.css';

function App() {
  
  return (
    <main>
      <div>
        <header>
        <NavLink to='/about'>
          About
        </NavLink>

        <NavLink to='/contact'>
          Contact
        </NavLink>
      </header>

         <Home/>

        <Switch>

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
