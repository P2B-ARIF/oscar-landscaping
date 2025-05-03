import contactBgImage from "@/assets/images/Group-contact.88a9997e.png";
import leaf from "@/assets/images/leaf-contact.5032316c.png";
import bgImage from "@/assets/images/young-woman-working-glass-greenhouse.ca519f3d.jpg";
import PageContainer from "@/components/container/PageContainer";
import { config } from "@/utils/constants";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdDialpad } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const ContactPage = () => {
	return (
		<PageContainer
			title='Contact Us'
			breadcrumbs={[
				{
					name: "Home",
					path: "/",
				},
				{
					name: "Contact",
					path: "/contact",
				},
			]}
			bgImage={bgImage}
			overlayOpacity={0.5}
			height='h-[230px] lg:h-[280px] xl:h-[350px]'
		>
			<div
				className='py-8 sm:py-12 md:py-16 min-h-[80vh] md:min-h-screen'
				style={{
					backgroundImage: `url(${contactBgImage})`,
					backgroundSize: "cover",
					backgroundPosition: "right",
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className='container mx-auto px-3 sm:px-6 pt-8 md:py-16'>
					<div className='flex flex-col lg:flex-row max-sm:flex-col-reverse gap-8 lg:gap-12'>
						{/* Left side - Contact Info */}
						<div className='w-full lg:w-2/5 relative order-2 lg:order-1'>
							<div className='space-y-3 sm:space-y-5'>
								<h3 className='text-primary tracking-widest mb-1 sm:mb-2 uppercase text-sm sm:text-base'>
									Get in touch
								</h3>
								<h1 className='text-xl sm:text-2xl md:text-3xl xl:text-[40px] text-secondary font-secondary leading-tight'>
									We want to share our location to find us easily
								</h1>
								<p className='text-sm sm:text-base'>
									Lorem ipsum dolor sit amet, conset etur sadipscing elitr, sed
									diam noket numy eirmod tempor
								</p>
							</div>

							<div className='text-secondary rounded-xl mt-6 sm:mt-8 md:mt-10'>
								<div className='relative space-y-4 sm:space-y-6'>
									{/* Address */}
									<div className='flex items-center gap-3 sm:gap-6 border-2 sm:border-3 border-secondary/50 rounded-lg p-4 sm:p-6 bg-accent'>
										<div className='flex-shrink-0'>
											<SlLocationPin className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10' />
										</div>
										<div className='space-y-0.5 sm:space-y-1'>
											<h3 className='text-lg sm:text-xl font-bold font-secondary'>
												Our Address
											</h3>
											<h4 className='text-sm sm:text-base'>
												2 St, Loskia sripur, amukara
											</h4>
										</div>
									</div>

									{/* Phone */}
									<div className='flex items-center gap-3 sm:gap-6 border-2 sm:border-3 border-secondary/50 rounded-lg p-4 sm:p-6 bg-accent'>
										<div className='flex-shrink-0'>
											<MdDialpad className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10' />
										</div>
										<div className='space-y-0.5 sm:space-y-1'>
											<h3 className='text-lg sm:text-xl font-bold font-secondary'>
												Our Phone
											</h3>
											<h4 className='text-sm sm:text-base'>000 2324 39493</h4>
										</div>
									</div>

									{/* Email */}
									<div className='flex items-center gap-3 sm:gap-6 border-2 sm:border-3 border-secondary/50 rounded-lg p-4 sm:p-6 bg-accent'>
										<div className='flex-shrink-0'>
											<IoMailOpenOutline className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10' />
										</div>
										<div className='space-y-0.5 sm:space-y-1'>
											<h3 className='text-lg sm:text-xl font-bold font-secondary'>
												Our Email
											</h3>
											<h4 className='text-sm sm:text-base'>name@website.com</h4>
										</div>
									</div>

									{/* Leaf background - hidden on mobile, visible on larger screens */}
									<div
										className='hidden md:block absolute -bottom-[60px] -right-[60px] lg:-bottom-[90px] lg:-right-[80px] bg-primary w-[120px] h-[120px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px]'
										style={{
											maskImage: `url(${leaf})`,
											WebkitMaskImage: `url(${leaf})`,
											maskRepeat: "no-repeat",
											WebkitMaskRepeat: "no-repeat",
											maskSize: "contain",
											WebkitMaskSize: "contain",
										}}
									></div>
								</div>
							</div>
						</div>

						{/* Right side - Contact Form */}
						<div className='w-full lg:w-3/5 p-4 sm:p-8 md:p-12 lg:p-16 bg-secondary text-accent rounded-xl order-1 lg:order-2'>
							<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5'>
								{/* Name Field */}
								<div className='space-y-2 sm:space-y-3 flex flex-col'>
									<label htmlFor='name' className='text-sm sm:text-base'>
										Name{" "}
									</label>
									<input
										type='text'
										name='name'
										id='name'
										placeholder='Enter your name'
										className='p-3 sm:p-4 md:p-5 border border-gray-200 text-accent rounded focus:border-primary/20 focus:outline-primary/20 w-full'
									/>
								</div>

								{/* Phone Field */}
								<div className='space-y-2 sm:space-y-3 flex flex-col'>
									<label htmlFor='phone' className='text-sm sm:text-base'>
										Phone{" "}
									</label>
									<input
										type='number'
										name='phone'
										id='phone'
										placeholder='Enter your phone number'
										className='p-3 sm:p-4 md:p-5 border border-gray-200 text-accent rounded focus:border-primary/20 focus:outline-primary/20 w-full'
									/>
								</div>

								{/* Email Field */}
								<div className='space-y-2 sm:space-y-3 flex flex-col'>
									<label htmlFor='email' className='text-sm sm:text-base'>
										Email Address{" "}
									</label>
									<input
										type='email'
										name='email'
										id='email'
										placeholder='Enter your email'
										className='p-3 sm:p-4 md:p-5 border border-gray-200 text-accent rounded focus:border-primary/20 focus:outline-primary/20 w-full'
									/>
								</div>

								{/* Services Dropdown */}
								<div className='space-y-2 sm:space-y-3 flex flex-col'>
									<label htmlFor='service' className='text-sm sm:text-base'>
										Services{" "}
									</label>
									<select
										name='service'
										id='service'
										className='p-3 sm:p-4 md:p-5 border border-gray-200 text-accent rounded focus:border-primary/20 focus:outline-primary/20 w-full'
									>
										<option value='service-1'>Service 1</option>
										<option value='service-2'>Service 2</option>
										<option value='service-3'>Service 3</option>
									</select>
								</div>

								{/* Message Field */}
								<div className='col-span-1 sm:col-span-2 space-y-2 sm:space-y-3 flex flex-col'>
									<label htmlFor='message' className='text-sm sm:text-base'>
										Your Message{" "}
									</label>
									<textarea
										name='message'
										id='message'
										placeholder='Enter your message'
										className='p-3 sm:p-4 md:p-5 border border-gray-200 text-accent rounded focus:border-primary/20 focus:outline-primary/20 w-full h-28 sm:h-32 md:h-40'
									></textarea>
								</div>

								{/* Submit Button */}
								<button className='col-span-1 sm:col-span-2 w-full bg-accent text-primary border-2 border-accent font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-sm sm:text-base md:text-lg hover:bg-opacity-90 transition'>
									Send Message
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/*  google maps */}
			<div className='bg-white rounded-lg shadow-lg overflow-hidden'>
				<iframe
					src={config.map}
					width='100%'
					height='300'
					style={{ border: 0 }}
					allowFullScreen
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
					className='w-full h-64 sm:h-[500px]'
				></iframe>
			</div>
		</PageContainer>
	);
};

export default ContactPage;
