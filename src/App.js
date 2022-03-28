import './App.css';
import Home from './Ui/Home';
import Add from './inpute/Add';
 import AddTask from './inpute/AddTask';

 import  {Routes,Route} from "react-router-dom" 
import { useState } from 'react';
function App() {
    const [toggle,settoggle]=useState(true)
  return (
     
     
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route  path="/Add/:id" element={<Add data={toggle} data1={settoggle}/>} />
      <Route  path="/AddTask" element={<AddTask data={settoggle}/>}/>

    </Routes>
   
    
  );
}

export default App;
