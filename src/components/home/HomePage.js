import NavBar from "./NavBar";
import ProductList from "./ProductList";
const HomePage = (props) =>{
  const logoutClickHandler =()=>{
    props.onLogout();
  }
  return(
    <div className='h-full bg-white'>
      <NavBar onLogoutClick ={logoutClickHandler}/>
      <ProductList/>
    </div>
  )
}
export default HomePage;