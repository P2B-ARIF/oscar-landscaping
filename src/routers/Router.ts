import MainLayout from "@/layouts/MainLayout";
import AboutPage from "@/pages/AboutPage";
import BlogDetailsPage from "@/pages/BlogDetailsPage";
import BlogPage from "@/pages/BlogPage";
import ContactPage from "@/pages/ContactPage";
import GalleryPage from "@/pages/GalleryPage";
import Home from "@/pages/Home";
import NotFoundPage from "@/pages/NotFoundPage";
import ServiceDetailsPage from "@/pages/ServiceDetailsPage";
import ServicesPage from "@/pages/ServicesPage";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
	{
		path: "/",
		Component: MainLayout,
		children: [
			{ index: true, Component: Home },
			{ path: "about", Component: AboutPage },
			{ path: "services", Component: ServicesPage },
			{ path: "service/:id", Component: ServiceDetailsPage },
			{ path: "blog", Component: BlogPage },
			{ path: "blog/:id", Component: BlogDetailsPage },
			{ path: "contact", Component: ContactPage },
			{ path: "gallery", Component: GalleryPage },
			{ path: "*", Component: NotFoundPage },
		],
	},
	{ path: "*", Component: NotFoundPage },
]);
