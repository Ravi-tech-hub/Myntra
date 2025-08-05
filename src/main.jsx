import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Routes/App.jsx";
import "../src/css/index.css";
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Bag from "./Routes/Bag.jsx";
import Home from "./Routes/Home.jsx";
import { Provider } from "react-redux";
import store from "./store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/bag", element: <Bag></Bag> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </StrictMode>
);
