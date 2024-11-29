import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import "swiper/css";

// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// fonts and icons
import "././assets/css/icofont.min.css";
import "././assets/css/animate.css";
import "././assets/css/style.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import Shop from "./pages/Shop/Shop.jsx";
import SingleProduct from "./pages/Shop/SingleProduct.jsx";
import CartPage from "./pages/Shop/CartPage.jsx";
import Contact from "./pages/Contact/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/shop/:id",
        element: <SingleProduct></SingleProduct>
      },
      {
        path: "/cart-page",
        element: <CartPage></CartPage>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
