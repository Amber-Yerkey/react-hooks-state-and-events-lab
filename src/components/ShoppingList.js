import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

   function handleChange(event){
  //   const newList = [];
  //   const selectedCategory = foods.filter((food) => items.category !== food.category)
    setSelectedCategory(event.target.value); 
    console.log(event.target.value)
   }
 // const selectedCategory

 const newItems = items.filter((item) => {
   if (selectedCategory === "All") return true;
    return item.category === selectedCategory;
 })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
