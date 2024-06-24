import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";
import CheckoutPage from "./pages/CheckoutPage";
import ThankYouPage from "./pages/ThankYouPage.jsx";

const router = createBrowserRouter([
  {
    path: "/react_car_shop/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/", // relative path
        element: <Home />,
      },
      {
        path: "home", // relative path
        element: <Home />,
      },
      {
        path: "products", // relative path
        element: <Products />,
      },
      {
        path: "product/:id", // relative path
        element: <ProductDetail />,
      },
      {
        path: "checkout/:id", // relative path
        element: <CheckoutPage />,
      },
      {
        path: "thank-you", // relative path
        element: <ThankYouPage />,
      },
      {
        path: "services", // relative path
        element: <Services />,
      },
      {
        path: "contact", // relative path
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
