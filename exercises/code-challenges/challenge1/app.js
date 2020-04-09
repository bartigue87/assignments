// function hasDouble(str){
//     for(let i = 0; i < str.length - 1; i++){
//         if(str[i] === str[i+1]){
//             return true
//         }

//     }
//     return false
// }

//  console.log(hasDouble("racecar"))

let magicButtonCount = 0;
class MagicButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    let which = magicButtonCount++;
    const button = document.createElement("button");
    button.onclick = (event) => {
      alert("You clicked " + which + "!");
    };
    button.innerText = "Magic Button " + which;
    shadow.appendChild(button);
  }
}
customElements.define("magic-button", MagicButton);
