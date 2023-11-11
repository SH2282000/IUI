import './style.css'
import javascriptLogo from '/javascript.svg'
import lmuLogo from '/lmu.jpg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${lmuLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

// Dear colleagues, this is the 101 on how to make an AJAX call
fetch("https://httpbin.org/post", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body: "banana=yellow",
})
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.text();
  })
  .then(data => {
    alert("Success: " + data);
    setInterval(changeOpacity, 1000);
  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });

// and this is how to fade an element
var buttonCounter = document.getElementById('counter').style;
let currentOpacity = 0;
function changeOpacity() {
  buttonCounter.opacity = currentOpacity;
  currentOpacity = currentOpacity === 1 ? 0.3 : 1;
}

setupCounter(document.querySelector('#counter'))
