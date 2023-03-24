// import ExpandableText from "./components/ExpandableText";
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

// function App() {
//     return(
//         <div>
//             <ExpandableText maxChars={10}>
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Non sed velit pariatur et iste commodi, aut repudiandae fugit blanditiis amet cumque consequatur, fugiat dignissimos nesciunt distinctio doloremque suscipit cupiditate veniam id earum ducimus tenetur deserunt nam libero! Consequatur vero accusamus reprehenderit vel modi quia architecto tenetur aperiam animi ex molestiae sint dignissimos natus ipsum, illo dolores odio? Nam dolore doloremque provident tempora, cumque sint nobis dolorem beatae. Exercitationem, sapiente vitae eum temporibus accusamus distinctio praesentium at cumque in velit quas voluptates natus tenetur quasi culpa? Ipsam est impedit rerum, commodi exercitationem blanditiis provident error reprehenderit quod? Odio, consequatur possimus. Voluptas?
//             </ExpandableText>
//         </div>
//     )
// }

// import { useState } from "react";
// import ExpenseList from "./expense-tracker/components/ExpenseList";
// import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
// import ExpenseForm from "./expense-tracker/components/ExpenseForm";
// import categories from "./expense-tracker/categories";



// function App() {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [expenses, setExpenses] = useState([
//     { id: 1, description: "aaa", amount: 10, category: "Utilities" },
//     { id: 2, description: "bbb", amount: 10, category: "Utilities" },
//     { id: 3, description: "ccc", amount: 10, category: "Utilities" },
//     { id: 4, description: "ddd", amount: 10, category: "Utilities" },
//   ]);

//   const visibleExpenses = selectedCategory
//     ? expenses.filter((e) => e.category === selectedCategory)
//     : expenses;

//   return (
//     <div>
//       <div className="mb-5">
//         <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])} />
//       </div>
//       <div className="mb-3">
//         <ExpenseFilter
//           onSelectCategory={(category) => setSelectedCategory(category)}
//         />
//       </div>
//       <ExpenseList
//         expenses={visibleExpenses}
//         onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
//       />
//     </div>
//   );
// }

// export default App;


import {useRef} from "react";

function App(){
  const ref = useRef<HTMLInputElement>(null);


  useEffect
   

  if (ref.current) ref.current.focus();

  return (
    <div>
      <input ref={ref} type="text" className="form-control"/>
    </div>
  )
}