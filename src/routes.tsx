import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./pages/Timeline";
import { Status } from "./pages/Status";
import { Default } from "./layouts/Default";

export const router = createBrowserRouter([
  {
    path: '/Tuitador/',
    element: <Default />,
    children: [
      {
        path: '/Tuitador/',
        element: <Timeline />
      },
      {
        path: '/Tuitador/status',
        element: <Status />
      }
    ]
  },
])