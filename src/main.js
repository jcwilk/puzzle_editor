import './style.css'
import { buildCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button">Click!</button>
    </div>
  </div>
`

let counter = buildCounter();
counter.attach(document.querySelector('#counter'));
