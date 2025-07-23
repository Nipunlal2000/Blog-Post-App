import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import PostComponent from "./pages/PostComponent.jsx";
import PostDetail from "./pages/PostDetail.jsx";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <NotFound />,
    children: [
      {index: true, element: <Home />},
      {path: "api/", element: <PostComponent />},
      {path: "api/:id", element: <PostDetail />},
    ],
  },
]);




export default router;