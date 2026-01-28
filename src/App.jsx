import { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const [actors, setActors] = useState(0);
  const listaAttori = "https://lanciweb.github.io/demo/api/actors/";
  const listaAttrici = "https://lanciweb.github.io/demo/api/actresses/";
  const [lists, setLists] = useState(listaAttori);

  function getData(_list) {
    axios.get(_list).then((results) => {
      console.log("I dati sono stati richiesti");
      setActors(results.data)
      console.log(actors);
    }).catch(error => console.log(error.message))
  }

  useEffect(() => (getData(lists)), [lists]);
  return (
    <>
      <div className="boxed ">
        <h1>Hello React API</h1>
        <button onClick={() => (setLists(listaAttori))}>Carica Attori</button>
        <button onClick={() => (setLists(listaAttrici))}>Carica Attrici</button>
        <div className="card_container">
          {actors.map((actor) => {
            return (
              <div className='card' key={actor.id}>
                <h2>{actor.name}</h2>
                <img src={actor.image} alt="" />
                <p>{actor.birth_year}</p>
                <p>{actor.nationality}</p>
                <span>{actor.biography}</span>
                <h5>{actor.awards}</h5>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
