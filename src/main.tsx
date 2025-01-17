import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "swiper/css";
import { Toaster } from "./components/ui/toaster";
import "./i18n";
import "./index.css";
import ContactPage from "./pages/contact";
import Home from "./pages/home";
import ProjectsPage from "./pages/projects";
import WorkPage from "./pages/projects/[slug]";
import Maintenance from "./components/maintenance";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/projects/:slug",
    element: <WorkPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {import.meta.env.VITE_MAINTENANCE_MODE ? <Maintenance /> : <>
      <RouterProvider router={router} />
      <Toaster />
    </>}
  </div>
);
