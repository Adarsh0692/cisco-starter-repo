
import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';
import IPAddress from './components/IPAddress';

function App() {
  return (
    <div>
      <Banner title='Sextant'/>
      <Exhibit heading="IPv4 Address" >
        <IPAddress url="https://api.ipify.org?format=json" />
      </Exhibit>
      <Exhibit heading="IPv6 Address" >
      <IPAddress url="https://api64.ipify.org?format=json"/>
      </Exhibit>
     
    </div>
  );
}

export default App;
