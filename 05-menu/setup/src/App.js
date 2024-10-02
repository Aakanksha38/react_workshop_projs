import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ["all",...new Set(items.map((item)=>item.category))]; //it will take all the categories from items (if lunch,lunch,shakes,dinner,shakes - thn it avoid duplicates n takes 1 time)
// if u want to write something which is static or which is not present thn we can write as ===>>   "all", ...new Set(...,,..)
console.log(allCategories);  
const allCategoriesss = (items.map((item)=>item.category)); //it will take all the categories from items (if lunch,lunch,shakes,dinner,shakes - it prints all including duplicates)
console.log(allCategoriesss)
{/*1, in menu.js - destructure the prop n thn map to show all items 
    2, thn will go to categories.js file n will write code for filtering to show categories
    2, even to filter , will come to app.js -here will filter depending on what catgeries.js is giving*/}
function App() {
  const [menuItems,setMenuItems] = useState(items);  //list of all items which we want to show 
  const [categories , setCategories] = useState(allCategories); // list of categories like breakfast,lucnh, cafe,desserts ,etc
   
    {/*1. So here , we want to show only items with specific category , like if we click on dessert thn that items to be dsiplayed
    n for this we need to write a filter func*/}
    const filterItems =(category)=>{
      if(category==="all"){
        setMenuItems(items);
        return;
      }
      const newItems = items.filter((items)=>items.category===category);
      setMenuItems(newItems);
    
    };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Categories filterItems={filterItems} allCategories={categories}/>
        <Menu items={menuItems}/> {/*in menu comp we need to show items ,so v need to pass the prop i.e,menuItems*/}
      </section>
    </main>
  );
}

export default App;
