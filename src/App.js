import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import MyClass from './components/MyClass';
import Name from './components/Name';
import Example from './components/Example';
import Example2 from './components/Example2';
import FormComponent from './components/Form';
import MyFragment from './components/MyFragment';

function App() {

  function click(){
    alert("Hello App")
  }
  return (
    <div className="App">
    {/* <Name/>
    <Example names={["Python","Java","Ruby"]} />
    <Example2 x = {["Rohith","Revanth"]}/> 
    <FormComponent/>*/}
    <MyFragment/>

    </div>
  );
}

export default App;
