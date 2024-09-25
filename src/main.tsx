import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from './components/ui/toaster';
import './index.css';
import ContactPage from './pages/contact';
import Home from './pages/home';
import ProjectsPage from './pages/projects';
import WorkPage from './pages/projects/[slug]';

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
  }
]);

createRoot(document.getElementById('root')!).render(
  <div>
    <RouterProvider router={router} />
    <Toaster />

  </div>
)
