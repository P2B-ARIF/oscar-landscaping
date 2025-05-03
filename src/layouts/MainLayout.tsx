import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";

const MainLayout: React.FC = () => {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, [location]);
	return (
		<main>
			<Header />
			<Outlet />
			<Footer />
		</main>
	);
};

export default MainLayout;
