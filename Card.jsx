import React, {useState} from 'react'; 
import AddProducts from '../../pages/AddProducts'; 
import e from 'express';
import MasterCard from '../Integration PaySystems/MasterCard';
// create a object for it 
const Items = () => 
{
     // create a arrays for work with items 
     const [items, setItems] = useState([]); 
     // create a handle function 
    const handleDelete = (items) =>
   { 
  // create a object for filtering 
  const updateItem = items.filter((item) => itemsid !== id); 
  setItems(i=updateItem);
   }  
   const handlePay = () => 
   { 
    console.log("Pay for goods: ", items )
   }
   return ( 
    <h2>List of goods</h2> 
    <ol>  
        {items.map((index) =>{
            <li kay={index.id}>
                <button onClick={() => handleDelete(index.id)}>Видалити</button>
            </li>
        }}
        </ol>
    <MasterCard></MasterCard> 
    <button onClick={handleDelete}>Delete</button>
   )
}
