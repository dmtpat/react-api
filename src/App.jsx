import { useState, useEffect } from 'react';
import axios from "axios";

import Card from "./Card.components"

function App() {
  const [actors, setActors] = useState([]);
  const listaAttori = "https://lanciweb.github.io/demo/api/actors/";
  const listaAttrici = "https://lanciweb.github.io/demo/api/actresses/";
  const [lists, setLists] = useState(listaAttori);
  const [listShowed, setListShowed] = useState(1);

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
        <button onClick={() => { setLists(listaAttori); setListShowed(1) }}>Carica Attori</button>
        <button onClick={() => { setLists(listaAttrici); setListShowed(1) }}>Carica Attrici</button >
        <button onClick={() => { setLists(listaAttrici); setListShowed(2) }}> Carica Attori e Attrici</button >
        <div className="card_container">
          {actors.map((actor) => {
            return (
              <Card actor={actor} />
            )
          })}
        </div>
        <div className="card_container">
          {actors.map((actor) => {
            return (
              <Card actor={actor} />
            )
          })}
        </div>
      </div >
    </>
  )
}

export default App
