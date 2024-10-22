import { URL_RESTAURANTCARD_IMG } from "../utils/constant";

const RestaurantCard = ({resData}) => {
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resData; 

    


  return (
    <div data-testid="resCard" className="m-4 p-4 w-[250px] rounded-lg bg-gray-200 hover:bg-gray-300 h-[430px]">
      <img
        className="res-logo rounded-md w-full h-[200px]"
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
  return ({resData})=>{
    return(
      <div>
        <label className="absolute bg-slate-700 text-white m-2 px-2 py-1 rounded-lg">Promoted</label>
        <RestaurantCard resData = {resData}/>
      </div>
    )
  }
}

export default RestaurantCard;
