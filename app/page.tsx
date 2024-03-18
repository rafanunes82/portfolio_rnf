"use client";
import Image from 'next/image'
import Card from './components/Card/index'
import styles from './page.module.css'

export default function Home() {
  const times = [{ nome: "Flamengo", estado: "RJ" }, { nome: "São Paulo", estado: "SP" }, { nome: "São Paulo", estado: "SP" }]
  console.log(times[0].nome)

  function makeRequest() {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((response) => response.json())
      .then((response) => console.log(response))

  }

  return (
    <main className={styles.main}>
      {/*times.map((time) => <Card texto={time.estado}></Card>)*/}
      <Title texto='teste'></Title>
      <button onClick={makeRequest}>Fazer Rec</button>

    </main>
  )
}

interface CardProps {
  texto: string;
}
const Title: React.FC<CardProps> = ({texto}:CardProps) => {
  return <h1> {texto} </h1>;
}

