"use client";
import React, { useState } from "react";

// import { Container } from './styles';


const InputComponent: React.FC = () => {
  const [userName, setUserName] = useState("");
  return (
    <div>
      <label>Texto</label>
      <input
        placeholder="digite seu nome..."
      ></input>
    </div>
  );
};

export default InputComponent;
