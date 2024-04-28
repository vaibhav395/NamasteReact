import resList from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

  const [listofRestaurant, setlistofrestaurant] = useState(resList);
  
  return (
    <div className="body">
      <div className="search-bar">
        <button
          className="filter"
          onClick={() => {
            //filter of restaurants logic here
            const filteredList = listofRestaurant.filter((res) => {
              return res.info.avgRating > 4.2
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
