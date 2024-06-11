import logo from './logo.svg';
import './App.css';
import Addlogin from './components/Addlogin';
import Signup from './components/Signup';
import Viewall from './components/Viewall';
import Nav from './components/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Addlogin/>}/>
    <Route path="/Signup" element={<Signup/>}/>
    <Route path="/Viewall" element={<Viewall/>}/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
