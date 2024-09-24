import resList from "../utils/mockdata";
import RestaurantCard, {withpromotedlabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listofRestaurant, setlistofrestaurant] = useState([]);
  const [filteredListofRestaurant, setfilteredListofrestaurant] = useState([]);
  const [searchText, setsearchText] = useState("");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);

  const PromotedRestaurantCard = withpromotedlabel(RestaurantCard);


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
      <div className="filter flex">
        <div className="p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black rounded-lg px-3 py-1"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
            /> 
          <button
            className="px-3 py-1 bg-blue-200 rounded-lg m-2"
            onClick={() => {
              const filteredListSearch = listofRestaurant.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase()); //Making both names to lowercase so that it matches
              });
              setfilteredListofrestaurant(filteredListSearch);
            }}
          >
            Search
          </button>
        </div>
        <div className="p-4 m-4">
        <button
          className="px-3 py-1 bg-blue-200 rounded-md m-2"
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
        <div className="p-4 m-4">
          <label>User Name : </label>
          <input className="px-3 py-1 rounded-md m-2 border border-black" onChange={(e)=>{data.setUserName(e.target.value)}}/>
        </div>
      </div>

      <div className="res-container flex flex-wrap">
        {filteredListofRestaurant.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.avgRating>4 ? <PromotedRestaurantCard {...restaurant}/> : <RestaurantCard {...restaurant}/>}
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
