import contactBgImage from "@/assets/images/Group-contact.88a9997e.png";
import leaf from "@/assets/images/leaf-contact.5032316c.png";
import { config } from "@/utils/constants";
import { motion } from "framer-motion";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdDialpad } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const fadeUp = {
	hidden: { opacity: 0, y: 50 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: i * 0.2 },
	}),
};

const ContactSection = () => {
	return (
		<section
			className='bg-primary/10 bg-no-repeat bg-right bg-cover min-h-screen py-16 px-3'
			style={{
				backgroundImage: `url(${contactBgImage})`,
			}}
		>
			<div className='container mx-auto flex flex-col xl:flex-row gap-10 xl:gap-16 items-start overflow-hidden'>
				{/* Left Content */}
				<motion.div
					className='relative w-full xl:w-1/2 space-y-6'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={fadeUp}
					custom={0}
				>
					<h3 className='text-primary tracking-widest uppercase'>
						Get in touch
					</h3>
					<h1 className='text-xl md:text-2xl lg:text-3xl xl:text-[40px] font-secondary font-semibold text-secondary leading-tight max-sm:w-[80%]'>
						Building Beautiful Spaces Inside and Out
					</h1>
					<p className='text-xs md:text-base text-secondary font-secondary leading-tight'>
						Ready to start your landscaping or home improvement project? We're
						here to help. Contact us today for a free estimate and personalized
						consultation.
					</p>

					<motion.div
						className='relative bg-primary text-accent p-3 md:p-5 rounded-xl flex flex-col gap-5 xl:gap-8'
						variants={fadeUp}
						custom={1}
					>
						{/* Contact Items */}
						{[
							{
								icon: <SlLocationPin size={30} />,
								title: "Our Address",
								info: config.address,
							},
							{
								icon: <MdDialpad size={30} />,
								title: "Our Phone",
								info: config.phone,
							},
							{
								icon: <IoMailOpenOutline size={30} />,
								title: "Our Email",
								info: config.email,
							},
						].map((item, i) => (
							<motion.div
								className='flex items-center gap-3 md:gap-6'
								key={i}
								variants={fadeUp}
								custom={2 + i}
							>
								<div className='bg-green-600 w-14 aspect-square flex items-center justify-center rounded-xl text-accent'>
									{item.icon}
								</div>
								<div>
									<h3 className='text-xl font-bold font-secondary'>
										{item.title}
									</h3>
									<p>{item.info}</p>
								</div>
							</motion.div>
						))}

						{/* Leaf Image Animation */}
						<motion.img
							src={leaf}
							alt='leaf'
							className='absolute w-28 bottom-[-80px] right-[-60px] hidden md:block'
							initial={{ opacity: 0, rotate: -15, y: 20 }}
							whileInView={{ opacity: 1, rotate: 0, y: 0 }}
							transition={{ delay: 1.5 }}
						/>
					</motion.div>
				</motion.div>

				{/* Right Form */}
				<motion.form
					className='w-full xl:w-1/2 bg-accent rounded-xl p-6 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-6'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true }}
					variants={fadeUp}
					custom={1}
				>
					{[
						{
							label: "Name",
							id: "name",
							type: "text",
							placeholder: "Enter your name",
						},
						{
							label: "Phone",
							id: "phone",
							type: "number",
							placeholder: "Enter your phone number",
						},
						{
							label: "Email Address",
							id: "email",
							type: "email",
							placeholder: "Enter your email",
						},
					].map((input, i) => (
						<motion.div key={i} variants={fadeUp} custom={i}>
							<label htmlFor={input.id} className='font-medium mb-2 block'>
								{input.label}
							</label>
							<input
								id={input.id}
								type={input.type}
								placeholder={input.placeholder}
								className='w-full p-4 rounded border border-gray-300 focus:outline-primary'
							/>
						</motion.div>
					))}

					<motion.div variants={fadeUp} custom={3}>
						<label htmlFor='service' className='font-medium mb-2 block'>
							Services
						</label>
						<select
							id='service'
							className='w-full p-4 rounded border border-gray-300 focus:outline-primary'
						>
							<option value='service-1'>Service 1</option>
							<option value='service-2'>Service 2</option>
							<option value='service-3'>Service 3</option>
						</select>
					</motion.div>

					<motion.div className='md:col-span-2' variants={fadeUp} custom={4}>
						<label htmlFor='message' className='font-medium mb-2 block'>
							Your Message
						</label>
						<textarea
							id='message'
							rows={5}
							className='w-full p-4 rounded border border-gray-300 focus:outline-primary'
							placeholder='Write your message here...'
						/>
					</motion.div>

					<motion.button
						type='submit'
						className='md:col-span-2 w-full bg-secondary text-accent py-4 rounded-xl font-semibold hover:bg-opacity-90 transition'
						variants={fadeUp}
						custom={5}
					>
						Send Message
					</motion.button>
				</motion.form>
			</div>
		</section>
	);
};

export default ContactSection;
