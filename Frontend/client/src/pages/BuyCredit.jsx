import { useContext } from 'react';
import { assets, plans } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import {motion} from "framer-motion"
const BuyCredit = () => {
  const {user}=useContext(AppContext)
  return (
    <motion.div className='min-h-[80vh] text-center pt-14 mb-10'
    initial={{opacity:0.2,y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}>
      <button className='border border-gray-400 px-10 py-2 rounded-full mb-6'>
        Our Plans
      </button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>
        Choose the plan
      </h1>
      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-center px-4'>
        {plans.map((item, index) => (
          <div key={index} className=' bg-white drop-shadow-sm rounded-lg py-12 px-8 text-gray-600
          hover:scale-105 transition-all duration-500 '>
            <img src={assets.logo_icon} alt='Plan icon' className='mx-auto mb-4 w-12 h-12' />
            <p className='text-xl font-semibold'>{item.id}</p>
            <p className='text-gray-600'>{item.desc}</p>
            <p className='text-lg font-bold mt-2'>
              ${item.price} / {item.credits} credits
            </p>
            <button className='w-full bg-gray-800 text-white mt-8
            text-sm rounded-md py-2.5 min-w-52'>{user ? 'Purchase' : 'Get Started'}</button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
