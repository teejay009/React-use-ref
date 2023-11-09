import { useState, useRef } from "react";
const [seconds,setSeconds] = useState(0);


const renders = useRef(0);

const handleInputChange = (e) => {}





  
  


const App = () => {
  const [randomInput, setRandomInput] = useState("");



  
  



  

  



  return(
    <main className="App">
        
        <input
       type="text" 
      value={randomInput}
      placeholder='Type anything...'
      onChange={(e) => setRandomInput(e.target.value)}
      />
      <p>Result: {randomInput}</p>

      <br />
      <br />

      <section>
        <button>Stop</button>
        <button>Start</button>
        
        </section>

        <button>Reset</button>

        <br />
        <br />

        <p>Seconds</p>

        <br />
        <br />

        <section>

        </section>

    </main>

  )

}

export default App;