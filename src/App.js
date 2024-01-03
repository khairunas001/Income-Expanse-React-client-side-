import React from 'react';
import './App.css';
import {
Title,
InputForm,
Income,
Expense
} from './components/index'

function App() {
  return (
    <div className="App">
      <Title></Title>
      <InputForm></InputForm>
      <div className='trasaction-list'>
        <div className='transaction-heading'>
          <h3>Trasaction List</h3>
        </div>
        <div className='transactions'>
          <Income></Income>
          <Expense></Expense>
        </div>
      </div>
    </div>
  );
}

export default App;
