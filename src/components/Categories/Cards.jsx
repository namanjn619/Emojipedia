import React from 'react';

function Cards(props){
  return(
    <div>
        <div className="card">
          <div className="upper-card">
            <h1>{props.name}</h1>
            <img className="circular-img" src ={props.img} alt = "joke_image" />
          </div>
          <div className="lower-card">
            <p>{props.jokecontent}</p>
          </div>
        </div>
    </div>
  )
}


export default Cards;
