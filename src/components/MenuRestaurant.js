import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const MenuRestaurant = ()=>{
    const [resInfo, setresInfo] = useState(null);


    useEffect(()=>{
        fetchMenu();
    }, []);

    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.2808422&lng=77.9960572&restaurantId=311806&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
        const json = await data.json();
        setresInfo(json.data);
        console.log(json);
    }

    if(resInfo===null)
        {
            return <Shimmer/>
        }

    return(
        <div className="menu">
            <h1>{resInfo.cards[2].card.card.info.name}</h1>
            <p>
            {resInfo.cards[2].card.card.info.cuisines.join(", ")} : {resInfo.cards[2].card.card.info.costForTwoMessage}
            </p>
            <h2>Menu</h2>
            <ul>
                <li>Veg Biryani</li>
                <li>Burgers</li>
                <li>Cold Coffee</li>
            </ul>
        </div>
    )
}

export default MenuRestaurant;