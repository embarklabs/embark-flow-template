// @flow

// $FlowFixMe
import EmbarkJS from 'Embark/EmbarkJS';

// import your contracts
// e.g if you have a contract named SimpleStorage:
// $FlowFixMe
// import SimpleStorage from 'Embark/contracts/SimpleStorage';

import {Greeter} from './greet';

// remove the .disabled extension from app/js/babel-demos.js and uncomment the
// line below to enable some demos of webpack/babel features included with
// Embark, but first see the package installation instructions in that file

// import './babel-demos';

// check with `npm run type-check` or `npm run type-check:watch`
const badlyTyped: string = true;
// type errors do not affect and are not reported in embark's build pipeline
// can run type checker in one terminal while embark is running in another

EmbarkJS.onReady(function(error: string) {
  if (error) {
    console.error(error);
  }
  console.log("Embark is ready");
});

let greeter = new Greeter("world");

let button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function() {
  alert(greeter.greet());
}

if (document.body) {
  document.body.appendChild(button);
}
