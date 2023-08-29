function Log({ data, error }) {
  return (<>
    {data === "invocada" && <p>La llamada ha sido invocada</p>}
    {data === "llegaron" && <p>La llamada ha sido invocada y los datos llegaron</p>}
    {error && <p>Lo sentimos, ocurrio un error insperado</p>}
  </>)
}

export default Log;