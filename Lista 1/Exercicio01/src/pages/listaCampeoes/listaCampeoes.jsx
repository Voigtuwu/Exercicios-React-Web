import { useState } from 'react';

export function ListaCampeoes() {
  const campeoesIniciais = [
    { id: 1, nome: 'Janna' },
    { id: 2, nome: 'Janna' },
    { id: 3, nome: 'Janna' },
  ];

  const [novoCampeao, setNovoCampeao] = useState('');
  const [listaCampeoes, setListaCampeoes] = useState(campeoesIniciais);
  const [erro, setErro] = useState('');

  function adicionarCampeao() {
    if (novoCampeao.trim().toLowerCase() === 'janna') {
      const novaEntradaCampeao = {
        id: listaCampeoes.length + 1,
        nome: novoCampeao,
      };
      setListaCampeoes([...listaCampeoes, novaEntradaCampeao]);
      setNovoCampeao('');
      setErro('');
    } else {
      setErro('Só existe um melhor campeão em League Of Legends.');
    }
  }

  return (
    <div className='lista-campeoes'>
      <h1 className='titulo'>Top {listaCampeoes.length} melhores campeões do League Of Legends</h1>
      <ol>
        {listaCampeoes.map((campeao) => (
          <li key={campeao.id}>
            {campeao.nome}
            <img src="public/images/maestria7.png" alt="M7" className='imagem-maestria'/>
            </li>
        ))}
      </ol>
      <input
        placeholder="Digite um novo campeão"
        type="text"
        value={novoCampeao}
        onChange={(e) => setNovoCampeao(e.target.value)}
      />
      <button onClick={adicionarCampeao}>Adicionar</button>
      {erro && (
  <div>
    <p className='mensagem-erro'>{erro}</p>
    <img src="public/images/janna.gif" alt="GIF de erro" className="gif-erro" />
  </div>
)}
      
    </div>
  );
}

export default ListaCampeoes;