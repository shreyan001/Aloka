import logo from './logo.svg';
import './App.css';
import linkAccount from './1_accounts';

function App() {

  async function requestAccount()  {
      
  

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={linkAccount}>Connect Wallet</button>
    
      </header>
    </div>
  );
}

export default App;
