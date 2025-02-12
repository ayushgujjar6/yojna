import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";

import Layout from "@/routes/layout";
import About from "../../yojna/src/Component/About"
import DashboardPage from "@/routes/dashboard/page";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <DashboardPage />,
                },
                {
                    path: "analytics",
                    element: <h1 className="title">Analytics</h1>,
                },
                {
                    path: "reports",
                    element: <h1 className="title">Reports</h1>,
                },
                {
                    path: "yojana",
                    element: <Yojana />,
                },
                {
                    path: "new-yojana",
                    element: <NewYojana />,
                },
                {
                    path: "inventory",
                    element: <h1 className="title">Inventory</h1>,
                },
                {
                    path: "customers",
                    element: <h1 className="title">Customers</h1>,
                },
                {
                    path: "new-customer",
                    element: <h1 className="title">New Customer</h1>,
                },
                {
                    path: "verified-customers",
                    element: <h1 className="title">Verified Customers</h1>,
                },
                {
                    path: "products",
                    element: <h1 className="title">Products</h1>,
                },
                {
                    path: "titlepage",
                    element: <About />,
                },
                {
                    path: "titlepage2",
                    element: <h1 className="title">Titile 2</h1>,
                },
                {
                    path: "titlepage3",
                    element: <h1 className="title">Titile 3</h1>,
                },
                {
                    path: "titlepage4",
                    element: <h1 className="title">Titile 4</h1>,
                },
                {
                    path: "new-product",
                    element: <h1 className="title">New Product</h1>,
                },
                {
                    path: "titlepage5",
                    element: <h1 className="title">Titile 1</h1>,
                },
                {
                    path: "titlepage6",
                    element: <h1 className="title">Titile 2</h1>,
                },
                {
                    path: "titlepage7",
                    element: <h1 className="title">Titile 3</h1>,
                },
                {
                    path: "titlepage8",
                    element: <h1 className="title">Titile 4</h1>,
                },
                {
                    path: "inventory",
                    element: <h1 className="title">Inventory</h1>,
                },
                {
                    path: "settings",
                    element: <h1 className="title">Settings</h1>,
                },
            ],
        },
    ]);

    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
