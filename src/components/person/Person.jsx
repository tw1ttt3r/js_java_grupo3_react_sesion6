import { useRef } from 'react';
import useGetPeople from '../../hooks/getData';
import Log from '../log/Log';

function Person() {
  const name = useRef(null);
  const { data, error, complete, getData } = useGetPeople();

  const invoca = () => {
    if (!!name.current.value) {
      const dato = name.current.value;
      getData(dato);
      name.current.value = "";
    }
  }

  return (<div>
    {data === null && <p>Aqui va el nombre</p>}
    <Log data={data} error={error} />
    {(complete && typeof data === 'object') && <p>{ data.name }</p>}
    <input placeholder='coloca el id de la persona' ref={name} />
    <button onClick={invoca}>Obten información</button>
  </div>)
}

export default Person;