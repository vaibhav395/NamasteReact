import { useEffect, useState } from "react";

const useMenuRestaurant = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  },[]);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.2808422&lng=77.9960572&restaurantId=" +
        resId +
        "&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER"
    );

    const json = await data.json();
    setresInfo(json);
    console.log("This is restaurant information",json);
  };
  return resInfo;
};

export default useMenuRestaurant;
