import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>        
          <button type="button" class="btn btn-outline-primary">New User</button>
          <button type="button" class="btn btn-outline-primary">Existing User</button>
        </div>

        
      </header>
    </div>
  );
}

export default App;
