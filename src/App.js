import React from 'react';

import {ComputerClock, WorldClock} from './components/Clock/';

function App(props) {
  return (<div>
    <h1>Clock App Exemplo de acesso a API</h1>
    <div>
      <h2>Tarefas</h2>
      <ol>
        <li>OK Separando os componentes em arquivos js</li>
        <li>OK Limpando o código do componente ComputerClock</li>
        <li>OK Criando um 2o componente WorldClock</li>
        <li>OK Melhorando os comandos de import</li>
        <li>OK Preparando o código para acessar http://worldtimeapi.org/</li>
        <li>OK Merge dos diretórios do react app e do repositório do github</li>
        <li>Criar um .gitignore</li>
      </ol>
    </div>
    <div>
      <h2>Homework</h2>
      <ol>
        <li>fork do repositório</li>
        <li>criar react app clock</li>
        <li>replicar a programação deste vídeo</li>
        <li>dúvidas no telegram ou na próxima aula</li>
      </ol>
    </div>
    <ComputerClock />
    <WorldClock />
  </div>);
}

export default App;