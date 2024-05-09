import AdminRoot from "../Pages/Admin/AdminRoot";
import Dashboard from "../Pages/Admin/Dashboard/Dashboard";
import Products from "../Pages/Admin/Products/Products";
import Error from "../Pages/Error/Error";
// import Detail from "../Pages/Site/Detail/Detail";
import Home from "../Pages/Site/Home/Home";
import Shop from "../Pages/Site/Shop/Shop";
import SiteRoot from "../Pages/Site/SiteRoot";
import AddProducts from "../Pages/Admin/AddProducts/AddProducts";

const ROUTES = [
  {
    path: "/",
    element: <SiteRoot/>,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      // {
      //   path: "/:id",
      //   element: <Detail />,
      // },
      {
        path: "*",
        element: <Error />,
      }
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot/>,
    children: [
        {
            path:"",
            element: <Dashboard/>
        },
        {
            path:"products",
            element: <Products/>
        },
        {
            path:"add",
            element: <AddProducts/>

        },
    ]

  }
];

export default ROUTES;
