import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";

function App() {
  const[name,setName]=useState(" ");
  const[age,setAge]=useState(0);
  const[adm,setAdm]=useState(0);
  const[texta,setTexta]=useState(" ");
  return (
    <div className="App">
     <form>
      <h1>Student Registration</h1>
      Name:<input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input><br></br>
      Age:<input type="number" value={age}  onChange={(e)=>setAge(e.target.value)}></input><br></br>
      Adm.no:<input type="number" value={adm}  onChange={(e)=>setAdm(e.target.value)}></input><br></br>
      Address:<textarea rows="5" cols="8" type="text" value={texta}  onChange={(e)=>setTexta(e.target.value)}></textarea><br></br>
      <button type="submit" value="Submit">Submit</button>
      <button type="submit" value="Submit">Reload</button>
     </form>
    </div>
  );
}

export default App;
