import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

// 2 - pagina de erro
import ErrorPage from "./routes/ErrorPage.jsx";

// 3 - criando e configurando novas paginas
import Contact from "./routes/Contact.jsx";

// 4 - componente base
import Home from "./routes/Home.jsx";

// 9 - rotas dinâmicasS
import Product from "./routes/Product.jsx";

// 10 - nested routes
import Info from "./routes/Info.jsx"

// 13 - search params
import Search from "./routes/Search.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // 4 - componente base para páginas
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      // 9 - rotas dinâmicas
      {
        path: "products/:id",
        element: <Product />,
      },
      // 10 - nested routes
      {
        path: "products/:id/info",
        element: <Info />,
      },
      // 13 - search params
      {
        path: "search",
        element: <Search />,
      },
      // 14 - redirect
      {
        path: "teste",
        element: <Navigate to="/" />,
      },
    ],
  },
  // {
  //   path: "contact",
  //   element: <Contact />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);