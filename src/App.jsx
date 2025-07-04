import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import VideoPage from "./componente/VideoPage";
import HomePage from "./componente/HomePage";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/> ,
    },
    {
      path: "/room/:id",
      element: <VideoPage/>
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
