import React from 'react';

// import { Container } from './styles';
interface CardProps {
    texto: string
}
const Card: React.FC <CardProps> = ({texto} :CardProps) => {
  return <h1>{texto}</h1>;
}

export default Card;