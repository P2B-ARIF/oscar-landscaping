import heroImage from "@/assets/images/imgheader.b35642c0.jpg";
import rightImage from "@/assets/images/young-woman-with-their-garden-crops.png";
import { config } from "@/utils/constants";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IoIosCall } from "react-icons/io";

const HeroSection = () => {
	// For mouse parallax effect
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	// For scroll-triggered animations
	const controls = useAnimation();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.3 });

	// Handle mouse movement for parallax effect
	useEffect(() => {
		const handleMouseMove = (e: any) => {
			const { clientX, clientY } = e;
			const windowWidth = window.innerWidth;
			const windowHeight = window.innerHeight;

			// Calculate mouse position as percentage of window
			const xPos = (clientX / windowWidth - 0.5) * 2; // -1 to 1
			const yPos = (clientY / windowHeight - 0.5) * 2; // -1 to 1

			setMousePosition({ x: xPos, y: yPos });
		};

		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	// Trigger animations when section comes into view
	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [isInView, controls]);

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 20, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
		},
	};

	const buttonVariants = {
		hidden: { scale: 0.9, opacity: 0 },
		visible: {
			scale: 1,
			opacity: 1,
			transition: { duration: 0.5, ease: "easeOut" },
		},
		hover: {
			scale: 1.05,
			transition: { duration: 0.3 },
		},
	};

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 1, ease: [0.4, 0, 0.2, 1] },
		},
	};

	return (
		<section
			ref={ref}
			className='w-full bg-cover bg-center py-12 md:py-16 lg:py-20 xl:py-24 bg-no-repeat flex items-center overflow-hidden max-md:mt-16 relative'
			style={{
				backgroundImage: `url(${heroImage})`,
				minHeight: "100vh",
			}}
		>
			{/* Overlay with subtle gradient */}
			<motion.div
				className='absolute inset-0 bg-gradient-to-r from-white/40 to-transparent pointer-events-none'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
			/>

			<div className='container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 sm:gap-8 md:gap-12 items-center'>
				{/* Left Content */}
				<motion.div
					className='max-sm:mt-10 space-y-4 md:space-y-6 text-center lg:text-left z-10 relative'
					variants={containerVariants}
					initial='hidden'
					animate={controls}
				>
					<motion.div className='inline-block' variants={itemVariants}>
						<motion.h4
							className='text-primary font-medium tracking-[2px] md:tracking-widest uppercase relative inline-block'
							whileHover={{ x: 5 }}
							transition={{ type: "spring", stiffness: 400 }}
						>
							Landscaping | Home Improvement | Painting | Remodeling
						</motion.h4>
					</motion.div>

					<motion.h1
						className='text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-bold text-secondary font-secondary leading-tight'
						variants={itemVariants}
					>
						Building Beautiful Spaces Inside and Out
					</motion.h1>
					<motion.p
						className='text-xs md:text-base text-secondary font-secondary leading-tight'
						variants={itemVariants}
					>
						At Oscar’s Home Improvements, we believe your home from the curb to
						the kitchen should be a place you love. Our experienced team offers
						complete landscaping and home improvement services to help you
						transform your space, boost your property’s value, and make everyday
						living better.
					</motion.p>
					<motion.p
						className='text-xs md:text-base text-secondary font-secondary leading-tight'
						variants={itemVariants}
					>
						From lush lawns and custom retaining walls to fresh paint, stunning
						bathrooms, and expertly built decks, we do it all — with
						craftsmanship you can trust and service you'll appreciate.
					</motion.p>

					<motion.div
						className='flex sm:flex-row justify-center lg:justify-start gap-4 pt-3 sm:pt-4'
						variants={itemVariants}
					>
						<motion.div variants={buttonVariants} whileHover='hover'>
							<a
								href={`tel:${config.phone}`}
								className='flex items-center gap-2 text-white font-medium bg-primary py-3 px-6 rounded-lg text-base hover:bg-opacity-90 transition shadow-lg shadow-primary/20 border-2 border-transparent'
							>
								<IoIosCall size={20} />
								Call today for a FREE consultation!
							</a>
						</motion.div>
					</motion.div>

					{/* Additional element for modern touch */}
					<motion.div
						className='hidden md:flex md:absolute -bottom-5 left-0 items-center gap-3 text-secondary/70'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1.5, duration: 0.8 }}
					>
						<span className='w-10 h-0.5 bg-primary/50'></span>
						<p className='text-sm'>Scroll down to explore</p>
					</motion.div>
				</motion.div>

				{/* Right Content: Image with parallax effect */}
				<div className='relative h-[350px] xs:h-[350px] sm:h-[450px] lg:h-[550px] xl:h-[650px] w-full md:mt-5 z-10'>
					<motion.div
						className='w-full h-full'
						variants={imageVariants}
						initial='hidden'
						animate={controls}
						style={{
							x: mousePosition.x * -20,
							y: mousePosition.y * -20,
						}}
					>
						<img
							src={rightImage || "/placeholder.svg"}
							alt='Garden Girl'
							className='w-full h-full object-contain '
						/>
					</motion.div>

					{/* Decorative circle element */}
					<motion.div
						className='absolute -bottom-10 -right-10 w-40 h-40 md:w-64 md:h-64 rounded-full border-2 border-primary/20 hidden md:block'
						style={{
							x: mousePosition.x * -30,
							y: mousePosition.y * -30,
						}}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1, duration: 1 }}
					/>

					{/* Floating badge */}
					<motion.div
						className='absolute top-10 right-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-xl hidden md:block'
						initial={{ opacity: 0, scale: 0.8, x: 20 }}
						animate={{ opacity: 1, scale: 1, x: 0 }}
						transition={{ delay: 1.2, duration: 0.8 }}
						style={{
							x: mousePosition.x * 15,
							y: mousePosition.y * 15,
						}}
					>
						<p className='text-primary font-medium'>Eco-friendly</p>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
