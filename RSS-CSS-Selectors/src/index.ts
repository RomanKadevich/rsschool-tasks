import 'highlight.js/styles/default.css'; 
import hljs from 'highlight.js/lib/core'; // Импорт ядра Highlight.js
import css from 'highlight.js/lib/languages/css'; // Импорт языкового пакета для CSS

hljs.registerLanguage('css', css); // Регистрация языка CSS


// Подключение стилей Highlight.js
import 'materialize-css/dist/css/materialize.min.css';
import './styles/style.scss';
import { App } from './app/app';



const app = new App();
app.run();