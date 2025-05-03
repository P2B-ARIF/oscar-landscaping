import { motion } from "framer-motion";
import { Link } from "react-router";

const NotFoundPage = () => {
	return (
		<div className='mt-36 min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4 md:p-8'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className='w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden'
			>
				<div className='grid md:grid-cols-2 gap-0'>
					{/* Left Column - Visual */}
					<div className='relative h-64 md:h-auto'>
						<div className='absolute inset-0 bg-green-600 bg-opacity-10 backdrop-blur-sm z-10 flex items-center justify-center'>
							<motion.div
								initial={{ scale: 0.8, rotate: -5 }}
								animate={{ scale: 1, rotate: 0 }}
								transition={{
									duration: 0.8,
									type: "spring",
									stiffness: 100,
								}}
								className='text-[150px] md:text-[200px] font-extrabold text-white text-opacity-90 select-none'
							>
								404
							</motion.div>
						</div>
						<img
							src='https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
							alt='Garden'
							className='w-full h-full object-cover'
						/>
					</div>

					{/* Right Column - Content */}
					<div className='p-8 md:p-12 flex flex-col justify-center'>
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.3 }}
						>
							<h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>
								Oops! Lost in the Garden
							</h1>
							<div className='w-20 h-1.5 bg-green-600 rounded-full mb-6'></div>

							<p className='text-gray-600 mb-8'>
								The page you're looking for seems to have wandered off the path.
								Let's help you find your way back to our flourishing garden.
							</p>

							<div className='space-y-4'>
								<Link
									to='/'
									className='group w-full flex items-center justify-between bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-xl transition-all duration-300'
								>
									<span>Return to Homepage</span>
									<svg
										className='w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300'
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
								</Link>

								<div className='flex items-center gap-4 text-gray-500 text-sm'>
									<span>Or try these:</span>
									<div className='h-px bg-gray-200 flex-grow'></div>
								</div>

								<div className='grid grid-cols-2 gap-3'>
									<Link
										to='/blog'
										className='flex items-center justify-center gap-2 border border-gray-200 hover:border-green-600 hover:text-green-600 font-medium py-2.5 px-4 rounded-lg transition-colors'
									>
										<svg
											className='w-4 h-4'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z'
											/>
										</svg>
										<span>Blog</span>
									</Link>
									<Link
										to='/contact'
										className='flex items-center justify-center gap-2 border border-gray-200 hover:border-green-600 hover:text-green-600 font-medium py-2.5 px-4 rounded-lg transition-colors'
									>
										<svg
											className='w-4 h-4'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
											/>
										</svg>
										<span>Contact</span>
									</Link>
								</div>
							</div>
						</motion.div>

						{/* Decorative Elements */}
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 1, delay: 0.8 }}
							className='mt-12 flex items-center justify-between text-gray-400 text-xs'
						>
							<div className='flex items-center gap-2'>
								<div className='w-2 h-2 rounded-full bg-green-600'></div>
								<span>GardenGrow</span>
							</div>
							<span>&copy; {new Date().getFullYear()}</span>
						</motion.div>
					</div>
				</div>
			</motion.div>

			{/* Decorative Plants */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.5 }}
				className='absolute bottom-0 left-0 w-32 h-32 md:w-64 md:h-64 -mb-10 md:-mb-20 -ml-10 md:-ml-20 opacity-20 pointer-events-none'
			>
				<svg
					viewBox='0 0 200 200'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='w-full h-full text-green-600'
				>
					<path
						d='M40,70 Q60,30 80,70 T120,70'
						stroke='currentColor'
						strokeWidth='4'
						fill='none'
					/>
					<path
						d='M50,100 Q70,60 90,100 T130,100'
						stroke='currentColor'
						strokeWidth='4'
						fill='none'
					/>
					<path
						d='M60,130 Q80,90 100,130 T140,130'
						stroke='currentColor'
						strokeWidth='4'
						fill='none'
					/>
				</svg>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, delay: 0.7 }}
				className='absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 -mb-10 md:-mb-20 -mr-10 md:-mr-20 opacity-20 pointer-events-none'
			>
				<svg
					viewBox='0 0 200 200'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='w-full h-full text-green-600'
				>
					<circle cx='100' cy='100' r='10' fill='currentColor' />
					<circle cx='140' cy='70' r='8' fill='currentColor' />
					<circle cx='60' cy='130' r='12' fill='currentColor' />
					<circle cx='160' cy='130' r='6' fill='currentColor' />
					<circle cx='40' cy='80' r='7' fill='currentColor' />
				</svg>
			</motion.div>
		</div>
	);
};

export default NotFoundPage;
