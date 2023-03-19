import { useState } from "react";
import ExpandableText from "./components/ExpandableText";
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

// function App(){
//   const [cart, setCart] = useState({
    //  discount: .1;
//     items: [
//       {id:1, title: 'Product 1', quantity: 1}
//       {id:2, title: 'Product 2', quantity: 1}
//     ]
//   }
// });

// const handleClick = () =>{

// setCart ({...cart, items: cart.items.map(item => item.id === 1 ? {...item, quantity: item.quantity + 1 }: item)})

// }

function App() {
    return(
        <div>
            <ExpandableText maxChars={10}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed velit pariatur et iste commodi, aut repudiandae fugit blanditiis amet cumque consequatur, fugiat dignissimos nesciunt distinctio doloremque suscipit cupiditate veniam id earum ducimus tenetur deserunt nam libero! Consequatur vero accusamus reprehenderit vel modi quia architecto tenetur aperiam animi ex molestiae sint dignissimos natus ipsum, illo dolores odio? Nam dolore doloremque provident tempora, cumque sint nobis dolorem beatae. Exercitationem, sapiente vitae eum temporibus accusamus distinctio praesentium at cumque in velit quas voluptates natus tenetur quasi culpa? Ipsam est impedit rerum, commodi exercitationem blanditiis provident error reprehenderit quod? Odio, consequatur possimus. Voluptas?
            </ExpandableText>
        </div>
    )
}

export default App;
