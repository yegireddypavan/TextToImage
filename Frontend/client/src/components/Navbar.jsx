import  { useContext } from 'react'
import {assets} from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
const Navbar = () => {
      const {user,setshowLogin}=useContext(AppContext)
    const navigate=useNavigate();
  return (
    <div className='flex items-center justify-between py-4'>
    <Link to='/'><img src={assets.logo} alt="" className='w-28 sm:w-32 lg:w-40'/>
    </Link> 
    <div>
        {
        user ?
        <div className='flex items-center gap-2 sm:gap-3'>
            <button  onClick={()=>navigate('/buy')}className='flex items-center gap-2 bg-blue-100 px-4 py-3 rounded-full
            hover:scale-105 sm:px-6 sm:py-3 transition-all duration-700'>
                <img className='w-5' src={assets.credit_star}/>
                <p className='text-gray-600 text-xs font-medium'>Credits left</p>
            </button>
           <p className='text-gray-600 pl-3'>hi,lalith</p>
           <div className='relative group'>
            <img src={assets.profile_icon} className='w-10 deop-shadow' alt=''/>
            <div className='absolute hidden group-hover:block top-0 right-0 z-10
            text-black rounded pt-12'>
                <ul className='list-none m-0 p-2 bg-white rounded-md 
                border text-sm'>
                    <li py-1 px-2 cursor-pointer pr-10>Logout</li>
                </ul>
                </div>
           </div>
        </div>

        :
        <div className='flex items-center gap-2 '>
            <p  onClick={()=>navigate('/buy')}
            className='cursor-pointer pr-1  ' >Pricing</p>
            <button onClick={()=>setshowLogin(true)}className='bg-zinc-800 cursor-pointer text-white px-5  py-2 rounded-full'>Login</button>
        </div>
        }
    </div>
    </div>
  )
}

export default Navbar
