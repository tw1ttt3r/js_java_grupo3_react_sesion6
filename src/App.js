import { useState } from 'react';
import './App.css';

function App() {

  const api = "https://swapi.dev/api";

  const [data, setData] = useState(null);
  const [complete, setComplete] = useState(false);

  const obtenDatos = () => {
    setData("invocada");
    fetch(`${api}/people`)
      //.then((res) => res.json())
      .then((res) => {
        setData("llegaron");
        return res.json()
      })
      .then(response => {
        setData("convertidos");
        console.log(response);
        setData({...response});
        setComplete(true);
      })
      .catch((e) => setData("error"))
      .finally(() => console.log("termino la llamada"));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>USO DE APIS (SWAPI)</h1>
        {data === null && <p>La llamada no ha sido invocada</p>}
        {data === "invocada" && <p>La llamada ha sido invocada</p>}
        {data === "llegaron" && <p>La llamada ha sido invocada y los datos llegaron</p>}
        {data === "convertidos" && <p>La llamada ha sido invocada y los datos fueron convertidos</p>}
        {data === "error" && <p>Lo sentimos, ocurrio un error insperado</p>}
        { complete && data.results.map((el, pos) => <div key={`people-${pos}`}>
          <p> {el.name} </p>
        </div>) }
        <button onClick={obtenDatos}>Invocar datos</button>
      </header>
    </div>
  );
}

export default App;
