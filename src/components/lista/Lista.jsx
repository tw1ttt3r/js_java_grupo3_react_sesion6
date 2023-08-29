import { useEffect } from "react";
import useGetPeople from "../../hooks/getData"


function Lista() {

  const { data } = useGetPeople();

  useEffect(() => {
    console.log("data in Lista", data);
  }, data);

  return (<ul>
    { data !== null && data.results.map((el, pos) => <li key={`people-${pos}`}>
          <p> {el.name} </p>
        </li>) }
  </ul>)
}


export default Lista