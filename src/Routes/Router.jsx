import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import App from "../Pages/Components/App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element:<App/>
            }
        ]
    },
]);


export default router;