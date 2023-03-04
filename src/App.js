import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootSiteLayout from "./pages/RootSite";
import RootAdminLayout from "./pages/RootSite";
import AdminPage from "./pages/admin/home/Home";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/site/home/Home";
import { tokenLoader } from "./utils/auth";
import "./App.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootSiteLayout />,
        errorElement: <ErrorPage />,
        id: "root",
        loader: tokenLoader,
        children: [
            { index: true, element: <HomePage /> },
        ],
    },
    {
        path: "/root_admin",
        element: <RootAdminLayout />,
        errorElement: <ErrorPage />,
        id: "root_admin",
        loader: tokenLoader,
        children: [
            { index: true, element: <AdminPage /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
