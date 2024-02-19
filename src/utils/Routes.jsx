import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import Landing from "../components/Landing";
import LittleVenice from "../components/LittleVenice";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/venice",
    element: <App />,
  },
  {
    path: "/littleVenice",
    element: <LittleVenice />,
  },
]);

export default router;
