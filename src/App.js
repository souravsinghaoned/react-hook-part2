import './App.css';
import Counter from './components/Counter';
import FocusingInput from './components/FocusingInput';
import Parents from './components/parents';


function App() {

  return (
    <div className="App">
     {/* <Parents/> */}
     <Counter/>
     <br/>
     <FocusingInput/>
    </div>
  );
}

export default App;
