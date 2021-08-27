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

function Animals(){
  return (
    <div>
      <div className="div-1">
      </div>
      <div className="container">
          {jokes.map(createCards)}
      </div>
    </div>
  )
}


export default Animals;
