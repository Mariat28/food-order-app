import NavBar from "./NavBar";
import ProductList from "./ProductList";
const HomePage = () =>{
  return(
    <div className='h-full bg-white'>
      <NavBar/>
      <ProductList/>
    </div>
  )
}
export default HomePage;