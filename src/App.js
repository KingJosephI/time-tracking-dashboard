import './App.scss';
import Card from './components/Card/Card';
import CardList from './components/CardList/CardList.jsx';
import iconWork from './images/icon-work.svg';
function App() {
  return (
    <div className="App">
      {/* <Card image={iconWork} /> */}
      <CardList />
    </div>
  );
}

export default App;
