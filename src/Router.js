import { createBrowserRouter } from "react-router-dom";
import Movies from "./pages/Movies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Movies />,
  },
]);

export default router;
