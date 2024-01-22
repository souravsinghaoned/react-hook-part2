import './App.css';
import Counter from './components/Counter';
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import FocusingInput from './components/FocusingInput';
import HookTimer from './components/HookTimer';
import TimerClass from './components/TimerClass';
import Parents from './components/parents';


function App() {

  return (
    <div className="App">
     {/* <Parents/> */}
     <Counter/>
     <br/>
     <FocusingInput/>
     <TimerClass/>
     <HookTimer/>
     <CounterOne/>
     <CounterTwo/>
    </div>
  );
}

export default App;
