import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const MenuRestaurant = () => {
  const [resInfo, setresInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.2808422&lng=77.9960572&restaurantId=" +
        resId +
        "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );
    const json = await data.json();
    setresInfo(json);
    console.log(json);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} : {costForTwoMessage}
      </p>

      <h2>Menu</h2>
      <ul>
        {itemCards && itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - {"Rs. "}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuRestaurant;
