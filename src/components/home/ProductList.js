import {HiOutlineLocationMarker} from 'react-icons/hi';
const ProductList =()=>{

  return(
    <div className='p-2'>
      <div className="text-slate-600 mb-1 text-base">Delivering to</div>
      <div className='border border-slate-200 flex items-center w-1/2 pl-2 focus-within:border-yellow-650'>
        <HiOutlineLocationMarker className='text-slate-400'/>
        <input type='search' placeholder="delivery location" className="rounded-md text-sm outline-none  p-2 w-full"/>
      </div>
      {/* <div>Hello, {localStorage.getItem('username')}!</div> */}
      {/* <span className='text-xl font-semibold text-slate-700'>Fast foods</span> */}
    </div>
  )
}
export default ProductList;