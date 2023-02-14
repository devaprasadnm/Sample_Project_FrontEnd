import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import MyClass from './components/MyClass';
import Name from './components/Name';

function App() {

  function click(){
    alert("Hello App")
  }
  return (
    <div className="App">
    <Name/>
    </div>
  );
}

export default App;
