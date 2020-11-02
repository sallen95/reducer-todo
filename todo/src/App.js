import './App.css';
import TodoList from './components/TodoList';
import { initialState } from './reducers/reducer';
import reducer from './reducers/reducer';
import React, { useReducer } from 'react';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);



  return (
    <div>
      <TodoList data={state.data}/>
    </div>
  );
}

export default App;
