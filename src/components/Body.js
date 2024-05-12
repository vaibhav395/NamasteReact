import resList from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurant, setlistofrestaurant] = useState([]);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.2808422&lng=77.9960572&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
  
    setlistofrestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  } 
  

  //Conditional Rendering 
  if(listofRestaurant.length===0)
    {
      return <Shimmer/>
    }

  return (
    <div className="body">
      <div className="search-bar">
        <button
          className="filter"
          onClick={() => {
            //filter of restaurants logic here
            const filteredList = listofRestaurant.filter((res) => {
              return res.info.avgRating > 4.2;
            });
            setlistofrestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listofRestaurant.map((restaurant) => {
          return <RestaurantCard key={restaurant.info.id} {...restaurant} />;
        })}

        {/* <RestaurantCard {...resList[0]}/>
          <RestaurantCard {...resList[1]}/>
          <RestaurantCard {...resList[2]}/> */}
      </div>
    </div>
  );
};

export default Body;
