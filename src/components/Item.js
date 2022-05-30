import React, {useState} from "react";

function Item({ name, category }) {
  const [isOn, setIsOn] = useState(false)
  const cartClass = isOn ? "in-cart" : ""
  const cartText = isOn ? "Remove From Cart" : "Add to Cart"

  function handleClick(){
    setIsOn(!isOn)
  }

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">{cartText}</button>
    </li>
  );
}

export default Item;