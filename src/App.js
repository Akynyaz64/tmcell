import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminPage from "./pages/admin/Admin";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import JuryPage from "./pages/Jury";
import AboutPage from "./pages/About.js";
import RulesPage from "./pages/Rules.js";
import { tokenLoader } from "./utils/auth";
import "./App.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        id: "root",
        loader: tokenLoader,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: "about",
                children: [
                    {
                        index: true,
                        element: <AboutPage />,
                    },
                    { path: "rules", element: <RulesPage /> },
                ],
            },
            { path: "jury", element: <JuryPage /> },
        ],
    },
    {
        path: "/root_admin",
        element: <AdminLayout />,
        errorElement: <ErrorPage />,
        id: "root_admin",
        loader: tokenLoader,
        children: [
            { index: true, element: <AdminPage /> },
            {
                path: "profile",
                children: [
                    {
                        index: true,
                        element: <AboutPage />,
                    },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
