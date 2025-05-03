import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface FinishedWorkStationProps {
	// finisherLists: FinishedWorkProps[];
	TeamSection: any;
}

const FinishedWorkSection = ({ TeamSection }: FinishedWorkStationProps) => {
	// For scroll-triggered animations
	const controls = useAnimation();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, amount: 0.1 });

	// Trigger animations when section comes into view
	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [isInView, controls]);

	// Animation variants
	// const containerVariants = {
	// 	hidden: { opacity: 0 },
	// 	visible: {
	// 		opacity: 1,
	// 		transition: {
	// 			staggerChildren: 0.2,
	// 			delayChildren: 0.3,
	// 		},
	// 	},
	// };

	// const itemVariants = {
	// 	hidden: { y: 50, opacity: 0 },
	// 	visible: (i: any) => ({
	// 		y: 0,
	// 		opacity: 1,
	// 		transition: {
	// 			delay: 0.1 * i,
	// 			duration: 0.6,
	// 			ease: [0.4, 0, 0.2, 1],
	// 		},
	// 	}),
	// };

	return (
		<div className='relative' ref={ref}>
			<TeamSection />

			{/* <div className='relative px-4 sm:px-6 pt-10 md:py-16 mt-10 md:mt-0 md:-mb-20 lg:-mb-24'>
				<motion.div
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 lg:gap-10 container mx-auto'
					variants={containerVariants}
					initial='hidden'
					animate={controls}
				>
					{finisherLists?.map((finisher: FinishedWorkProps, index: number) => (
						<motion.div
							key={index}
							className='relative overflow-hidden rounded-xl shadow-lg group -top-60'
							variants={itemVariants}
							custom={index}
							whileHover={{ y: -5, transition: { duration: 0.3 } }}
						>
							<motion.div
								className='relative aspect-[3/4] overflow-hidden'
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.5 }}
							>
								<img
									src={finisher.image || "/placeholder.svg"}
									alt={finisher.title}
									className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
								/>

								{/* Overlay gradient for better text visibility 
								<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
							</motion.div>

							{/* Info panel - Always visible on mobile, animated on desktop 
							<motion.div
								className='flex items-center justify-between w-full absolute bottom-0 left-0 bg-accent p-4 sm:p-5 md:rounded-t-xl sm:translate-y-0
                  md:group-hover:translate-y-0 md:translate-y-full transition-transform duration-300 ease-out'
								initial={{ y: "100%" }}
								animate={{ y: ["100%", "0%"] }}
								transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
								whileHover={{ y: 0 }}
							>
								<div>
									<h1 className='font-bold text-lg sm:text-xl font-secondary text-gray'>
										Finished Work
									</h1>
									<h4 className='font-medium text-sm sm:text-base text-gray-800 mb-0 sm:mb-2 line-clamp-1'>
										{finisher.title}
									</h4>
								</div>
								<NavLink
									to={finisher.link}
									className='p-2 sm:p-3 bg-primary text-accent rounded-lg flex items-center justify-center'
								>
									<motion.div
										whileHover={{ x: 3 }}
										transition={{ type: "spring", stiffness: 400 }}
									>
										<BiRightArrowAlt size={20} />
									</motion.div>
								</NavLink>
							</motion.div>

							{/* Mobile touch indicator 
							<div className='absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-1.5 rounded-full opacity-70 md:hidden'>
								<svg
									className='w-4 h-4 text-gray-700'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122'
									/>
								</svg>
							</div>
						</motion.div>
					))}
				</motion.div>
			</div>
			 */}
		</div>
	);
};

export default FinishedWorkSection;
