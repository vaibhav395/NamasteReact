import { URL_RESTAURANTCARD_IMG } from "../utils/constant";
const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    props?.info; //Good practice at industry level
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0"}}>
      <img
        className="res-logo"
        alt="res-logo"
        src={URL_RESTAURANTCARD_IMG + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

export default RestaurantCard;
