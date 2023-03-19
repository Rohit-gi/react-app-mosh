import { useState } from "react";
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

// import Like from "./components/ListGroup/Like";

// function App(){

//   return(
//     <div>
//       <Like onClick={() => console.log('clicked')}/>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const [pizza, setPizza] = useState({
//     name: "Spicy Pepperoni",
//     toppings: ["Mushroom"],
//   });
// }

function App(){
  const [cart, setCart] = useState({
    discount: .1;
    items: [
      {id:1, title: 'Product 1', quantity: 1}
      {id:2, title: 'Product 2', quantity: 1}
    ]
  }
});

const handleClick = () =>{

setCart ({...cart, items: cart.items.map(item => item.id === 1 ? {...item, quantity: item.quantity + 1 }: item)})

}

export default App;
