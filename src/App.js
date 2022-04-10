import './App.css';
import { DataChart } from './Data/Data'

function App() {
  return (
    <div className="App">
      <div className='row'>
        <div className='col-md-3'>Nav</div>
        <div className='col-md-9'>Main</div>
        <br />
        <DataChart />
      </div>
    </div>
  );
}

export default App;