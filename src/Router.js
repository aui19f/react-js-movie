import { createBrowserRouter } from "react-router-dom";
import Movie from "./components/Movie";
import Detail from "./pages/Detail";
import ErrorPage from "./pages/ErrorPage";
import Movies from "./pages/Movies";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Movies />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/movie/:id",
      element: <Detail />,
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  }
);

export default router;
