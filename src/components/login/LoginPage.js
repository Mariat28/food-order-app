import Logo from "../../assets/images/fast-food.png";
import DiningIcon from "../../assets/images/dining.svg";

import FloatingInput from "../ui/FloatingInput";
import React from "react";
const LoginPage = (props) => {
  let password, username = '';
  const usernameChangeHandler =(uname)=>{
    username = uname;
  };
  const passwordChangeHandler=(upassword)=>{
    password = upassword;
  }
  const loginHandler = (event)=>{
    event.preventDefault();
    props.onLogIn(username, password);

  }
  return (
    <React.Fragment>
      <div className="flex justify-center items-center h-full bg-red-50 p-3">
        <div className="bg-white shadow-sm rounded-md h-96 w-full md:w-1/2 xl:w-2/6 border">
          <div className="flex flex-col items-center p-4 ">
            <img src={Logo} alt="logo" className="w-14 mt-2" />
            <span className="text-slate-500 mt-1 font-semibold font-sans">
              satisfy your cravings!
            </span>
          </div>
          <form className="flex flex-col gap-2 items-start p-4 w-full h-full  min-h-full" onSubmit={loginHandler}>
              <FloatingInput type="text" label="username" id="uname" onInputChange={usernameChangeHandler} />
              <FloatingInput type="password" label="password" id="upass" onInputChange={passwordChangeHandler}/>
              <div className="flex justify-between w-full">
                <div className="flex items-center text-white">
                  <input type="checkbox" id="check" className="text-white  cursor-pointer accent-yellow-650 h-3 rounded-sm w-3"/>
                  <label htmlFor="check" className="text-sm ml-1 text-slate-900">Remember me</label>
                </div>
                <div className="underline text-sm cursor-pointer text-slate-900 hover:text-yellow-650">Forgot password?</div>
              </div>
              <div className="w-full mt-2">
                <button type="submit" className="bg-yellow-650/80 w-full p-2 rounded-sm text-white flex justify-center border hover:border-yellow-650 hover:text-yellow-650 hover:bg-white">Login</button>
              </div>
          </form>
        </div>
        <div className="absolute bottom-10 left-10  w-fit invisible md:visible">
          <img src={DiningIcon} alt="dining-icon" className="lg:h-96 lg:w-72 h-48 w-48"/>
        </div>
      </div>
    </React.Fragment>
  );
};
export default LoginPage;
