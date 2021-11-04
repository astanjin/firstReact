import logo from './logo.svg';
import './App.css';
import './Header'
import Header from './Header'
import './College'
import College from './College';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header id ='101232988' name = 'Mina Lotfyastanjin'/>
        <College />
        {/* <College/> */}
        
      </header>
    </div>
  );
}

export default App;
