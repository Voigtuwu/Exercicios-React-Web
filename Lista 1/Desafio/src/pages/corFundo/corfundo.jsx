import { useState, useEffect } from "react";
import "./corfundo.css";

function CorFundo() {
  const [cor, setCor] = useState("#FFFF");

  const criarHex = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };

  const mudarCor = () => {
    const novaCor = criarHex();
    setCor(novaCor);
  };

  useEffect(() => {
    document.body.style.backgroundColor = cor;
  }, [cor]);

  return (
    <div className="cor-fundo-container">
      <h1>Cor do background</h1>
      <button onClick={mudarCor}>Mudar cor</button>
      <p>Código Hexadecimal: {cor}</p>
    </div>
  );
}

export default CorFundo;