// import { useState } from "react";
// import Alert from "./components/Alert";
// import Button from "./components/Button";
// import ListGroup from "./components/ListGroup";
// import './App.css';

// function App() {
//   const items = ["New York", "Los Angeles", "San Francisco"]

//   return (
//     <div>
//       <ListGroup heading="Miami" items={items} onSelectItem={()=>{}} />
//     </div>
//   );
// }

// import {BsCalendarFill} from 'react-icons/bs';

// function App(){

//   return(
//     <div>
//       <BsCalendarFill/>
//     </div>
//   );
// }

// import Button from './components/Button/Button';

// function App(){

//   return(
//     <div>
//       <Button onClick= {() => {}}>My Button</Button>
//     </div>
//   );
// }
// export default App;

import Like from "./components/ListGroup/Like";

function App(){

  return(
    <div>
      <Like onClick={() => console.log('clicked')}/>
    </div>
  );
}

export default App;
