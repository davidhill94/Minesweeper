import './App.css';
import ErrorScreen from './components/ErrorScreen/ErrorScreen';
import Game from './components/Game/Game';

function App() {

  return (
    <div className="App">
      {window.innerWidth < 550 || window.innerHeight < 600
      ? 
      <ErrorScreen />
      :
      <Game />
    }
    </div>
  );
}

export default App;
