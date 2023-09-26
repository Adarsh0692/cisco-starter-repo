
import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

function App() {
  return (
    <div>
      <Banner title='Sextant'/>
      <Exhibit heading="This is a card one" >
        child of card one
      </Exhibit>
      <Exhibit heading="This is a card two" >
        child of card two
      </Exhibit>
      <Exhibit heading="This is a card three" >
        child of card three
      </Exhibit>
      <Exhibit heading="This is a card four" >
        child of card four
      </Exhibit>
    </div>
  );
}

export default App;
