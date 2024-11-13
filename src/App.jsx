import { useState } from "react"
//hook do react para mudanças de estado
import "./style.scss"

export default function App(){
  //VARIAVEL DE ESTADO
  //primeirovalor é a variavel de estado
  //setprimeirovalor é a função atualizadora
  const [primeiroValor, setSegundoValor] =useState();
  const [segundoValor, setsegundoValor] = useState();
  
  //arrow function () => {}
    //função especial
  const capturandoPrimeiroValor = (e) => {
     setPrimeiroValor(Number(e.target.value))
  }

  const captuandoSegundoValor = (e) => {
    setsegundoValor(Number(e.target.value))
  }
  return (
    <main>
      <h1>Calculadora</h1>
      <input onChange={} type="number" placeholder="Insira um número"/>
      <input onChange={} type="number" placeholder="Insira um número"/>
      <div>
        <button>+</button>
        <button>-</button>
        <button>/</button>
        <button>x</button>
      </div>
    </main>
  )
}