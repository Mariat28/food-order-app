import LoginPage from './components/login/LoginPage';
import HomePage from './components/home/HomePage';
import {useState, useEffect} from 'react';
function App() {
  const [ isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (uname, password) =>{
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('username', uname);

    console.log('user details', uname, password);
  }
  useEffect(()=>{
    const userLoggedIn = localStorage.getItem('isLoggedIn');
    if(userLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <div className="h-screen w-screen">
      {!isLoggedIn && <LoginPage onLogIn={loginHandler}/>}
      {isLoggedIn && <HomePage/>}
    </div>
  );
}

export default App;
