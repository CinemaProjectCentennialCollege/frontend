import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

import HomeScreen from "./home/Index";
import AuthScreen from "./auth/Index";
import LoginScreen from "./auth/Login";
import RegisterScreen from "./auth/Register";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomeScreen />,
        },
        {
            path: "/auth",
            element: <AuthScreen />,
            children: [
                {
                    path: "login",
                    element: <LoginScreen />,
                },
                {
                    path: "register",
                    element: <RegisterScreen />,
                },
            ],
        },
    ])

    return <RouterProvider router={router} />
}
