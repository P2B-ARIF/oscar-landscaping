import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CiMail } from "react-icons/ci";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaFacebookF, FaLocationDot } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router";
import logo from "./../assets/images/logo-dark.png";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [show, setShow] = useState("translate-y-0");
	const [lastScrollY, setLastScrollY] = useState(0);

	const location = useLocation();
	const pathname = location.pathname;

	// Prevent body scroll when menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [isOpen]);

	const handleScroll = () => {
		const currentScrollY = window.scrollY;

		if (currentScrollY > 150) {
			setIsScrolled(true);
			// Scrolling down
			if (currentScrollY > lastScrollY && !isOpen) {
				setShow("-translate-y-[55px]");
			}
			// Scrolling up
			else {
				setShow("translate-y-0");
			}
		} else {
			setIsScrolled(false);
			setShow("translate-y-0");
		}

		setLastScrollY(currentScrollY);
	};

	// Close mobile menu when route changes
	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	useEffect(() => {
		const currentScrollY = window.scrollY;
		if (currentScrollY > 150) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
		setLastScrollY(currentScrollY);
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

	const navLists = [
		{ id: 1, title: "Home", path: "/" },
		{ id: 2, title: "About", path: "/about" },
		{ id: 3, title: "Services", path: "/services" },
		{ id: 4, title: "Service Details", path: "/service/asdf" },
		{ id: 5, title: "Blog", path: "/blog" },
		{ id: 6, title: "Blog Details", path: "/blog/asdfas" },
		{ id: 7, title: "Gallery", path: "/gallery" },
	];

	return (
		<>
			<header
				className={`${show} mx-auto fixed w-full z-40 top-0 left-0 right-0 transition-transform duration-500`}
			>
				{/* Top Bar - Glassmorphism effect */}
				<div
					className={`backdrop-blur-md transition-all duration-300 ease-in-out ${
						isScrolled || pathname !== "/"
							? "bg-primary/95 text-green-100"
							: "bg-white/80 text-gray-700"
					}`}
				>
					<div className='container mx-auto flex items-center justify-between px-5 py-3 md:py-2'>
						{/* Contact Info */}
						<div className='hidden md:flex items-center gap-6 text-sm font-medium'>
							<div className='flex items-center gap-2 group'>
								<div
									className={`w-8 h-8 rounded-full flex items-center justify-center ${
										isScrolled || pathname !== "/"
											? "bg-white/10"
											: "bg-primary/10"
									} group-hover:scale-110 transition-transform duration-300`}
								>
									<FaLocationDot
										size={14}
										className={
											isScrolled || pathname !== "/"
												? "text-white"
												: "text-primary"
										}
									/>
								</div>
								<span className='hidden lg:inline group-hover:translate-x-1 transition-transform duration-300'>
									2072 Pinnickinick Street, WA 98370
								</span>
								<span className='lg:hidden group-hover:translate-x-1 transition-transform duration-300'>
									WA 98370
								</span>
							</div>
							<div className='flex items-center gap-2 group'>
								<div
									className={`w-8 h-8 rounded-full flex items-center justify-center ${
										isScrolled || pathname !== "/"
											? "bg-white/10"
											: "bg-primary/10"
									} group-hover:scale-110 transition-transform duration-300`}
								>
									<CiMail
										size={16}
										className={
											isScrolled || pathname !== "/"
												? "text-white"
												: "text-primary"
										}
									/>
								</div>
								<span className='group-hover:translate-x-1 transition-transform duration-300'>
									info@website.com
								</span>
							</div>
						</div>

						{/* Social Icons */}
						<div className='flex items-center gap-4 mx-auto md:mx-0'>
							{[FaFacebookF, FaInstagram, FaTwitter].map((Icon, index) => (
								<a
									key={index}
									href='#'
									className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
										isScrolled || pathname !== "/"
											? "bg-white/10 hover:bg-white/20"
											: "bg-primary/10 hover:bg-primary/20"
									}`}
								>
									<Icon size={15} />
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Main Navigation - Glassmorphism effect */}
				<div
					className={`backdrop-blur transition-all duration-300 ease-in-out ${
						isScrolled || pathname !== "/"
							? "bg-white/95 shadow-lg"
							: pathname === "/"
							? "bg-white/30"
							: "bg-white/95"
					}`}
				>
					<nav className='container mx-auto transition-all duration-300 ease-linear'>
						<div className='flex items-center justify-between py-4 px-5'>
							{/* Logo */}
							<div className='flex items-center z-50'>
								<NavLink to='/' className='relative'>
									<img
										src={logo || "/placeholder.svg"}
										alt='Logo'
										className={`h-12 md:h-14 object-contain transition-all duration-300`}
									/>
								</NavLink>
							</div>

							{/* Desktop Navigation */}
							<div className='hidden lg:flex items-center gap-1 xl:gap-10'>
								{navLists.map((nav, i) => (
									<NavLink
										key={i}
										to={nav.path}
										className={({ isActive }) => `
                      relative px-3 xl:px-0 py-2 text-base font-medium transition-all duration-300
                      ${
												isActive
													? "text-primary"
													: "text-gray-700 hover:text-primary"
											}
                      after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary
                      after:transform after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300
                      ${
												isActive
													? "after:scale-x-100 after:origin-bottom-left"
													: "hover:after:scale-x-100 hover:after:origin-bottom-left"
											}
                    `}
									>
										{nav.title}
									</NavLink>
								))}
							</div>

							{/* Quote Button & Menu Toggle */}
							<div className='flex items-center justify-baseline gap-4 z-50'>
								<NavLink
									to='/contact'
									className={`hidden md:flex items-center gap-2 text-white font-medium bg-primary hover:bg-primary/90 py-3 px-6 rounded-full transition-all duration-300 group ${
										isOpen ? "opacity-50" : "opacity-100"
									}`}
								>
									<span>Get A Quote</span>
									<svg
										className='w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M14 5l7 7m0 0l-7 7m7-7H3'
										/>
									</svg>
								</NavLink>

								{/* Hamburger Button */}
								<button
									onClick={() => setIsOpen(!isOpen)}
									className={`flex lg:hidden flex-col items-center justify-center w-12 h-12 rounded-full z-50 transition-all duration-500 ${
										isOpen
											? "bg-white"
											: isScrolled || pathname !== "/"
											? "bg-primary text-white"
											: "bg-primary/10 text-primary hover:bg-primary hover:text-white"
									}`}
									aria-label='Toggle menu'
								>
									<span
										className={`block w-5 h-0.5 transition-all duration-300 ease-out ${
											isOpen
												? "bg-primary rotate-45 translate-y-0.5"
												: "bg-current mb-1"
										}`}
									></span>
									<span
										className={`block w-5 h-0.5 transition-all duration-300 ease-out ${
											isOpen ? "bg-primary opacity-0" : "bg-current"
										}`}
									></span>
									<span
										className={`block w-5 h-0.5 transition-all duration-300 ease-out ${
											isOpen
												? "bg-primary -rotate-45 -translate-y-0.5"
												: "bg-current mt-1"
										}`}
									></span>
								</button>
							</div>
						</div>
					</nav>
				</div>
			</header>

			{/* Full Screen Mobile Menu Overlay */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className='fixed inset-0 bg-primary z-30 flex items-center justify-center overflow-hidden mt-20 pt-10'
					>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2, duration: 0.5 }}
							className='absolute top-5 right-5 text-white/50 text-sm'
						>
							<div className='flex items-center gap-2'>
								<div className='w-2 h-2 rounded-full bg-white/50'></div>
								<span>MENU</span>
							</div>
						</motion.div>

						<div className='container mx-auto px-8 py-10 flex flex-col md:flex-row gap-5'>
							{/* Navigation Links */}
							<div className='w-full md:w-1/2'>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.1, duration: 0.5 }}
									className='mb-5'
								>
									<h3 className='text-green-300 text-sm font-medium mb-6'>
										NAVIGATION
									</h3>
								</motion.div>

								<nav className='space-y-1'>
									{navLists.map((nav, i) => (
										<motion.div
											key={i}
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
										>
											<NavLink
												to={nav.path}
												className={({ isActive }) => `
                          group flex items-center py-1.5 text-xl font-bold transition-colors duration-300
                          ${
														isActive
															? "text-white"
															: "text-white/70 hover:text-white"
													}
                        `}
											>
												<span className='w-0 group-hover:w-6 h-px bg-white mr-0 group-hover:mr-3 transition-all duration-300'></span>
												{nav.title}
											</NavLink>
										</motion.div>
									))}
								</nav>
							</div>

							{/* Contact Information */}
							<div className='w-full md:w-1/2'>
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.3, duration: 0.5 }}
									className='mb-8'
								>
									<h3 className='text-green-300 text-sm font-medium mb-6'>
										GET IN TOUCH
									</h3>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.4, duration: 0.5 }}
									className='space-y-6 mb-5'
								>
									<div className='flex items-start gap-4'>
										<div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1'>
											<FaLocationDot size={16} className='text-white' />
										</div>
										<div>
											<h4 className='text-white/50 text-xs mb-1'>ADDRESS</h4>
											<p className='text-white text-sm'>
												2072 Pinnickinick Street, WA 98370
											</p>
										</div>
									</div>

									<div className='flex items-start gap-4'>
										<div className='w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-1'>
											<CiMail size={20} className='text-white' />
										</div>
										<div>
											<h4 className='text-white/50 text-xs mb-1'>EMAIL</h4>
											<p className='text-white text-sm'>info@website.com</p>
										</div>
									</div>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.5, duration: 0.5 }}
								>
									<NavLink
										to='/contact'
										className='inline-flex items-center gap-3 text-white font-medium bg-white/10 hover:bg-white/20 py-4 px-8 rounded-full transition-all duration-300'
									>
										<span>Get A Quote</span>
										<svg
											className='w-5 h-5'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M14 5l7 7m0 0l-7 7m7-7H3'
											/>
										</svg>
									</NavLink>
								</motion.div>

								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.6, duration: 0.5 }}
									className='mt-5 flex items-center gap-4'
								>
									{[FaFacebookF, FaInstagram, FaTwitter].map((Icon, index) => (
										<a
											key={index}
											href='#'
											className='w-10 h-10 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-all duration-300'
										>
											<Icon size={16} />
										</a>
									))}
								</motion.div>
							</div>
						</div>

						{/* Decorative Elements */}
						<div className='absolute bottom-10 left-10 w-20 h-20 rounded-full border border-white/10'></div>
						<div className='absolute top-20 right-20 w-40 h-40 rounded-full border border-white/10'></div>
						<div className='absolute bottom-40 right-10 w-10 h-10 rounded-full bg-white/5'></div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Header;
