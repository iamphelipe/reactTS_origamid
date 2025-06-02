import React from 'react';
import Button from './Button';
import Button2 from './Button2';
import Button3 from './Button3';
import Checkbox from './Checkbox';

function App() {
  const [total, setTotal] = React.useState(0);

  function incrementar() {
    setTotal((total) => total + 1);
  }

  return (
    <>
    <div>
      <p>Exemplo 1</p>
      <p>Total: {total}</p>
      <button onClick={incrementar}>Incrementar</button>
      <Button />
      <hr />
      {/* Props - 1 */}
      <p>Exemplo 2</p>
      <p>Total: {total}</p>
      <Button2
       className="btn"
       id='btn-main'
       onClick={incrementar} 
       tamanho="1.25rem"
       >
        Incrementaar
      </Button2>
      {/* Interfaces e Tipos 1 */}
      <Button3>Incrementar</Button3>
    </div>

    <div>
      {/* Eventos - Básicos TSX */}

      <Checkbox label='Termos e Condições' />
    </div>


    </>
    
  );
}

export default App;
