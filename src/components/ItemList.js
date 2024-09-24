// import { URL_RESTAURANTCARD_IMG } from "../utils/constant";


import { addItem } from "../utils/cartSlice"

import { useDispatch } from "react-redux";

const ItemList = ({items})=>{

    const dispatch = useDispatch();
    const handleClick = (item)=>{
        dispatch(addItem(item));
    }
    
    return(
        <div>
            {
                items.map((item)=>{
                    return(
                    <div key={item.card.info.id} className="border-b-2 border-gray-400 p-2 m-2 text-left">
                        <div className="flex justify-between">
                            <div className="flex flex-col my-4">
                              <span className="font-semibold text-lg">{item.card.info.name}</span>
                              <span>{"₹"}{item.card.info.price?item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                            </div>
                            <div>
                                {item.card.info.imageId ? <>
                                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+item.card.info.imageId} className="w-32 rounded-lg" />
                               <button className="relative bg-gray-300 p-1 rounded-md text-sm" onClick={()=>handleClick(item)}>Add to Cart</button>
                               </> : <button className="relative bg-gray-300 p-1 rounded-md text-sm" onClick={()=>{handleClick(item)}}>Add to Cart</button>  }
                               
                            </div>
                        </div>

                        <p className="text-sm">
                            {item.card.info.description}
                        </p>
                    </div>)
                })
            }
        </div>
    )
}

export default ItemList;