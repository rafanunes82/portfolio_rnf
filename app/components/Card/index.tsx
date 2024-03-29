"use client";
import axios from "axios";
import { METHODS } from "http";
import React, { useState } from "react";
interface CardProps {
  texto: string;
}
const Card: React.FC<CardProps> = ({ texto }: CardProps) => {
  const [name, setName] = useState<string>("Clique aqui");

  console.log(window.document.getElementsByClassName("Título"));

  async function asyncHandleAPI() {
    const response: any = await axios("https://swapi.dev/api/");
    const people = await axios(response.data.people);
    setName(people.data.results[0].name);
    const veiculos = await axios(response.data.vehicles);
    setName(
      people.data.results[0].name + " tem um " + veiculos.data.results[1].name
    );
  } // asincrona, ela espera a resposta, observe que ela tem async e o await

  function FirstHandleAPI() {
    fetch("https://swapi.dev/api/")
      .then((response) => response.json())
      .then((data) =>
        fetch(data.people)
          .then((response) => response.json())
          .then((people) => setName(people.results[1].name))
      );
  }
  /*
  people  === https://swapi.dev/api/people/
{
    "people": "https://swapi.dev/api/people/",
    "planets": "https://swapi.dev/api/planets/",
    "films": "https://swapi.dev/api/films/",
    "species": "https://swapi.dev/api/species/",
    "vehicles": "https://swapi.dev/api/vehicles/",
    "starships": "https://swapi.dev/api/starships/"
}

  */
  async function handleAPI() {
    const response = await fetch("https://swapi.dev/api/");
    console.log(response);
  } // ela retorna uma Promisse se não tiver o async function nem o await

  return (
    <h1 className="Título" onClick={() => console.log(texto)}>
      {name}
    </h1>
  );
};

export default Card;
