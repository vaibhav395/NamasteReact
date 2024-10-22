import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-gray-100 shadow-md py-4 mb-4">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <div className="flex flex-col items-center space-x-4">
          <img className="w-16 h-auto" src={LOGO_URL} alt="Logo" />
          <h3 className="font-semibold pr-5 text-gray-700">CraveBite</h3>
        </div>

        {/* Navigation Menu */}
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-6 font-medium text-gray-700">
            <li>
              Online Status:{" "}
              <span className={onlineStatus ? "text-green-500" : "text-red-500"}>
                {onlineStatus ? "✔️" : "❌"}
              </span>
            </li>
            <li>
              <Link to="/" className="hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-500">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/grocery" className="hover:text-blue-500">
                Grocery
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-blue-500">
                Cart ({cartItems.length})
              </Link>
            </li>
          </ul>

          {/* Login/Logout Button */}
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>

          {/* Logged in User */}
          <span className="font-semibold text-gray-700">{data.loggedInUser}</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
