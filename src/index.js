import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import MarvelService from './services/MarvelService';
import './style/style.scss';


const marverlService = new MarvelService();

marverlService.getAllCharacters().then(res => console.log(res));
marverlService.getCharacter(1011052).then(res => console.log(res));

marverlService.getAllCharacters().then(res => console.log(res.data.results.forEach(item => console.log(item.name))));


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

