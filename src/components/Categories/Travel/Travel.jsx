import React from 'react';
import Cards from '../Cards';
import jokes from './cardContents';


function createCards(i){
  return(
    <Cards
      key={i.key}
      name={i.name}
      img={i.img}
      jokecontent={i.jokecontent}
    />
  );
}

function Travel(){
  return (
    <div>
      <div className="container">
          {jokes.map(createCards)}
      </div>
    </div>
  )
}


export default Travel;
