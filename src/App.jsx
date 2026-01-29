import { useState, useEffect } from 'react';
import axios from "axios";

import CardContainer from './CardContainer.components';
import Card from "./Card.components"

function App() {
  const [actors, setActors] = useState([]);
  const [actresses, setActresses] = useState([]);
  const [list, setList] = useState(1);
  const listaAttori = "https://lanciweb.github.io/demo/api/actors/";
  const listaAttrici = "https://lanciweb.github.io/demo/api/actresses/";

  const [twoLists, setTwoLists] = useState(false);

  function getData() {
    axios.get(listaAttori).then((results) => {
      console.log("I dati Attori");
      setActors(results.data);
      console.log(actors);
    }).catch(error => console.log(error.message));
    axios.get(listaAttrici).then((results) => {
      console.log("I dati Attrici");
      setActresses(results.data);
      console.log(actresses);
    }).catch(error => console.log(error.message));
  }

  useEffect(getData, []);

  function twoShowed() {
    return (
      <>
        <CardContainer actors={actors} lists={true} tipe={"male"} />
        <CardContainer actors={actresses} lists={true} tipe={"female"} />
      </>)
  }

  function actorActresses(_list) {
    if (_list == 1) {
      return <CardContainer actors={actors} lists={false} tipe={"male"} />
    } else {
      return <CardContainer actors={actresses} lists={false} tipe={"female"} />
    }
  }

  return (
    <>
      <div className="boxed">
        <h1>Hello React API</h1>
        <button onClick={() => { setTwoLists(false); setList(1) }}>Carica Attori</button>
        <button onClick={() => { setTwoLists(false); setList(2) }}>Carica Attrici</button >
        <button onClick={() => { setTwoLists(true) }}> Carica Attori e Attrici</button >
        <div className='flex'>

          {
            twoLists ? twoShowed() : actorActresses(list)
          }

        </div>
      </div >
    </>
  )
}

export default App
