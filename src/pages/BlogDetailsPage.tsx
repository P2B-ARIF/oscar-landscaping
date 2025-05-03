import bgImage from "@/assets/images/young-woman-working-glass-greenhouse.ca519f3d.jpg";
import PageContainer from "@/components/container/PageContainer";
import { IoSearchSharp } from "react-icons/io5";

const BlogDetailsPage: React.FC = () => {
	return (
		<PageContainer
			title='Blog Details'
			bgImage={bgImage}
			height='h-[230px] lg:h-[280px] xl:h-[350px]'
			overlayOpacity={0.5}
			breadcrumbs={[
				{ name: "Home", path: "/" },
				{ name: "Blog", path: "/blog" },
				{ name: "Blog Details", path: "/blog/:id" },
			]}
		>
			<div className='container mx-auto px-3 md:px-4 py-8 md:my-16'>
				<div className='flex flex-col md:flex-row gap-8'>
					{/* Main Content */}
					<div className='w-full md:w-2/3'>
						{/* Post Meta */}
						<div className='flex items-center gap-4 mb-4 text-sm text-gray-600'>
							<div className='flex items-center gap-1'>
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
										d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
									/>
								</svg>
								<span>By Admin</span>
							</div>
							<div className='flex items-center gap-1'>
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
										d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
									/>
								</svg>
								<span>28 JANUARY, 2020</span>
							</div>
						</div>

						{/* Post Title */}
						<h1 className='text-2xl font-secondary md:text-3xl font-bold text-gray-800 mb-6 hover:text-primary'>
							Social media-driven trading frenzy for GameStop, AMC Entertainment
							sparks calls for scrutiny
						</h1>

						{/* Featured Image */}
						<div className='mb-6'>
							<img
								src='https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
								alt='Garden center'
								className='w-full h-[400px] object-cover rounded-md'
							/>
						</div>

						{/* Post Content */}
						<div className='prose max-w-none mb-8'>
							<p className='text-gray-600 mb-4'>
								Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
								diam nonumy eirmod tempor invidunt ut labore et dolore magna
								aliquyam erat, sed diam voluptua. At vero eos et accusam et
								justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
								takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
								dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
								eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
								sed diam voluptua. At vero eos et accusam et justo duo dolores
								et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
								est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
								consetetur sadipscing elitr, sed diam nonumy eirmod tempor
								invidunt ut labore et dolore magna aliquyam erat, sed diam
								voluptua. At vero eos et accusam
							</p>

							{/* Quote Box */}
							<div className='border-l-4 border-primary bg-primary/20 p-4 my-6'>
								<p className='text-gray-700 italic mb-2'>
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
									diam nonumy eirmod tempor invidunt ut labore et dolore magna
									aliquyam erat, sed diam voluptua.
								</p>
								<p className='text-primary font-medium'>Marilyn Gilbert</p>
							</div>

							<p className='text-gray-600 mb-6'>
								labore et dolore magna aliquyam erat, sed diam voluptua. At vero
								eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
								gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
								amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
								sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
								aliquyam erat, sed diam voluptua. At vero eos et accusam
							</p>

							{/* Second Image */}
							<div className='my-6'>
								<img
									src='https://images.unsplash.com/photo-1520052203542-d3095f1b6cf0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
									alt='Greenhouse'
									className='w-full h-[400px] object-cover rounded-md'
								/>
							</div>

							<h2 className='text-2xl font-bold font-secondary text-gray-800 mt-8 mb-4'>
								AMC Entertainment sparks calls for scrutiny
							</h2>

							<p className='text-gray-600 mb-6'>
								labore et dolore magna aliquyam erat, sed diam voluptua. At vero
								eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
								gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
								amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
								sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
								aliquyam erat, sed diam voluptua. At vero eos et accusam
							</p>

							{/* Checkmark List */}
							<ul className='space-y-2 mb-8'>
								<li className='flex items-start gap-2'>
									<svg
										className='w-5 h-5 text-primary mt-0.5 flex-shrink-0'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M5 13l4 4L19 7'
										/>
									</svg>
									<span className='text-gray-600'>
										sed diam nonumy eirmod tempor invidunt ut labore et dolore
										magna aliquyam
									</span>
								</li>
								<li className='flex items-start gap-2'>
									<svg
										className='w-5 h-5 text-primary mt-0.5 flex-shrink-0'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M5 13l4 4L19 7'
										/>
									</svg>
									<span className='text-gray-600'>
										Stet clita kasd gubergren, no sea takimata sanctus
									</span>
								</li>
								<li className='flex items-start gap-2'>
									<svg
										className='w-5 h-5 text-primary mt-0.5 flex-shrink-0'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M5 13l4 4L19 7'
										/>
									</svg>
									<span className='text-gray-600'>
										Lorem ipsum dolor sit amet, consetetur sadipscing elitr
									</span>
								</li>
							</ul>
						</div>

						{/* Tags and Share */}
						<div className='flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-t border-b border-gray-200 mb-8'>
							<div>
								<span className='text-gray-700 font-medium'>
									Related Tags :{" "}
								</span>
								<div className='inline-flex gap-2 mt-2 sm:mt-0'>
									<a href='#' className='text-gray-600 hover:text-primary'>
										Business,
									</a>
									<a href='#' className='text-gray-600 hover:text-primary'>
										Corporate,
									</a>
									<a href='#' className='text-gray-600 hover:text-primary'>
										Agency
									</a>
								</div>
							</div>
							<div className='mt-4 sm:mt-0 flex items-center'>
								<span className='text-gray-700 font-medium mr-2'>Share :</span>
								<div className='flex items-center gap-2'>
									<a href='#' className='text-gray-600 hover:text-blue-600'>
										<svg
											className='w-5 h-5'
											fill='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
										</svg>
									</a>
									<a href='#' className='text-gray-600 hover:text-blue-400'>
										<svg
											className='w-5 h-5'
											fill='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' />
										</svg>
									</a>
									<a href='#' className='text-gray-600 hover:text-red-600'>
										<svg
											className='w-5 h-5'
											fill='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018 0-3.878 3.132-7.018 7-7.018s7 3.14 7 7.018c0 3.878-3.132 7.018-7 7.018zm8.822-9.979h-2.953v-2.953H16.35v2.953h-2.953v1.659h2.953v2.953h1.659v-2.953h2.953V9.039z' />
										</svg>
									</a>
									<a href='#' className='text-gray-600 hover:text-primary'>
										<svg
											className='w-5 h-5'
											fill='currentColor'
											viewBox='0 0 24 24'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' />
										</svg>
									</a>
								</div>
							</div>
						</div>

						{/* Comments Section */}
						<div className='mb-8'>
							<h3 className='text-2xl font-bold text-gray-800 mb-6 font-secondary'>
								Comments
							</h3>

							{/* Comment 1 */}
							<div className='border p-5 rounded-xl border-gray-200 pb-6 mb-6'>
								<div className='flex gap-4'>
									<img
										src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
										alt='Laurel Wallace'
										className='w-12 h-12 rounded-full object-cover'
									/>
									<div className='flex-1'>
										<div className='flex justify-between items-center mb-2'>
											<h4 className='font-bold text-gray-800'>
												Laurel Wallace
											</h4>
											<span className='text-sm text-gray-500'>May 18</span>
										</div>
										<p className='text-gray-600 text-sm'>
											Proin ac quam et lectus vestibulum blandit. Nunc maximus
											nibh at placerat tincidunt. Nam sem lacus, ornare non ante
											sed, ultricies.
										</p>
										<button className='text-primary text-sm font-medium mt-2'>
											Reply
										</button>
									</div>
								</div>
							</div>

							{/* Comment 2 */}
							<div className='border p-5 rounded-xl border-gray-200 pb-6 mb-6'>
								<div className='flex gap-4'>
									<img
										src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80'
										alt='Bobby Hawkins'
										className='w-12 h-12 rounded-full object-cover'
									/>
									<div className='flex-1'>
										<div className='flex justify-between items-center mb-2'>
											<h4 className='font-bold text-gray-800'>Bobby Hawkins</h4>
											<span className='text-sm text-gray-500'>December 22</span>
										</div>
										<p className='text-gray-600 text-sm'>
											Pellentesque habitant morbi tristique senectus et netus et
											malesuada fames ac turpis egestas. Ut arcu libero,
											pulvinar non.
										</p>
										<button className='text-primary text-sm font-medium mt-2'>
											Reply
										</button>
									</div>
								</div>
							</div>

							{/* Comment Form */}
							<div className='mt-16'>
								<h3 className='text-2xl font-secondary font-bold text-gray-800 mb-6'>
									Leave a Reply
								</h3>
								<form>
									<div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
										<input
											type='text'
											placeholder='Your Name'
											className='w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
										/>
										<input
											type='email'
											placeholder='Your E-mail'
											className='w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
										/>
									</div>
									<textarea
										rows={6}
										placeholder='Enter comment here'
										className='w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent mb-4'
									></textarea>
									<button
										type='submit'
										className='bg-primary text-white font-medium py-3 px-6 rounded-md hover:bg-green-700 transition-colors'
									>
										Post Comment
									</button>
								</form>
							</div>
						</div>
					</div>

					{/* Sidebar */}
					<div className='w-full md:w-1/3'>
						{/* Search */}
						<div className='mb-8'>
							<h3 className='text-lg font-secondary font-bold text-gray-800 mb-4'>
								Search
							</h3>
							<div className='relative flex items-center justify-between border border-primary rounded-md overflow-hidden'>
								<input
									type='text'
									className='w-full py-3 px-4 focus:outline-none focus:ring focus:ring-primary focus:border-transparent'
									placeholder='Search...'
								/>
								<button className='h-12 w-16 flex items-center justify-center bg-primary text-white rounded rounded-l-none'>
									<IoSearchSharp size={25} />
								</button>
							</div>
						</div>

						{/* Categories */}
						<div className='mb-8'>
							<h3 className='text-lg font-bold text-gray-800 mb-4'>Category</h3>
							<div className='space-y-2'>
								{[
									"Tempor lorem interdum",
									"Auctor mattis lacus",
									"Dolor proin",
									"Pharetra amet",
									"Nullam dolor gravida",
								].map((category, index) => (
									<div
										key={index}
										className='flex items-center justify-between border border-gray-300 p-3 rounded-md hover:bg-primary hover:text-white transition-colors'
									>
										<span className=''>{category}</span>
										<svg
											className='w-5 h-5 text-gray-400'
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
								{[
									{
										image:
											"https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
										title: "Integer et facilisis urna, nullam condimentum",
										date: "10 October",
									},
									{
										image:
											"https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
										title: "Nunc scelerisque tincidunt tristique",
										date: "25 July",
									},
									{
										image:
											"https://images.unsplash.com/photo-1534710961216-75c88202f43e",
										title: "Cras eu elit congue, plac erat eleifend nisi",
										date: "21 December",
									},
								].map((news, index) => (
									<div
										key={index}
										className='flex gap-3 p-3 border border-gray-300 rounded-lg'
									>
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
						<div className='bg-primary text-white rounded-md overflow-hidden'>
							<img
								src='https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80'
								alt='Gardener'
								className='w-full h-48 object-cover'
							/>
							<div className='p-7 space-y-7'>
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

export default BlogDetailsPage;
