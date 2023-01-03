import React, {useState, useEffect} from 'react';
import ToggleButtonMode from "./components/atom/ToggleButtonMode/ToggleButtonMode";


function App() {
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
    console.log(backendData)
    //  backendData ? (
    //   <div className="App">
    //     <header className="App-header">
    //       {/* <ToggleButtonMode /> */}
    //       <h2>cos tam</h2>
    //     </header>
    // </div>
    // ) : (<div>Loading</div>)
  )

}

export default App;
