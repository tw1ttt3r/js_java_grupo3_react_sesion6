import './App.css';
import useGetPeople from './hooks/getData';
import Lista from './components/lista/Lista';
import Person from './components/person/Person';
import Log from './components/log/Log';
import { useEffect, useState } from 'react';

function App() {

  const { complete, data, error, getData } = useGetPeople();
  const [newData, setNewData]  = useState(data);
  const [newError, setNewError]  = useState(error);

  useEffect(() => {
    console.log("data", data)
    setNewData(data);
    setNewError(error);
  }, [data, error])

  const obtenDatos = () => {
    if (!complete) {
      getData();
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>USO DE APIS (SWAPI)</h1>
        {data === null && <p>La llamada no ha sido invocada</p>}
        <Log data={newData} error={newError} />
        { (complete && typeof data === 'object') && data.results.map((el, pos) => <div key={`people-${pos}`}>
          <p> {el.name} </p>
        </div>) }
        <button onClick={obtenDatos}>Invocar datos</button>

        {complete && <Lista />}
        <Person />
      </header>
    </div>
  );
}

export default App;
