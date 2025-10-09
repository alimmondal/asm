import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
// import "@material-tailwind/react/tailwind.css";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { router } from "./routes/routes.js";
import AuthProvider from "./AuthProvider/AuthProvider.js";
ReactDOM.createRoot(document.getElementById("root")).render(_jsx(React.StrictMode, { children: _jsxs(AuthProvider, { children: [_jsx(Toaster, {}), _jsx(RouterProvider, { router: router, future: {
                    v7_startTransition: true,
                } })] }) }));
