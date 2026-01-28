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
      <h1>Hello React API</h1>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}><h1>{actor.name}</h1></li>
        ))}
      </ul>
    </>
  )
}

export default App
