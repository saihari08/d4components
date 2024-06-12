import React from 'react'

function Player(props) {
  return (
    
    <div className="playerdiv">
    <img className="playerpic" src={props.pic}></img>
    <h2>Name:{props.name}</h2>
    <h2>Age:{props.age}</h2>
    <h2>Team:{props.teamName}</h2>
  </div>
    
  )
}

export default Player
