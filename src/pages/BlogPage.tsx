import bgImage from "@/assets/images/young-woman-working-glass-greenhouse.ca519f3d.jpg";
import PageContainer from "@/components/container/PageContainer";

const BlogPage: React.FC = () => {
	const blogPosts = [
		{
			id: 1,
			image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
			date: "28 JANUARY, 2021",
			author: "admin",
			category: "Gardening",
			comments: 0,
			title:
				"Social media-driven trading frenzy for GameStop, AMC Entertainment sparks calls for scrutiny",
			excerpt:
				"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
		},
		{
			id: 2,
			image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
			date: "28 JANUARY, 2021",
			author: "admin",
			category: "Gardening",
			comments: 0,
			title:
				"Social media-driven trading frenzy for GameStop, AMC Entertainment sparks calls for scrutiny",
			excerpt:
				"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
		},
		{
			id: 3,
			image: "https://images.unsplash.com/photo-1534710961216-75c88202f43e",
			date: "28 JANUARY, 2021",
			author: "admin",
			category: "Gardening",
			comments: 0,
			title:
				"Social media-driven trading frenzy for GameStop, AMC Entertainment sparks calls for scrutiny",
			excerpt:
				"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
		},
		{
			id: 4,
			image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e",
			date: "28 JANUARY, 2021",
			author: "admin",
			category: "Gardening",
			comments: 0,
			title:
				"Social media-driven trading frenzy for GameStop, AMC Entertainment sparks calls for scrutiny",
			excerpt:
				"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata",
		},
	];

	const recentNews = [
		{
			id: 1,
			image:
				"https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
			title: "Integer et facilisis urna, nullam condimentum",
			date: "10 October",
		},
		{
			id: 2,
			image:
				"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
			title: "Nunc scelerisque tincidunt tristique",
			date: "25 July",
		},
		{
			id: 3,
			image:
				"https://images.unsplash.com/photo-1534710961216-75c88202f43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
			title: "Cras eu elit congue, plac erat eleifend nisi",
			date: "21 December",
		},
	];

	const categories = [
		"Tempor lorem interdum",
		"Auctor mattis lacus",
		"Dolor proin",
		"Pharetra amet",
		"Nullam dolor gravida",
	];

	return (
		<PageContainer
			title='Blog'
			breadcrumbs={[
				{ name: "Home", path: "/" },
				{ name: "Blog", path: "/blog" },
			]}
			bgImage={bgImage}
			overlayOpacity={0.5}
			height='h-[230px] lg:h-[280px] xl:h-[350px]'
		>
			<div className='container mx-auto px-3 md:px-4 py-8 md:my-16'>
				<div className='flex flex-col md:flex-row gap-8'>
					{/* Main Content - Blog Posts */}
					<div className='w-full md:w-2/3'>
						{blogPosts.map(post => (
							<div key={post.id} className='mb-12'>
								<div className='text-sm text-gray-600 mb-2'>
									By <span className='text-green-600'>{post.author}</span> [
									{post.category}] {post.comments} comments
								</div>

								<h2 className='text-xl font-bold text-gray-800 mb-3'>
									{post.title}
								</h2>

								<div className='relative mb-4'>
									<img
										src={post.image || "/placeholder.svg"}
										alt={post.title}
										className='w-full h-96 object-cover rounded-md'
									/>
									<div className='absolute bottom-0 left-0 bg-green-600 text-white text-xs font-bold py-1 px-3'>
										{post.date}
									</div>
								</div>

								<p className='text-gray-600 mb-4'>{post.excerpt}</p>

								<button className='flex items-center text-green-600 font-medium text-sm'>
									Read More
									<svg
										className='w-4 h-4 ml-1'
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
								</button>
							</div>
						))}

						{/* Pagination */}
						<div className='flex items-center justify-center mt-12'>
							<button className='w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-gray-600 mx-1'>
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
										d='M15 19l-7-7 7-7'
									/>
								</svg>
							</button>

							<button className='w-8 h-8 flex items-center justify-center rounded-md bg-green-600 text-white mx-1'>
								1
							</button>
							<button className='w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-gray-600 mx-1'>
								2
							</button>
							<button className='w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-gray-600 mx-1'>
								3
							</button>

							<span className='mx-2'>...</span>

							<button className='w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-gray-600 mx-1'>
								10
							</button>

							<button className='w-8 h-8 flex items-center justify-center rounded-md bg-gray-100 text-gray-600 mx-1'>
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
										d='M9 5l7 7-7 7'
									/>
								</svg>
							</button>
						</div>
					</div>

					{/* Sidebar */}
					<div className='w-full md:w-1/3'>
						{/* Search */}
						<div className='mb-8'>
							<h3 className='text-lg font-bold text-gray-800 mb-4'>Search</h3>
							<div className='relative'>
								<input
									type='text'
									className='w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent'
									placeholder='Search...'
								/>
								<div className='absolute bottom-0 left-0 w-16 h-1 bg-green-600'></div>
							</div>
						</div>

						{/* Categories */}
						<div className='mb-8'>
							<h3 className='text-lg font-bold text-gray-800 mb-4'>Category</h3>
							<div className='space-y-2'>
								{categories.map((category, index) => (
									<div
										key={index}
										className='flex items-center justify-between py-2 border-b border-gray-200'
									>
										<span className='text-gray-700'>{category}</span>
										<svg
											className='w-4 h-4 text-gray-400'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M9 5l7 7-7 7'
											/>
										</svg>
									</div>
								))}
							</div>
						</div>

						{/* Recent News */}
						<div className='mb-8'>
							<h3 className='text-lg font-bold text-gray-800 mb-4'>
								Recent News
							</h3>
							<div className='space-y-4'>
								{recentNews.map(news => (
									<div key={news.id} className='flex gap-3'>
										<img
											src={news.image || "/placeholder.svg"}
											alt={news.title}
											className='w-20 h-16 object-cover rounded-md'
										/>
										<div>
											<h4 className='text-sm font-medium text-gray-800'>
												{news.title}
											</h4>
											<div className='flex items-center text-xs text-gray-500 mt-1'>
												<svg
													className='w-3 h-3 mr-1'
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
													xmlns='http://www.w3.org/2000/svg'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={2}
														d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
													/>
												</svg>
												{news.date}
											</div>
										</div>
									</div>
								))}
							</div>
						</div>

						{/* Contact Info */}
						<div className='bg-green-600 text-white rounded-md overflow-hidden'>
							<img
								src='https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
								alt='Gardener'
								className='w-full h-48 object-cover'
							/>
							<div className='p-4 space-y-4'>
								<div className='flex items-center gap-3'>
									<div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center'>
										<svg
											className='w-5 h-5'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
										</svg>
									</div>
									<div>
										<p className='text-sm font-medium'>Call Us</p>
										<p className='text-white/90'>265-772-22289</p>
									</div>
								</div>

								<div className='flex items-center gap-3'>
									<div className='w-10 h-10 rounded-full bg-white/20 flex items-center justify-center'>
										<svg
											className='w-5 h-5'
											fill='currentColor'
											viewBox='0 0 20 20'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
											<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
										</svg>
									</div>
									<div>
										<p className='text-sm font-medium'>Our Mail</p>
										<p className='text-white/90'>yourname@mail.com</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</PageContainer>
	);
};

export default BlogPage;
