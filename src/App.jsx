import { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const [actors, setActors] = useState(0);
  const listaAttori = "https://lanciweb.github.io/demo/api/actors/";
  const listaAttrici = "https://lanciweb.github.io/demo/api/actresses/";

  function getData() {
    axios.get(listaAttori).then((results) => {
      setActors(results.data)
    }
    )
  }

  useEffect(getData, []);
  return (
    <>
      <div className="boxed ">
        <h1>Hello React API</h1>
        <div className="card_container">
          {actors.map((actor) => (
            <div className='card' key={actor.id}>
              <h2>{actor.name}</h2>
              <img src={actor.image} alt="" />
              <p>{actor.birth_year}</p>
              <p>{actor.nationality}</p>
              <span>{actor.biography}</span>
              <h5>{actor.awards}</h5>

            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
