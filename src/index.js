import {StrictMode} from 'react';
import {render} from 'react-dom';
import App from './components/App';
import {estilos} from './estilos.css';


render(
  <StrictMode>
    <App />
  </StrictMode>,
  (document.getElementById('root'))
);