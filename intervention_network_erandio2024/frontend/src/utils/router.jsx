import { createBrowserRouter } from "react-router-dom";
import Layout from '../components/Layout/Layout.jsx'
// import Inicio from "./pages/Inicio.jsx";
// import Contactar from "./pages/Contactar.jsx";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // {
      //   path: "/",
      //   element: <Inicio />,
      // },
      // {
      //   path: "/inicio",
      //   element: <Inicio />,
      // },
      // {
      //   path: "/contactar",
      //   element: <Contactar />,
      // },
      
    ]
  }
]);

export default myRouter;
