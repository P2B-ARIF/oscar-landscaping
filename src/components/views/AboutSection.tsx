import leftImage from "@/assets/images/the-girl-in-the-glasses.jpg";
import { config } from "@/utils/constants";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IoIosCall } from "react-icons/io";

const AboutSection = () => {
	// For mouse parallax effect
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	// For scroll-triggered animations
	const controls = useAnimation();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.2 });

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
			transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
		},
	};

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 1, ease: [0.4, 0, 0.2, 1] },
		},
	};

	const circleVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 0.8,
			scale: 1,
			transition: { duration: 1.2, ease: "easeOut" },
		},
	};

	const badgeVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.8,
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	return (
		<section
			ref={ref}
			className='relative w-full py-16 md:py-20 lg:py-24 overflow-hidden'
		>
			{/* Background decorative elements */}
			<motion.div
				className='absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5 }}
			/>

			<motion.div
				className='absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full -ml-48 -mb-48'
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 1.5, delay: 0.3 }}
			/>

			<div className='container mx-auto px-4 md:px-6 py-10'>
				<div className='flex flex-col lg:flex-row items-center gap-12 lg:gap-16 xl:gap-20'>
					{/* Left side with circular image and experience badge */}
					<div className='relative w-full lg:w-1/2 flex-shrink-0 mb-12 lg:mb-0'>
						<motion.div
							className='relative mx-auto max-w-[450px] lg:max-w-none'
							variants={containerVariants}
							initial='hidden'
							animate={controls}
						>
							{/* Green semi-circle */}
							<motion.div
								className='absolute -top-8 sm:-top-12 md:-top-16 right-0 sm:right-10 w-32 sm:w-40 md:w-52 h-32 sm:h-40 md:h-52 border-[12px] sm:border-[16px] md:border-[20px] border-primary rounded-full'
								variants={circleVariants}
								style={{
									x: mousePosition.x * 15,
									y: mousePosition.y * 15,
								}}
							/>

							{/* Circular image with parallax effect */}
							<motion.div
								className='relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[500px] xl:max-w-[550px] aspect-square rounded-full overflow-hidden border-8 border-accent mx-auto'
								variants={imageVariants}
								style={{
									x: mousePosition.x * -20,
									y: mousePosition.y * -20,
								}}
							>
								<img
									src={leftImage || "/placeholder.svg"}
									alt='Person with plants'
									className='w-full h-full object-cover'
								/>
							</motion.div>

							{/* Experience badge */}
							<motion.div
								className='absolute -bottom-6 sm:-bottom-8 md:-bottom-10 left-1/2 -translate-x-1/2 bg-primary text-white rounded-lg shadow-xl'
								variants={badgeVariants}
								style={{
									x: mousePosition.x * 10,
								}}
							>
								<div className='border border-accent rounded-lg w-[160px] sm:w-[180px] md:w-[200px] m-2 sm:m-3 p-2 sm:p-3 flex items-center gap-2 sm:gap-3 font-secondary'>
									<motion.p
										className='text-3xl sm:text-4xl md:text-5xl font-medium'
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ delay: 1.2, duration: 0.5 }}
									>
										5
									</motion.p>
									<p className='text-sm sm:text-base md:text-lg leading-tight font-medium'>
										Years Of experience
									</p>
								</div>
							</motion.div>
						</motion.div>
					</div>

					{/* Right side content */}
					<motion.div
						className='w-full lg:w-1/2'
						variants={containerVariants}
						initial='hidden'
						animate={controls}
					>
						{/* Section header */}
						<div className='mb-8 md:mb-10'>
							<motion.h3
								className='text-primary tracking-widest mb-2 text-sm md:text-base'
								variants={itemVariants}
							>
								ABOUT US
							</motion.h3>

							<motion.h2
								className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight font-secondary md:w-[90%]'
								variants={itemVariants}
							>
								Your Trusted Partner for Home and Landscape Transformations
							</motion.h2>

							<motion.div variants={itemVariants} className='mt-2'>
								<motion.div
									className='h-1 w-16 bg-primary rounded-full'
									initial={{ width: 0 }}
									animate={{ width: "4rem" }}
									transition={{ delay: 1, duration: 0.8 }}
								/>
							</motion.div>

							<motion.p
								className='mt-4 sm:mt-6 text-gray-600 leading-relaxed text-sm sm:text-base'
								variants={itemVariants}
							>
								At Oscar’s Home Improvements, we’re passionate about helping
								homeowners create spaces they’re proud of — both inside and out.
								With years of experience in landscaping, remodeling, painting,
								and carpentry, we offer a rare blend of outdoor and indoor
								expertise.
							</motion.p>
						</div>

						{/* Feature sections */}
						<motion.div
							variants={itemVariants}
							className='mt-8 md:mt-10 flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-4'
						>
							<div className='w-full space-y-3'>
								<h3 className='text-lg sm:text-xl font-secondary font-bold text-gray-900'>
									Our approach is simple:
								</h3>
								<div className='ml-3'>
									{[
										{
											id: 1,
											title: "Listen carefully to what you want.",
										},
										{
											id: 2,
											title:
												"Craft a clear plan tailored to your needs and budget.",
										},
										{
											id: 3,
											title:
												"Deliver outstanding results, on time and with no surprises.",
										},
									].map(item => (
										<h3 key={item.id} className='flex items-start gap-2'>
											<span className='text-lg'>•</span> {item.title}
										</h3>
									))}
								</div>
							</div>
						</motion.div>

						<motion.p
							className='mt-4 sm:mt-6 text-gray-600 leading-relaxed text-sm sm:text-base'
							variants={itemVariants}
						>
							Whether it's installing a fresh green lawn, remodeling your
							bathroom, or giving your home a whole new look with exterior
							paint, we’re here to handle every detail — so you can relax and
							enjoy the transformation.
						</motion.p>

						{/* CTA Button */}
						<motion.div
							className='mt-4 md:mt-5 inline-block'
							variants={itemVariants}
						>
							<a
								href={`tel:${config.phone}`}
								className='flex items-center gap-2 text-white font-medium bg-primary py-3 px-6 rounded-lg text-base hover:bg-opacity-90 transition shadow-lg shadow-primary/20 border-2 border-transparent'
							>
								<IoIosCall size={20} />
								Call today for a FREE consultation!
							</a>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
