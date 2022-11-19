import './App.css';
import Header from "./MyComponent/Header";
import Todo from "./MyComponent/Todo";
import Footer from "./MyComponent/Footer";
import Todolist from './MyComponent/Todolist';
// import Testin from './MyComponent/Testin';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');  //Whether dark mode is enable or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='black';
    }
    else {
      setMode('light')
      document.body.style.backgroundColor='white';


    }
  }
  return (
    <>
      <Header title="TextUtile" mode={mode} toggleMode={toggleMode} />
      <Todo />
      <Todolist />
      <Footer />

    </>
  );
}

export default App;
