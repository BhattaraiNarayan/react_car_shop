import { NavLink } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="mx-16 mt-10 pb-24">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3">
          Thank You!
        </h1>
        <h5 className="text-lg mt-4 mb-8">
          Your order has been placed successfully.
        </h5>
        <NavLink to={"/react_car_shop/home"}>
          {" "}
          <button className="w-48 bg-red-400 py-2 border border-spacing-2">
            Go Back to Home Page
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default ThankYouPage;
