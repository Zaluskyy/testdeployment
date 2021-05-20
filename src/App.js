import React, { useState } from 'react';
import './App.css';

function App() {

  const [ login, setLogin ] = useState("")

  const changeLogin = (e)=>{
    setLogin(e.target.value)
  }

  return (
    <div className="App">
      <input type="text" value={login} onChange={changeLogin} />
    </div>
  );
}

export default App;
