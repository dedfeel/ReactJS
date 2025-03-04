import React from "react";

function App(props) {

  return (
    <div className="div">
        <img className="image" src={props.image} alt="" />
        <h2 className="p">{props.title}</h2>
        <p className="p">Автор:{props.autor}</p>
        <p className="p">Шыққан жылы:{props.age}</p>
    </div>
  )
}

export default App
