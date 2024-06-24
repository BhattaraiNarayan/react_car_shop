import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { carData } from "../utils/data";
import "../index.css";

const ProductDetail = () => {
  const { id } = useParams();
  const car = carData.find((car) => car.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(car?.images[0] || "");
  const navigate = useNavigate();

  if (!car) {
    return <div>Product not found</div>;
  }

  const handleBuyNow = () => {
    navigate(`/react_car_shop/checkout/${id}`);
  };

  return (
    <div className="mx-16 mt-10 pb-24">
      <div className="w-full flex flex-row">
        <div className="w-full flex flex-col">
          <img src={currentImage} alt={car.car_name} className="w-full h-96" />
          <div className="mt-4 flex flex-row">
            {car.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${car.car_name} view ${index + 1}`}
                className={`w-16 h-16 object-cover rounded-lg cursor-pointer mx-2 ${
                  currentImage === image ? "selected-image" : ""
                }`}
                onClick={() => setCurrentImage(image)}
              />
            ))}
          </div>
        </div>
        <div className="mt-4 ml-96 flex flex-col">
          <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3">
            {car.car_name}
          </h1>
          <p className="text-lg mt-4">Description: {car.Description}</p>
          <p className="text-lg mt-4">Year:&nbsp;{car.year}</p>
          <p className="text-lg mt-4">Speed:&nbsp;{car.top_speed}km/h</p>
          <p className="text-xl mt-4">Price:¥&nbsp;{car.price}&nbsp;万</p>
          <button
            className="w-48 bg-red-400 text-white text-xl px-4 py-2 rounded-lg mt-4"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
