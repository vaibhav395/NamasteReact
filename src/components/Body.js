import resList from "../utils/mockdata";
import RestaurantCard, { withpromotedlabel } from "./RestaurantCard";
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
      // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.2808422&lng=77.9960572&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);

    setlistofrestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredListofrestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  // Conditional Rendering
  if (listofRestaurant?.length === 0) {
    return <Shimmer />;
  }

  if (onlineStatus === false) {
    return (
      <h1>
        Looks like you are offline, Please check your internet connection !!!
      </h1>
    );
  }

  return (
    <div className="pl-8">
      <div className="flex flex-wrap justify-center items-center p-4 space-x-4">
        <div className="flex items-center bg-white shadow-lg rounded-lg p-4 transition-transform hover:shadow-xl hover:scale-105">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
            placeholder="Search Restaurants..."
          />
          <button
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"

            onClick={() => {
              const filteredListSearch = listofRestaurant?.filter((res) => {
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

        <div className="flex items-center bg-white shadow-lg rounded-lg p-4 transform hover:shadow-xl hover:scale-105">
          <button
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => {
              const filteredList = listofRestaurant.filter((res) => {
                return res.info.avgRating > 4.2;
              });
              setfilteredListofrestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        <div className="flex items-center bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:shadow-xl hover:scale-105">
          <label className="mr-2 text-lg font-semibold">User Name:</label>
          <input
            className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
            onChange={(e) => {
              data.setUserName(e.target.value);
            }}
            placeholder="Enter your name"
          />
        </div>
      </div>

      <div className="res-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4">
        {filteredListofRestaurant?.map((restaurant) => {
          return (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
              className="hover:scale-105"
            >
              {restaurant.info.avgRating > 4.2 ? (
                <PromotedRestaurantCard resData={restaurant?.info} />
              ) : (
                <RestaurantCard resData={restaurant?.info} />
              )}
            </Link>
          );
        })}

        {/* Sample Cards (Uncomment if needed) */}
        {/* <RestaurantCard {...resList[0]} />
      <RestaurantCard {...resList[1]} />
      <RestaurantCard {...resList[2]} /> */}
      </div>
    </div>
  );
};

export default Body;
