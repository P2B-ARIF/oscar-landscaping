"use client";

import bgImage from "@/assets/images/young-woman-working-glass-greenhouse.ca519f3d.jpg";
import image from "@/assets/images/young-workers-greenhouse-feed-flowers-concept-caring-plants.5fe1a959.jpg";
import PageContainer from "@/components/container/PageContainer";
import { motion } from "framer-motion";
import { useState } from "react";
import { BiRightArrow } from "react-icons/bi";
import {
	FaLeaf,
	FaSeedling,
	FaSnowflake,
	FaSun,
	FaTree,
	FaWater,
} from "react-icons/fa6";
import { Link } from "react-router";

const ServicesPage = () => {
	// Track which card is being hovered
	const [hoveredCard, setHoveredCard] = useState<number | null>(null);

	const details = [
		{
			image: image,
			title: "Lawn Maintenance",
			description:
				"Regular mowing, edging, and fertilization to keep your lawn green, healthy, and beautiful all year round.",
			icon: FaLeaf,
			href: "/services/lawn-maintenance",
		},
		{
			image: image,
			title: "Garden Design",
			description:
				"Custom garden design services to transform your outdoor space into a beautiful and functional landscape.",
			icon: FaSeedling,
			href: "/services/garden-design",
		},
		{
			image: image,
			title: "Tree Services",
			description:
				"Professional tree planting, trimming, and removal services to maintain the health and beauty of your trees.",
			icon: FaTree,
			href: "/services/tree-services",
		},
		{
			image: image,
			title: "Irrigation Systems",
			description:
				"Installation and maintenance of efficient irrigation systems to keep your landscape properly watered.",
			icon: FaWater,
			href: "/services/irrigation",
		},
		{
			image: image,
			title: "Seasonal Cleanup",
			description:
				"Thorough cleanup services for fall and spring to prepare your landscape for the changing seasons.",
			icon: FaSnowflake,
			href: "/services/seasonal-cleanup",
		},
		{
			image: image,
			title: "Landscape Lighting",
			description:
				"Beautiful outdoor lighting solutions to enhance the appearance and security of your property at night.",
			icon: FaSun,
			href: "/services/landscape-lighting",
		},
	];

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.5,
			},
		},
	};

	return (
		<PageContainer
			title='Our Services'
			bgImage={bgImage}
			overlayOpacity={0.6}
			breadcrumbs={[
				{
					path: "/",
					name: "Home",
				},
				{
					path: "/services",
					name: "Our Services",
				},
			]}
			height='h-[230px] lg:h-[280px] xl:h-[350px]'
		>
			{/* Title and Description Section */}
			<div className='container mx-auto px-4 pt-12 md:py-16'>
				<div className='flex flex-col gap-5 max-w-xl mx-auto text-center mb-10 md:mb-16'>
					<h3 className='text-primary tracking-widest uppercase'>
						{" "}
						What We Offer
					</h3>
					<h1 className='text-xl md:text-2xl lg:text-3xl xl:text-[40px] font-secondary font-semibold text-secondary leading-tight max-sm:w-[80%] mx-auto'>
						Professional Landscaping Services
					</h1>
					<p className='text-xs md:text-base text-secondary font-secondary leading-tight'>
						We provide comprehensive landscaping solutions tailored to your
						specific needs. Our team of experts is dedicated to creating and
						maintaining beautiful outdoor spaces that enhance the value and
						enjoyment of your property.
					</p>
				</div>

				{/* Services Grid */}
				<motion.div
					className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10'
					variants={containerVariants}
					initial='hidden'
					animate='visible'
				>
					{details?.map((detail, index) => (
						<motion.div
							key={index}
							className='group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300'
							variants={itemVariants}
							onMouseEnter={() => setHoveredCard(index)}
							onMouseLeave={() => setHoveredCard(null)}
						>
							<div className='relative overflow-hidden h-64'>
								<img
									src={detail.image || "/placeholder.svg"}
									alt={detail.title}
									className={`w-full h-full object-cover transition-all duration-500 ${
										hoveredCard === index ? "scale-110" : "scale-100"
									}`}
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'></div>
								<div className='absolute bottom-0 left-0 w-full p-6'>
									<div className='flex items-center gap-3 mb-2'>
										<div className='bg-primary/90 p-3 rounded-lg'>
											<detail.icon size={24} className='text-white' />
										</div>
										<h3 className='text-xl font-bold text-white'>
											{detail.title}
										</h3>
									</div>
								</div>
							</div>

							<div className='p-6'>
								<p className='text-gray-600 mb-6'>{detail.description}</p>
								<Link
									to={detail.href}
									className='inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300'
								>
									Learn More <BiRightArrow className='transition-all' />
								</Link>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Call to Action Section */}
			<div className='bg-gray-50 py-16'>
				<div className='container mx-auto px-4'>
					<div className='bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between'>
						<div className='mb-6 md:mb-0 md:max-w-xl'>
							<h2 className='text-2xl md:text-3xl font-bold text-white mb-4'>
								Ready to transform your outdoor space?
							</h2>
							<p className='text-white/90'>
								Contact us today for a free consultation and estimate. Our team
								is ready to bring your landscaping vision to life.
							</p>
						</div>
						<Link
							to='/contact'
							className='bg-white text-primary px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-300'
						>
							Get a Free Quote
						</Link>
					</div>
				</div>
			</div>
		</PageContainer>
	);
};

export default ServicesPage;
