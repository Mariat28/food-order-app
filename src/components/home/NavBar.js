import { BsCart2 } from "react-icons/bs";
import Logo from "../../assets/images/burger.png";
import axios from "axios";
import { useState, useEffect } from "react";
import { ImSpinner8 } from "react-icons/im";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {FiPower} from 'react-icons/fi';

const NavBar = (props) => {
  const [restaurants, setRestaurants] = useState([]);
  // let restaurants = [];
  const [isLoading, setIsLoading] = useState(true);
  const [isRestaurants, setIsRestaurants] = useState(false);
  useEffect(() => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("language", "en_US");
    encodedParams.append("limit", "30");
    encodedParams.append("location_id", "297704");
    encodedParams.append("currency", "USD");

    const options = {
      method: "POST",
      url: "https://worldwide-restaurants.p.rapidapi.com/search",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "ac13dc5fc8msh1c3bcbb11a35a21p199833jsn222932c208f1",
        "X-RapidAPI-Host": "worldwide-restaurants.p.rapidapi.com",
      },
      data: encodedParams,
    };
    axios
      .request(options)
      .then(function (response) {
        setRestaurants(response.data.results.data);
        setIsLoading(false);
        // restaurants = response.data;
        console.log(response.data.results.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [restaurants, isLoading]);

  const showRestaurantHandler = () => {
    setIsRestaurants(!isRestaurants);
  };
  const logOutHandler =()=>{
      props.onLogoutClick();
  }
  return (
    <div className="w-full h-16 shadow-md bg-red-50 flex items-center justify-between">
      <div className="p-2 flex gap-1 items-center">
        <span className="text-slate-700 capitalize text-2xl font-serif">
          foodie app
        </span>
        <img src={Logo} alt="burger-logo" className="w-6 h-6 mt-1" />
      </div>
      <div className="flex p-2 items-center gap-2">
        <div className="relative">
          <div className="border border-slate-200 flex items-center pl-2 focus-within:border-yellow-650 rounded-full w-80 bg-white">
            <HiOutlineLocationMarker className="text-slate-400" />
            <input
              type="search"
              placeholder="search restaurant"
              className="rounded-full w-full text-sm p-2  outline-none"
              onFocus={showRestaurantHandler}
              onBlur={showRestaurantHandler}
            />
          </div>

          {isRestaurants && (
            <div className="absolute max-h-60 w-full bg-white rounded-md shadow-md mt-1 overflow-y-auto">
              {isLoading && (
                <div className="text-yellow-650 flex flex-col items-center mt-4 ">
                  <ImSpinner8 className="h-6 w-6 animate-spin"/>
                  <span className="text-sm text-slate-700 mt-1">
                    Fetching data...
                  </span>
                </div>
              )}

              {!isLoading &&(
                restaurants.map((restaurant) => (
                  <div className="px-2 py-1 text-slate-700 cursor-pointer hover:bg-gray-50">
                    <input
                      type="text"
                      value={restaurant.name}
                      key={restaurant.id}
                      className="text-sm w-full bg-transparent cursor-pointer outline-none"
                      readOnly
                    />
                  </div>
                ))
              )}
            </div>
          )}
        </div>
        <div className="flex items-center p-1">
          <BsCart2 className="w-6 h-6 text-yellow-650" />
          <span className="inline-flex bg-yellow-650 mb-5 -ml-2 text-white items-center p-2 mr-2 h-3 w-3 justify-center text-xs font-semibold rounded-full">
            2
          </span>
          <span className="hover:text-yellow-650 text-slate-700 cursor-pointer underline" onClick={logOutHandler}>Logout</span>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
