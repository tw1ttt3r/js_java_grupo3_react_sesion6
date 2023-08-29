import { useState } from 'react';

const useGetPeople = () => {

  const api = "https://swapi.dev/api";

  
  const [data, setData] = useState(null); 
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState(false);


  const getData = (people) => {
    setData("invocada");
    const url = !!people ? `${api}/people/${people}` : `${api}/people`;
    fetch(url)
      .then((res) => {
        setData("llegaron");
        return res.json()
      })
      .then(response => {
        console.log(response);
        setData({...response});
        setComplete(true);
      })
      .catch((e) => setError(true))
      .finally(() => console.log("termino la llamada"));
  }

  return { data, complete, error, getData } // { data: {}, complete: {} }

};

export default useGetPeople;