import logo from "@/assets/images/logo-dark.png";
import footerBgImage from "@/assets/images/mask-services.ff3f1d31.png";
import { config } from "@/utils/constants";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { NavLink } from "react-router";

export default function Footer() {
	return (
		<footer
			className='relative bg-secondary text-accent border-t border-tertiary'
			style={{
				backgroundImage: `url(${footerBgImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				transform: "scaleX(-1)",
			}}
		>
			<div
				style={{ transform: "scaleX(-1)" }}
				className='max-w-7xl mx-auto px-4 py-12 pb-8'
			>
				<div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
					{/* Logo and Description */}
					<div className='col-span-1 md:col-span-2'>
						<NavLink to='/' className='flex items-center mb-4'>
							{/* <Flame className='text-tertiary' size={32} /> */}
							{/* <span className='text-xl md:text-2xl lg:text-3xl font-bold text-tertiary'>
								
							</span> */}
							<img
								src={logo}
								alt=''
								className='w-[200px] bg-white p-3 rounded-xl'
							/>
						</NavLink>
						<p className='text-base text-accent/90 mb-4 w-[80%] md:w-2/3'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex
							vero incidunt facere dolor. Necessitatibus odit quo velit
							cupiditate officiis eius sed in magnam perferendis
						</p>
						<div className='flex space-x-4'>
							<a
								href='#'
								className='text-tertiary hover:text-primary transition-colors'
							>
								<Facebook size={22} />
							</a>
							<a
								href='#'
								className='text-tertiary hover:text-primary transition-colors'
							>
								<Instagram size={22} />
							</a>
							<a
								href='#'
								className='text-tertiary hover:text-primary transition-colors'
							>
								<Twitter size={22} />
							</a>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='text-xl font-semibold mb-4 text-tertiary'>
							Quick Links
						</h3>
						<ul className='space-y-2'>
							<li>
								<NavLink
									to='/'
									className='text-accent/90 hover:text-[#FFB200] transition-colors'
								>
									Home
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/menu'
									className='text-accent/90 hover:text-[#FFB200] transition-colors'
								>
									Menu
								</NavLink>
							</li>
							{/* <li>
								<Link
									to='/about-us'
									className='text-accent/90 hover:text-[#FFB200] transition-colors'
								>
									About Us
								</Link>
							</li> */}
							<li>
								<NavLink
									to='/gallery'
									className='text-accent/90 hover:text-[#FFB200] transition-colors'
								>
									Gallery
								</NavLink>
							</li>
							<li>
								<NavLink
									to='/contact-us'
									className='text-accent/90 hover:text-[#FFB200] transition-colors'
								>
									Contact
								</NavLink>
							</li>
						</ul>
					</div>

					{/* Contact Information */}
					<div>
						<h3 className='text-xl font-semibold mb-4 text-tertiary'>
							Contact Us
						</h3>
						<ul className='space-y-1 text-accent/90'>
							<li>{config.address}</li>
							{/* <li>Kabab City, ST 12345</li> */}
							<li>Phone: {config.phone}</li>
							{config.office && <li>Manager: {config.office}</li>}
							<li>Email: {config.email}</li>
						</ul>
					</div>
				</div>

				{/* Copyright */}
				<div className='mt-8 pt-8 border-t border-gray-200 text-center text-sm text-accent/90'>
					<p>
						&copy; {new Date().getFullYear()} TU Oscar Landascapping. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
