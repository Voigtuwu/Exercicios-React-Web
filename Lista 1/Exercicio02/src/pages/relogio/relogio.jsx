import { useState, useEffect } from "react";


export function Relogio() {
    const [horario, setHorario] = useState(new Date());
    
    useEffect(() => {
        const horarioId = setInterval(() => {
            setHorario(new Date());
        }, 1000);
        
        return () => {
            clearInterval(horarioId);
        };
    }, []);
    
    return (
        <div>
        <h2>Horário Local:</h2>
        <p>{horario.toLocaleTimeString()}</p>
      </div>
    );
}

export default Relogio;