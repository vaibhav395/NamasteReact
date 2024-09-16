import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({category,showIndex, setShowIndex}) => {
  const { title, itemCards } = category?.card?.card;

  

  const handleClick = ()=>{
    setShowIndex();
  };
  
  

  return (
    <div>
      <div className="bg-gray-200 w-6/12 mx-auto my-4 p-4 shadow-lg">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span className="font-semibold text-lg"> {title} ({itemCards.length}) </span>
          <span>🔽</span>
        </div>

        
        {showIndex===true?<ItemList items = {itemCards}/>:<></>}

      </div>
    </div>
  );
};

export default RestaurantCategory;
