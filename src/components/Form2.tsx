import React from 'react'
import Input from './Input'

interface State {
  nome: string;
  email: string;
}

type Action =
  | { type: 'setNome'; payload: string }
  | { type: 'setEmail'; payload: string }

// function reduce( state: State, action: Action) {
//    console.log(state)
   
//    if (action.type === 'setNome') {
//       return {
//          ...state,
//          nome: action.payload,
//       }
//    }

//    if (action.type === 'setEmail') {
//       return {
//          ...state,
//          email: action.payload,
//       }
//    }

//    return state
// }

function reduce(state: State, action: Action) {
  console.log(state)

  switch (action.type) {
    case 'setNome':
      return {
        ...state,
        nome: action.payload,
      }

    case 'setEmail':
      return {
        ...state,
        email: action.payload,
      }

    default:
      return state
      
  }
}

const Form2 = () => {

   const [state, dispatch] = React.useReducer(reduce, {nome: "", email: ""})

  return (
    <div>
      <Input
         label={`Nome: ${state.nome}`}
        onChange={({ target }) =>
          dispatch({ type: 'setNome', payload: target.value })
        }
        value={state.nome}
      />
      <Input
        label={`Email: ${state.email}`}
        onChange={({ target }) =>
          dispatch({ type: 'setEmail', payload: target.value })
        }
        value={state.email}
      />
    </div>
  );
}

export default Form2