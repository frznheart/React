// import logo from "./logo.svg";
import "./App.css";

import { Fragment } from "react";

// import Button from "./Button";
import { SmallButton } from "./Button";

//ES6 module system
//default export and named export
//argument in funtion => props to component

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>{true ? "retrun me" : "donot return me"}</p>
//         <img src={logo} className="App-logo" alt="logo" />
//         <img src="./logo.svg" className="App-logo" alt="logo" />
//         <img src="./logo192.png" className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React changed me
//         </a>
//       </header>
//     </div>
//   );
// }
function App() {
  return (
    <Fragment>
      <div>Welcome</div>
      <div>Welcome again</div>
      {/* <Button title="Big" />
      <Button title="small" /> */}
      <SmallButton title="CustomTitle" color="red" />
    </Fragment>
  );
}

export default App;
