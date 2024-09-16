import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Header = () => {
  // let btnName = "Login"
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);

  return (
    <div className="flex justify-between shadow-lg mb-2 bg-gray-200">
      <div className="img-container">
        <img className="w-24" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-1">
          <li className="px-4">Online Status : {onlineStatus ? "✔️" : "❌"}</li>
          <li className="px-4"><Link to={"/"}>Home</Link></li>
          <li className="px-4"><Link to={"/about"}>About Us</Link></li>
          <li className="px-4"><Link to={"/contact"}>Contact Us</Link></li>
          <li className="px-4"><Link to={"/grocery"}>Grocery</Link></li>
          <li className="px-4">Cart</li>
          <button
            className="px-4"
            onClick={() => {
              btnName==="Login" ? setbtnName("Logout"):setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-semibold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
