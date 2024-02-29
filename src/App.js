import { useState } from 'react';
import Banner from './components/Banner/Banner.js';
import Formulario from './components/Formulario/index.js';
import Time from './components/Time/index.js';

function App() {

  const times = [
    {
      nome : 'Programação',
      corPrimaria : '#57c278',
      corSecundaria : '#d9f7e9'
    },
    {
      nome : 'Front-End',
      corPrimaria : '#82cffa',
      corSecundaria : '#e8f8ff'
    },
    {
      nome : 'Data Science',
      corPrimaria : '#a6d156',
      corSecundaria : '#f0fbe2'
    },
    {
      nome : 'Devops',
      corPrimaria : '#e06b69',
      corSecundaria : '#fde7e8'
    },
    {
      nome : 'UI e Design',
      corPrimaria : '#db6ebf',
      corSecundaria : '#fae9f5'
    },
    {
      nome : 'Mobile',
      corPrimaria : '#ffba05',
      corSecundaria : '#fff5d9'
    },
    {
      nome : 'Inovação e Gestão',
      corPrimaria : '#ff8a29',
      corSecundaria : '#ffeedf'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger 
    setColaboradores([...colaboradores, colaborador])
  }

  return (

    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => <Time 
      key={time.nome} 
      nome={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}
    </div>
  );
}

export default App;
