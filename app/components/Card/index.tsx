import React from 'react';

// import { Container } from './styles';
interface CardProps {
    texto: string // posso colocar ? para não ser obrigatoria a variável "texto"
}
const Card: React.FC <CardProps> = ({texto} :CardProps) => { // dois pontos significa TIPO e o => é o arrow function
  return <h1>{texto}</h1>; // component + Props é o que o componente vai precisar para funcionar
}

export default Card;