import { URL_RESTAURANTCARD_IMG } from "../utils/constant";
const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    props?.info; //Good practice at industry level
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300 h-[475px]">
      <img
        className="res-logo rounded-md"
        alt="res-logo"
        src={URL_RESTAURANTCARD_IMG + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};

export const withpromotedlabel = (RestaurantCard)=>{
  return (props)=>{
    return(
      <div>
        <label className="absolute bg-slate-700 text-white m-2 px-2 py-1 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
