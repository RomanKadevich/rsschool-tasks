import { test } from './test';

import './styles.scss';

const img = require('./assets/my_photo.jpeg');

test();

console.log('hello world');

document.body.innerHTML = `<img src= "${img}" alt="test">`;
