import { carData } from "../utils/data"
import { Link } from "react-router-dom"

const Products = () => {
  return (
    <div className="mx-24 pb-24 ">
      <div className="container">
        {/* Heading is here */}
        <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3">
          Featured Products
        </h1>
        <h5 className="text-sm pb-10">
          The new available products are here. You can choose the best one for
          you.
        </h5>
        {/* loading the car data here  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {carData.map((car) => {
            const { id, car_name, price, images } = car;
             const mainImage = images[0]; 
            return (
              <div key={id} className="bg-white p-4 rounded-lg shadow-2xl">
                <Link to={`/react_car_shop/product/${id}`}>
                  <img
                    src={mainImage}
                    alt={car_name}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className=" mt-4 flex flex-row justify-between">
                    <p className="text-xl">{car_name}</p>
                    <p className="text-gray-500 mt-2">¥&nbsp;{price}&nbsp;万</p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );}

export default Products
