const TestimonialSection = () => {
	const testimonials = [
		{
			id: 1,
			name: "Kelly Coleman",
			position: "Nulla nec",
			image:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.",
		},
		{
			id: 2,
			name: "Philip Mendez",
			position: "Consectetur",
			image:
				"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.",
		},
		{
			id: 3,
			name: "Eugene Freeman",
			position: "Tincidunt",
			image:
				"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80",
			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.",
		},
	];

	return (
		<section className='mt-50 py-28 pb-20 container mx-auto px-16'>
			{/* <div className=' py-16 pb-52'> */}
			<div className='text-center space-y-5'>
				<h3 className='text-primary tracking-widest mb-2 uppercase'>
					Client Testimonials
				</h3>
				<h1 className='text-xl font-medium md:text-3xl xl:text-[40px] text-secondary font-secondary leading-tight w-md mx-auto'>
					What our clients say
				</h1>
			</div>

			{/* Testimonials Grid */}
			<div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-32'>
				{testimonials.map((testimonial, index) => (
					<div key={testimonial.id} className='relative'>
						{/* Profile Image - Positioned to overlap the card border */}
						<div className='absolute -top-12 left-1/2 transform -translate-x-1/2 z-10'>
							<div className='w-24 h-24 rounded-full overflow-hidden border-4 border-white'>
								<img
									src={testimonial.image || "/placeholder.svg"}
									alt={testimonial.name}
									className='w-full h-full object-cover'
								/>
							</div>
						</div>

						{/* Testimonial Card */}
						<div className='pt-16 pb-12 px-6 bg-green-50 border border-green-600 rounded-lg relative h-full'>
							{/* Background decoration for first card */}
							{/* {index === 0 && ( */}
							<div className='absolute bottom-0 left-0 w-full h-1/3 overflow-hidden opacity-20'>
								<svg
									className='w-full h-full text-green-600'
									viewBox='0 0 400 200'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M30,40 Q50,10 70,40 T110,40'
										stroke='currentColor'
										fill='none'
										strokeWidth='2'
									/>
									<path
										d='M80,60 Q100,30 120,60 T160,60'
										stroke='currentColor'
										fill='none'
										strokeWidth='2'
									/>
									<path
										d='M160,80 Q180,50 200,80 T240,80'
										stroke='currentColor'
										fill='none'
										strokeWidth='2'
									/>
									<path
										d='M240,60 Q260,30 280,60 T320,60'
										stroke='currentColor'
										fill='none'
										strokeWidth='2'
									/>
									<path
										d='M300,40 Q320,10 340,40 T380,40'
										stroke='currentColor'
										fill='none'
										strokeWidth='2'
									/>
									<circle cx='350' cy='120' r='5' fill='currentColor' />
									<circle cx='330' cy='140' r='3' fill='currentColor' />
									<circle cx='370' cy='130' r='2' fill='currentColor' />
								</svg>
							</div>
							{/* )} */}

							{/* Testimonial Text */}
							<p className='text-center text-gray-700 mb-8'>
								{testimonial.text}
							</p>

							{/* Client Name */}
							<h4 className='text-center font-bold text-gray-900 text-lg'>
								{testimonial.name}
							</h4>

							{/* Client Position */}
							<p className='text-center text-gray-600 mb-6'>
								{testimonial.position}
							</p>

							{/* Quote Icon */}
							<div className='absolute -bottom-8 left-1/2 transform -translate-x-1/2'>
								<div className='w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm'>
									<svg
										className='w-8 h-8 text-green-600'
										fill='currentColor'
										viewBox='0 0 24 24'
									>
										<path d='M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z' />
									</svg>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default TestimonialSection;

// desktop mode e thik ache. mobile mode amake highly responsive kore daw.  and dasktop and mobile mode slider carousel testimonial kore daw. ami reacjs, typescript, tailwind css use kortechi. slide crousel er jonno embla use korba

import contactBgImage from "@/assets/images/Group-contact.88a9997e.png";
import leaf from "@/assets/images/leaf-contact.5032316c.png";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdDialpad } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const ContactSection = () => {
	return (
		<div
			className='bg-cover bg-center py-16 bg-no-repeat min-h-screen bg-primary/10'
			style={{
				backgroundImage: `url(${contactBgImage})`,
				backgroundSize: "cover",
				backgroundPosition: "right",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className='container mx-auto grid grid-cols-3 gap-5 py-16'>
				<div className='col-span-1 mr-10 relative'>
					<div className='space-y-5'>
						<h3 className='text-primary tracking-widest mb-2 uppercase'>
							Get in touch
						</h3>
						<h1 className='text-2xl font-medium md:text-3xl xl:text-[40px] text-secondary font-secondary leading-tight'>
							We want to share our location to find us easily
						</h1>
					</div>
					<div className='absolute bottom-[60px] w-[520px] -right-[148px] bg-primary text-accent p-10 rounded-xl mt-10'>
						<div className='relative space-y-8'>
							<div className='flex items-center gap-6'>
								<div className='text-accent w-[60px] aspect-square flex items-center justify-center bg-green-600 rounded-xl p-2'>
									<SlLocationPin size={30} />
								</div>
								<div className='space-y-1'>
									<h3 className='text-xl font-bold font-secondary'>
										Our Address
									</h3>
									<h4>2 St, Loskia sripur, amukara</h4>
								</div>
							</div>
							<div className='flex items-center gap-6'>
								<div className='text-accent w-[60px] aspect-square flex items-center justify-center bg-green-600 rounded-xl p-2'>
									<MdDialpad size={30} />
								</div>
								<div className='space-y-1'>
									<h3 className='text-xl font-bold font-secondary'>
										Our Phone
									</h3>
									<h4>000 2324 39493</h4>
								</div>
							</div>
							<div className='flex items-center gap-6'>
								<div className='text-accent w-[60px] aspect-square flex items-center justify-center bg-green-600 rounded-xl p-2'>
									<IoMailOpenOutline size={30} />
								</div>
								<div className='space-y-1'>
									<h3 className='text-xl font-bold font-secondary'>
										Our Email
									</h3>
									<h4>name@website.com</h4>
								</div>
							</div>

							{/* image bg */}
							<img
								src={leaf}
								alt=''
								className='absolute -bottom-[90px] -right-[80px]'
							/>
						</div>
					</div>
				</div>
				<div className='col-span-2 p-16 pl-32 grid grid-cols-2 gap-5 bg-accent rounded-xl'>
					<div className='space-y-3 flex flex-col'>
						<label htmlFor='name'>Name </label>
						<input
							type='text'
							name='name'
							id='name'
							placeholder='Enter your name'
							className='p-5 border border-gray-300 rounded focus:border-primary/20 focus:outline-primary/20'
						/>
					</div>
					<div className='space-y-3 flex flex-col'>
						<label htmlFor='phone'>Phone </label>
						<input
							type='number'
							name='phone'
							id='phone'
							placeholder='Enter your phone number'
							className='p-5 border border-gray-300 rounded focus:border-primary/20 focus:outline-primary/20'
						/>
					</div>
					<div className='space-y-3 flex flex-col'>
						<label htmlFor='email'>Email Address </label>
						<input
							type='email'
							name='email'
							id='email'
							placeholder='Enter your email'
							className='p-5 border border-gray-300 rounded focus:border-primary/20 focus:outline-primary/20'
						/>
					</div>
					<div className='space-y-3 flex flex-col'>
						<label htmlFor='service'>Services </label>
						<select
							name='service'
							id='service'
							className='p-5 border border-gray-300 rounded focus:border-primary/20 focus:outline-primary/20'
						>
							<option value='service-1'>Service 1</option>
							<option value='service-2'>Service 2</option>
							<option value='service-3'>Service 3</option>
						</select>
					</div>
					<div className='col-span-2 space-y-3 flex flex-col'>
						<label htmlFor='message'>Your Message </label>
						<textarea
							name='message'
							id='message'
							className='p-5 border border-gray-300 rounded focus:border-primary/20 focus:outline-primary/20 w-full h-40'
						></textarea>
					</div>
					<button className='col-span-2 w-full bg-secondary text-accent py-4 px-6 rounded-xl text-base hover:bg-opacity-90 transition md:text-lg'>
						Send Message
					</button>
				</div>
			</div>
		</div>
	);
};

export default ContactSection;




<div
style={{
    backgroundImage: `url(${aboutBgImage})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
}}
className='pt-28 mt-32 min-h-screen bg-primary/10 relative overflow-hidden'
>
<div className='container mx-auto grid grid-cols-6'>
    <div className='col-span-2'>
        <div className='space-y-10'>
            <h3 className='text-primary tracking-widest mb-5 uppercase'>
                Get in touch
            </h3>
            <h1 className='text-2xl font-bold md:text-3xl xl:text-[40px] text-secondary font-secondary leading-tight'>
                Nurture The environment
            </h1>
            <p className='text-dark'>
                Lorem Ipsum is simply dummy text of free available market
                typesetting industry has been the industry's standard dummy
            </p>
        </div>

        <div className='grid grid-cols-5 mt-10 items-center'>
            <div className='col-span-2 flex items-center justify-center rounded-full w-[150px] aspect-square bg-accent text-primary relative'>
                <GiGrassMushroom size={50} />

                <div className='absolute -bottom-2 left-[50%] whitespace-nowrap -translate-x-[50%] py-3 px-10 text-accent rounded-full bg-primary uppercase flex items-center justify-center text-center'>
                    25 Years
                </div>
            </div>
            <p className='col-span-3 text-lg font-secondary'>
                Lorem Ipsum is simply dummy text of free available market type
                setting industry
            </p>
        </div>

        <div className='bg-primary text-accent p-10 rounded-xl rounded-tr-none rounded-br-none mt-28'>
            <div className='relative space-y-8'>
                <div className='flex items-center gap-6'>
                    <div className='text-accent w-[60px] aspect-square flex items-center justify-center bg-green-600 rounded-xl p-2'>
                        <SlLocationPin size={30} />
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-xl font-bold font-secondary'>
                            Our Address
                        </h3>
                        <h4>
                            Dolor sit amet onsectetur adipisicing elit, sed do
                            eiusmod tempor incididunt
                        </h4>
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <div className='text-accent w-[60px] aspect-square flex items-center justify-center bg-green-600 rounded-xl p-2'>
                        <MdDialpad size={30} />
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-xl font-bold font-secondary'>
                            Our Phone
                        </h3>
                        <h4>
                            Dolor sit amet onsectetur adipisicing elit, sed do
                            eiusmod tempor incididunt
                        </h4>
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <div className='text-accent w-[60px] aspect-square flex items-center justify-center bg-green-600 rounded-xl p-2'>
                        <IoMailOpenOutline size={30} />
                    </div>
                    <div className='space-y-1'>
                        <h3 className='text-xl font-bold font-secondary'>
                            Our Email
                        </h3>
                        <h4>
                            Dolor sit amet onsectetur adipisicing elit, sed do
                            eiusmod tempor incididunt
                        </h4>
                    </div>
                </div>

                {/* image bg */}
                <img
                    src={leaf}
                    alt=''
                    className='absolute opacity-50 -bottom-[90px] -right-[80px]'
                />
            </div>
        </div>
    </div>
    <div className='col-span-3'>
        <img
            src={rightImage}
            alt=''
            className='absolute -top-[100px] -right-[50px] w-1/2 h-[80%] object-cover'
        />
    </div>
</div>
</div>

atao highly responsive kore animation use koro. 

