import React from 'react';
import { NavLink } from "react-router-dom";

function Header(){
  return(
    <div>
      <div className="outer-header">
        <div className="inner-header">
          <h1>WIKI-EMOJI</h1>
        </div>
      </div>
      <div className="categories">
        <div className="nav-buttons">
        <NavLink  to="/"><button>Home</button></NavLink>
        <NavLink  to="/animals"><button>🐕 Animals</button></NavLink>
        <NavLink  to="/humans"><button>👨‍💼 Humans</button></NavLink>
        <NavLink  to="/smilies"><button>😀 Smilies</button></NavLink>
        <NavLink  to="/foods"><button>🍔 Foods</button></NavLink>
        <NavLink  to="/sports"><button>⚽ Sports</button></NavLink>
        <NavLink  to="/travel"><button>🚀 Travels</button></NavLink>
        <NavLink  to="/symbols"><button>❌ Symbols</button></NavLink>
        <NavLink  to="/hands"><button>🖖 Hand</button></NavLink>
        </div>
      </div>
    </div>
  )
}


export default Header;
