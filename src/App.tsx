import React from "react"
import Button from "./Button";
import Button2 from "./Button2";

function App() {
  const [total, setTotal] = React.useState(0)

  function incrementar() {
    setTotal((total) => total + 1)
  }

  return (
    <div>
      <p>Exemplo 1</p>
      <p>Total: {total}</p>
      <button onClick={incrementar}>Incrementar</button>
      <Button/>
      <hr />
      {/* Props - 1 */}
      <p>Exemplo 2</p>
      <p>Total: {total}</p>
      <Button2 onClick={incrementar} tamanho="1.25rem">Incrementar</Button2>
    </div>
  );    
  
}

export default App
