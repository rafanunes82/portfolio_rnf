import Image from 'next/image'
import Card from './components/Card/index'
import styles from './page.module.css'

export default function Home() {
  const times = [{ nome: "Flamengo", estado: "RJ" }, { nome: "São Paulo", estado: "SP" }, { nome: "São Paulo", estado: "SP" }]
  return (
    <main className={styles.main}>
      {times.map((time) => <Card texto={time.estado}></Card>)}

    </main>
  )
}
