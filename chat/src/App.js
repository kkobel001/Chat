import {useState, useEffect} from 'react';
import ToggleButtonMode from "./components/atom/ToggleButtonMode/ToggleButtonMode";
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/molecules/Nav/Nav';



const App = ()=> {
  const [backendData, setBackendData] = useState(null);

  useEffect(()=>{
    fetch("http://localhost:500/api")
      .then(
        response => response.json()
      )
      .then (
        data => {
          setBackendData(data)
        }
      )
  },[])

  return (
    <Router>
      <Nav title="Chat" source="git" />
    </Router>
   
  )
}

export default App;
