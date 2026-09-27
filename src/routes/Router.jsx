import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Wishlist from "../pages/Wishlist";
import ProductDetails from "../pages/ProductDetails";
import Error from "../pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    hydrateFallbackElement: <p>Loading ...</p>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "products",
        Component: Products,
      },
      {
        path: "wishlist",
        Component: Wishlist,
      },
      {
        path: "product/:id",
        Component: ProductDetails,
      },
    ],
  },
]);

export default router;
