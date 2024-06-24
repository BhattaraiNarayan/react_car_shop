import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { carData } from "../utils/data";
import "../index.css";
import card from '../images/card.jpg';

const CheckoutPage = () => {
  const { id } = useParams();
  const car = carData.find((car) => car.id === parseInt(id));
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    paymentInfo: "",
  });

  if (!car) {
    return <div>Product not found</div>;
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform checkout logic here

    navigate("/react_car_shop/thank-you");
  };

  return (
    <div className="mx-16 mt-10 pb-24 flex flex-row">
      <div className="w-1/2 ml-16">
        <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3">
          Checkout
        </h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block text-lg">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full  px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full  px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg">Payment Information</label>
            <input
              type="number"
              name="paymentInfo"
              value={formData.paymentInfo}
              onChange={handleInputChange}
              className="w-full  px-4 py-2 border rounded-lg mb-4"
              required
            />
            <img
              src={card}
              alt="BankCard"
              className="w-96 h-24 object-fill rounded-lg"
            />
          </div>
          <div className="mb-4">
            <h2 className="text-lg m-4">Order Summary</h2>
            <p className="m-4 text-lg">Car:&nbsp;{car.car_name}</p>
            <p className="m-4 text-lg">Price:¥&nbsp;{car.price}&nbsp;万</p>
          </div>
          <button
            type="submit"
            className="w-full bg-red-400 text-white text-xl px-4 py-2 rounded-lg"
          >
            Place Order
          </button>
        </form>
      </div>
      <div className="mt-36 ml-28 ">
        <img src={car.images[0]} alt="my car" className="w-full h-96" />
      </div>
    </div>
  );
};

export default CheckoutPage;
