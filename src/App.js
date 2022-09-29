import { PeriodProvider } from './contexts/PeriodContext';
import TimeTrackingComponent from './components/TimeTrackingComponent/TimeTrackingComponent';
import './App.scss';

function App() {
  return (
    <PeriodProvider>
      <div className="App">
        <TimeTrackingComponent />
      </div>
    </PeriodProvider>
  );
}

export default App;
