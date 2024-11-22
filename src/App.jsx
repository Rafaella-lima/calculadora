import { useState } from "react"
//hook do react para mudanças de estado
import "./style.scss"

export default function App(){
  //VARIAVEL DE ESTADO
  //primeirovalor é a variavel de estado
  //setprimeirovalor é a função atualizadora
  const [primeiroValor, setPrimeiroValor] = useState();
  const [segundoValor, setsegundoValor] = useState();
  const [resultado, setResultado] = useState();
  
  //arrow function () => {}
    //função especial
  const capturandoPrimeiroValor = (e) => {
     setPrimeiroValor(Number(e.target.value))
     console.log(e.target.value)
  }

  const captuandoSegundoValor = (e) => {
    setsegundoValor(Number(e.target.value))
  }

  //função somar
  const soma = () => {
    setResultado(primeiroValor + segundoValor)
  }
  //função subtrair
  const subtracao = () => {
    setResultado(primeiroValor - segundoValor)
  }
  //função divisao
  const divisao = () => {
    setResultado(primeiroValor / segundoValor)
  }
  //funçao multiplicar
  const multiplicacao = () => {
    setResultado(primeiroValor * segundoValor)
  }
    

  return (
    <main>
      <h1>Calculadora</h1>
      <input onChange={capturandoPrimeiroValor} type="number" placeholder="Insira um número"/>
      <input onChange={captuandoSegundoValor} type="number" placeholder="Insira um número"/>
      <div>
        <button onClick={soma}>+</button>
        <button onClick={subtracao}>-</button>
        <button onClick={divisao}>/</button>
        <button onClick={multiplicacao}>x</button>
      </div>
      <h3>{resultado}</h3>
    </main>
  )
}
