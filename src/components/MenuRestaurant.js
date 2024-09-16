import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useMenuRestaurant from "../utils/useMenuRestaurant";
import RestaurantCategory from "./RestaurantCategory";

const MenuRestaurant = () => {
  const { resId } = useParams();
  const resInfo = useMenuRestaurant(resId);
  // console.log("data",resInfo);

  const [showIndex, setShowIndex] = useState(null);


  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;


  const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
    return c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  })

  // console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} : {costForTwoMessage}
      </p>

      {/* Categories Accordian */}
      {categories.map((category, index)=>{
        return (
            <RestaurantCategory key={category.card.card.title} category = {category} showIndex={index===showIndex?true:false}
            setShowIndex = {()=>setShowIndex(index)}/>
        )
      })}

    </div>
  );
};

export default MenuRestaurant;
