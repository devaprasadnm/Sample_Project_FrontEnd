import logo from './logo.svg';
import './App.css';
import React from 'react';
import Hello from './components/Hello';
import MyClass from './components/MyClass';
import Name from './components/Name';
import Example from './components/Example';
import Example2 from './components/Example2';
import FormComponent from './components/Form';
import MyFragment from './components/MyFragment';
import ComponentA from './components/ComponentA';
import Counter from './components/Counter';
import CounterHook from './components/CounterHook';
import FetchData from './components/FetchData';
export const MyContext = React.createContext();

function App() {

  function click(){
    alert("Hello App")
  }
  return (
    <div className="App">
      <FetchData/>
      {/* <CounterHook/> */}
      {/* <Counter/> */}
    {/* <Name/>
    <Example names={["Python","Java","Ruby"]} />
    <Example2 x = {["Rohith","Revanth"]}/> 
    <FormComponent/>*/}
    {/* <MyFragment/>
    <MyContext.Provider value="Hello world">
    <ComponentA/>
    </MyContext.Provider> */}

    </div>
  );
}

export default App;
