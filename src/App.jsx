import { useState } from "react"
import { Secundario } from "./Secundario"
import { Principal } from "./Principal"

function App() {
  const [isActivate, setActivate] = useState(false)
  return (
    isActivate ? <Secundario></Secundario> : <Principal setActivate={setActivate}></Principal>
    
  )
}

export default App
