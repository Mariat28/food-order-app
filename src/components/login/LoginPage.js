import Logo from "../../assets/images/fast-food.png";
import FloatingInput from "../ui/FloatingInput";
const LoginPage = () => {
  const usernameChangeHandler =(username)=>{
    console.log('username', username);
  };
  const passwordChangeHandler=(password)=>{
    console.log('password', password);
  }
  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-white shadow-sm rounded-md h-96 w-1/2 border">
        <div className="flex flex-col items-center p-4">
          <img src={Logo} alt="logo" className="w-14" />
          <span className="text-slate-500 mt-1 font-semibold font-sans">
            satisfy your cravings!
          </span>
        </div>
        <form className="flex flex-col gap-2 items-start p-4 w-full h-full  min-h-full">
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
              <button type="submit" className="bg-yellow-650/80 w-full p-2 rounded-sm text-white flex justify-center">Login</button>
            </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
