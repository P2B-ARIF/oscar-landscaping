import bgImage from "@/assets/images/young-woman-working-glass-greenhouse.ca519f3d.jpg";
import PageContainer from "@/components/container/PageContainer";
import { IoMdArrowRoundForward } from "react-icons/io";

export interface ServiceItem {
	title: string;
	description: string;
	icon: string | any;
}

const ServiceDetailsPage = () => {
	const serviceLists = [
		{
			title: "Design brand",
			description:
				"Lorem available market standard industry. Lorem Ipsum dummy.",
			icon: IoMdArrowRoundForward,
		},
		{
			title: "Web develop",
			description:
				"Lorem available market standard industry. Lorem Ipsum dummy.",
			icon: IoMdArrowRoundForward,
		},
		{
			title: "Graphics Design",
			description: "Graphics solutions that enhance visual storytelling.",
			icon: IoMdArrowRoundForward,
		},
		{
			title: "Branding design",
			description: "Create consistent brand identity for businesses.",
			icon: IoMdArrowRoundForward,
		},
		{
			title: "UI/UX brand design",
			description: "User-friendly and appealing interfaces that connect.",
			icon: IoMdArrowRoundForward,
		},
	];

	return (
		<PageContainer
			bgImage={bgImage}
			title='Service Details'
			breadcrumbs={[
				{ name: "Home", path: "/" },
				{ name: "Services", path: "/services" },
				{ name: "Service Details", path: "/service/:id" },
			]}
			height='h-[230px] lg:h-[280px] xl:h-[350px]'
			overlayOpacity={0.5}
		>
			<div className='container mx-auto px-3 sm:px-6 lg:px-8'>
				<div className='flex flex-col lg:flex-row gap-8 my-8 sm:my-12 lg:my-20'>
					{/* Left Sidebar - Full width on mobile, 1/3 on desktop */}
					<div className='w-full lg:w-1/3 order-2 lg:order-1'>
						{/* Service Categories */}
						<div className='mb-8 flex flex-col gap-3'>
							<h3 className='text-xl font-semibold mb-2 text-gray-800'>
								Our Services
							</h3>
							{serviceLists?.map((item: ServiceItem, index: number) => (
								<div
									key={index}
									className='flex items-center justify-between p-3 sm:p-4 lg:p-5 border border-gray-300 rounded-lg hover:bg-green-50 transition-colors'
								>
									<span className='font-medium text-gray-700 text-sm sm:text-base'>
										{item.title}
									</span>
									<item.icon className='text-xl sm:text-2xl text-gray-600' />
								</div>
							))}
						</div>

						{/* Contact Us Section */}
						<div className='p-5 sm:p-6 lg:p-7 border border-gray-200 rounded-lg shadow-lg sm:shadow-xl'>
							<h2 className='text-2xl sm:text-3xl font-secondary font-bold text-gray-900 mb-4 relative'>
								Contact us
								<span className='absolute -bottom-2 left-0 w-12 h-[2px] bg-green-600'></span>
							</h2>

							<div className='space-y-4 sm:space-y-6 mt-6'>
								<div className='flex items-center gap-3'>
									<div className='w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0'>
										<svg
											className='w-4 h-4'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fillRule='evenodd'
												d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
												clipRule='evenodd'
											/>
										</svg>
									</div>
									<div>
										<p className='text-xs sm:text-sm text-gray-500'>Ceo:</p>
										<p className='text-gray-800 text-sm sm:text-base'>
											Linko Bunt
										</p>
									</div>
								</div>

								<div className='flex items-center gap-3'>
									<div className='w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0'>
										<svg
											className='w-4 h-4'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
										</svg>
									</div>
									<div>
										<p className='text-xs sm:text-sm text-gray-500'>Tel:</p>
										<p className='text-gray-800 text-sm sm:text-base'>
											012 345 678 9101
										</p>
									</div>
								</div>

								<div className='flex items-center gap-3'>
									<div className='w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0'>
										<svg
											className='w-4 h-4'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fillRule='evenodd'
												d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
												clipRule='evenodd'
											/>
										</svg>
									</div>
									<div>
										<p className='text-xs sm:text-sm text-gray-500'>
											Location:
										</p>
										<p className='text-gray-800 text-sm sm:text-base'>
											US.street
										</p>
									</div>
								</div>

								<div className='flex items-center gap-3'>
									<div className='w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0'>
										<svg
											className='w-4 h-4'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
											<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
										</svg>
									</div>
									<div>
										<p className='text-xs sm:text-sm text-gray-500'>Email:</p>
										<p className='text-gray-800 text-sm sm:text-base break-all'>
											yourmail@gmail.com
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Main Content - Full width on mobile, 2/3 on desktop */}
					<div className='w-full lg:w-2/3 order-1 lg:order-2'>
						{/* Hero Image */}
						<div className='rounded-lg overflow-hidden mb-6'>
							<img
								src='https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
								alt='Gardening'
								className='w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] object-cover'
							/>
						</div>

						{/* Main Heading */}
						<h1 className='text-2xl sm:text-3xl font-secondary font-bold text-green-800 mb-4'>
							The gardening that matters.
						</h1>

						{/* Description */}
						<p className='text-sm sm:text-base text-gray-600 mb-4'>
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
							nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
							erat, sed diam voluptua. At vero eos et accusam et justo duo
							dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
							sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
							amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
							invidunt ut labore et dolore magna aliquyam erat, sed diam
							voluptua. At vero eos et accusam et justo duo dolores et ea
						</p>

						<p className='text-sm sm:text-base text-gray-600 mb-8'>
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
							nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
							erat, sed diam voluptua. At vero eos et accusam et justo duo
							dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
							sanctus est Lorem ipsum dolor sit amet. Lorem
						</p>

						{/* Service Features */}
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8'>
							<div className='flex items-start gap-3 sm:gap-4 bg-green-50 p-3 sm:p-4 rounded-lg'>
								<div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0'>
									<svg
										className='w-5 h-5 sm:w-6 sm:h-6 text-green-600'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
										/>
									</svg>
								</div>
								<div>
									<h3 className='font-bold text-gray-900 text-sm sm:text-base'>
										Design brand
									</h3>
									<p className='text-gray-600 text-xs sm:text-sm'>
										Lorem available market standard industry Lorem Ipsum dummy.
									</p>
								</div>
							</div>

							<div className='flex items-start gap-3 sm:gap-4 bg-green-50 p-3 sm:p-4 rounded-lg'>
								<div className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0'>
									<svg
										className='w-5 h-5 sm:w-6 sm:h-6 text-green-600'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
										/>
									</svg>
								</div>
								<div>
									<h3 className='font-bold text-gray-900 text-sm sm:text-base'>
										Web develop
									</h3>
									<p className='text-gray-600 text-xs sm:text-sm'>
										Lorem available market standard industry Lorem Ipsum dummy.
									</p>
								</div>
							</div>
						</div>

						{/* Image Gallery */}
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8'>
							<div className='rounded-lg overflow-hidden'>
								<img
									src='https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
									alt='Person with plant'
									className='w-full h-40 sm:h-48 md:h-56 object-cover'
								/>
							</div>

							<div className='rounded-lg overflow-hidden'>
								<img
									src='https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80'
									alt='Garden box'
									className='w-full h-40 sm:h-48 md:h-56 object-cover'
								/>
							</div>
						</div>

						{/* Footer Quote */}
						<div className='bg-green-600 text-white p-5 sm:p-6 md:p-8 rounded-lg text-center'>
							<p className='text-xs sm:text-sm font-medium mb-2'>
								BY D. JHON SHIKON MILON
							</p>
							<p className='text-base sm:text-lg italic'>
								Lorem Ipsum simply dummy text free available market the
								typesetting industry.available standard text available market
								industry
							</p>
						</div>
					</div>
				</div>
			</div>
		</PageContainer>
	);
};

export default ServiceDetailsPage;
