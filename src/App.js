// import logo from './logo.svg';

import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './components/Navbar';
import Sign from './components/Sign';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="signin/*" element={<Sign/>}/>
        
      </Routes>
    
    </div>
  );
}

export default App;
