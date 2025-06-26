import { useState } from "react"
import '../src/app.css'

const App = () => {

  const [conselho, setConselho] = useState("")

  const buscar = () => {
    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setConselho(data.slip.advice)
    })
    }

  return(
    <body>
      <main className="glass-card">
        <h1>💡 Conselho do Dia</h1>
        <p>Clique no botão abaixo para receber um conselho aleatório!</p>
        <p>{conselho}</p>
        <button onClick={buscar}>Gerar Conselho</button>
      </main>
    </body>
  )
}

export default App