import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Animals from './Categories/Animals/Animals';
import Humans from './Categories/Humans/Humans';
import Foods from './Categories/Foods/Foods';
import Smilies from './Categories/Smilies/Smilies';
import Hands from './Categories/Hands/Hands';

import Sports from './Categories/Sports/Sports';
import Symbols from './Categories/Symbols/Symbols';
import Travel from './Categories/Travel/Travel';
import { Route } from "react-router-dom";




function App(){
  return (
    <div>
      <Header />


      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/animals">
        <Animals />
      </Route>

      <Route exact path="/humans">
        <Humans />
      </Route>

      <Route exact path="/smilies">
        <Smilies />
      </Route>

      <Route exact path="/foods">
        <Foods />
      </Route>

      <Route exact path="/sports">
        <Sports />
      </Route>

      <Route exact path="/travel">
        <Travel />
      </Route>



      <Route exact path="/symbols">
        <Symbols />
      </Route>

      <Route exact path="/hands">
        <Hands />
      </Route>


      <Footer />
    </div>
  )
}


export default App;
