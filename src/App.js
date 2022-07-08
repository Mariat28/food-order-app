import LoginPage from './components/login/LoginPage';
import HomePage from './components/home/HomePage';
import {useState, useEffect} from 'react';
function App() {
  const [ isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (uname, password) =>{
    setIsLoggedIn(true);
    sessionStorage.setItem('isLoggedIn', true);
    sessionStorage.setItem('username', uname);

    console.log('user details', uname, password);
  }
  useEffect(()=>{
    const userLoggedIn = sessionStorage.getItem('isLoggedIn');
    if(userLoggedIn) {
      setIsLoggedIn(true);
    console.log('effect hook');
    }
  }, []);
  const logoutHandler =()=>{
    setIsLoggedIn(false);
    sessionStorage.removeItem('isLoggedIn');
    sessionStorage.removeItem('username')
  }
  return (
    <div className="h-screen w-screen ">
      {!isLoggedIn && <LoginPage onLogIn={loginHandler}/>}
      {isLoggedIn && <HomePage onLogout={logoutHandler}/>}
    </div>
  );
}

export default App;
