import { useState } from "react";
import "./times.css";
import flamengoLogo from "/public/images/logoFlamengo.png"
import vascoLogo from "/public/images/logoVasco.png"
import botafogoLogo from "/public/images/logoBotafogo.png"
import fluminenseLogo from "/public/images/logoFluminense.png"

const times = [
    { nome: "Flamengo", logo: flamengoLogo },
    { nome: "Vasco", logo: vascoLogo },
    { nome: "Fluminense", logo: fluminenseLogo },
    { nome: "Botafogo", logo: botafogoLogo },
  ];
  
  function ListaTimes() {
    const [filtro, setFiltro] = useState("");
  
    const trocaFiltro = (e) => {
      setFiltro(e.target.value);
    };
  
    const timeFiltro = times.filter(time =>
      time.nome.toLowerCase().includes(filtro.toLowerCase())
    );
  
    return (
      <div className="times-container">
        <header className="header">
          <h1 className="titulo">Times de futebol no Rio de Janeiro</h1>
          <input
            type="text"
            value={filtro}
            onChange={trocaFiltro}
            placeholder="Pesquisar time"
          />
        </header>
  
        <ul className="lista-times">
          {timeFiltro.map((time, index) => (
            <li key={index}>
              <img src={time.logo} alt={time.nome} className="logo" />
              {time.nome}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default ListaTimes;