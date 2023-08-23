
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import {Routes,Route} from 'react-router-dom';
import Update from './components/Update';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App "  > 

        <Navbar/>
         <Routes>
   
        <Route path='/' element={<Create/>} />
        <Route path='/read' element={<Read/>} />
        <Route path='/update' element={<Update/>} />
       
        </Routes> 
      
    </div>
  );
}

export default App;
