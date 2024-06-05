import { useState } from "react";
import BotaoComponente from "../../components/botao";
import InputComponente from "../../components/input";

function Formulario() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [pais, setPais] = useState("");

    const trocaNome = (e) => {
        setNome(e.target.value);
    };

    const trocaEmail = (e) => {
        setEmail(e.target.value);
    };

    const trocaPais = (e) => {
        setPais(e.target.value);
    };

    const aoClick = () => {
        console.log("Nome: ", nome);
        console.log("Email: ", email);
        console.log("Pais de origem: ", pais);
    }

return (
    <div>
    <h1>Formulário</h1>
    <InputComponente 
    label="Nome" 
    value={nome} 
    onChange={trocaNome}
    placeholder="Digite seu nome"/>  

    <InputComponente 
    label="Email" 
    value={email} 
    onChange={trocaEmail}
    placeholder="Digite seu email"/>   

    <InputComponente 
    label="Pais" 
    value={pais} 
    onChange={trocaPais}
    placeholder="Digite o seu pais de origem"/>   
    <BotaoComponente onClick={aoClick}/>   
    </div>

)

}


export default Formulario