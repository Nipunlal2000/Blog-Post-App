import { Route, RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import "./App.css";

export default function App() {
  return (
    <>
 
      <RouterProvider router={router} />
      
    </>
  );
}
