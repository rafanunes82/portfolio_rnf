"use client";
import Image from "next/image";
import Card from "./components/Card/index";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import InputComponent from "./components/InputComponent";

export default function Home() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userSenha, setUserSenha] = useState("");
  return (
    <main className={styles.main}>
      <InputComponent />
      <div>
        <label>Texto</label>
        <input placeholder="digite seu nome..."></input>
      </div>
      <div>
        <label>Texto</label>
        <input placeholder="digite seu nome..."></input>
      </div>
      <button onClick={() => console.log(userName, userEmail, userSenha)}>
        mostrar
      </button>
    </main>
  );
}
