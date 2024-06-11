import logo from './logo.svg';
import './App.css';
import Addlogin from './components/Addlogin';
import Signup from './components/Signup';
import Viewall from './components/Viewall';
import Nav from './components/Nav';

function App() {
  return (
    <div>
      <Addlogin/>
      <Signup/>
      <Viewall/>
      <Nav/>
    </div>
  );
}

export default App;
