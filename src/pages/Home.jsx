import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";


const Home = () => {
  return (
    <div className="min-h-screen bg-custom-bg bg-cover bg-center">
      <div className="py-48 ml-24 text-2xl font-semibold text-white">
        {/* <h1 className='text-4xl mb-6 font-extrabold'>Welcome to our New Car Center</h1>
        <p className='mb-4'>Let&apos;s Explore Dream Car</p> */}
        <motion.h1
          className="text-4xl mb-6 font-extrabold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 10, y: 10 }}
          transition={{ duration: 2.5, delay: 0.5}}
        >
          Welcome to our New Car Center
        </motion.h1>
        <motion.p
          className="mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Let&apos;s Explore Dream Car
        </motion.p>
        <NavLink to={"/react_car_shop/products"}>
          <button className="bg-red-400 text-white px-4 py-2 rounded-lg mt-4">
            Explore Now
          </button>
        </NavLink>
      </div>
    </div>
  );}

export default Home
