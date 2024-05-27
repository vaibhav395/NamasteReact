import resList from "../utils/mockdata";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurant, setlistofrestaurant] = useState([]);
  const [filteredListofRestaurant, setfilteredListofrestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.2808422&lng=77.9960572&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);

    setlistofrestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredListofrestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional Rendering
  if (listofRestaurant.length === 0) {
    return <Shimmer />;
  }

  if(onlineStatus===false)
    {
      return (
        <h1>Looks like you are offline, Please check your internet connection !!!</h1>
      )
    }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchbox"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="searchbtn"
            onClick={() => {
              const filteredListSearch = listofRestaurant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setfilteredListofrestaurant(filteredListSearch);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            //filter of restaurants logic here
            const filteredList = listofRestaurant.filter((res) => {
              return res.info.avgRating > 4.2;
            });
            setfilteredListofrestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredListofRestaurant.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard {...restaurant} />
            </Link>
          );
        })}

        {/* <RestaurantCard {...resList[0]}/>
          <RestaurantCard {...resList[1]}/>
          <RestaurantCard {...resList[2]}/> */}
      </div>
    </div>
  );
};

export default Body;
