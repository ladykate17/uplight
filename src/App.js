import './App.css';
import Generator from './components/Generator/generator.component.tsx';

function App() {
  return (
    <div className="App">
    <h1>Encryption Generator</h1>
    <p>Enter the phrase and secret below to create your HMAC token</p>
      <Generator />
    </div>
  );
}

export default App;
