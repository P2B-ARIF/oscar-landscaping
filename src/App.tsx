import { RouterProvider } from "react-router";
import { router } from "./routers/Router";

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
