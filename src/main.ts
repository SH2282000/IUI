import './style.css'
import { setupCounter } from './counter.ts'


// make an AJAX call
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
var buttonCounter = document.querySelector<HTMLButtonElement>('#counter')!.style;
let currentOpacity = 0;
function changeOpacity() {
  buttonCounter.opacity = currentOpacity.toString();
  currentOpacity = currentOpacity === 1 ? 0.3 : 1;
}


setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
