import Iframe from 'react-iframe';
import './App.css';

function App() {
  return (
    <div className="App">
      <Iframe url="https://puginarug.com/"
        width="100%"
        height="100%"
        id="myId"
        display="initial"
        position="relative"
      />
    </div>
  );
}

export default App;
