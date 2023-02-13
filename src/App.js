import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import MyClass from './components/MyClass';

function App() {
  return (
    <div className="App">
    <h1>Hello World</h1>
    <Hello name="Deva" lastname="Prasad"/>
    <MyClass email = "devaprasadmohan@gmail.com"/>
    </div>
  );
}

export default App;
