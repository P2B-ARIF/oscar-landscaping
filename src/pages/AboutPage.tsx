import aboutBgImage from "@/assets/images/Group-contact.88a9997e.png";
import leaf from "@/assets/images/leaf-contact.5032316c.png";
import bgImage from "@/assets/images/young-woman-working-glass-greenhouse.ca519f3d.jpg";
import rightImage from "@/assets/images/young-workers-greenhouse-feed-flowers-concept-caring-plants.5fe1a959.jpg";
import PageContainer from "@/components/container/PageContainer";
import AboutSection from "@/components/views/AboutSection";
import ExperienceSection from "@/components/views/ExperienceSection";
import WorkProcessSection from "@/components/views/WorkProcessSection";
import { config } from "@/utils/constants";
import { GiGrassMushroom } from "react-icons/gi";
import { IoMailOpenOutline } from "react-icons/io5";
import { MdDialpad } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const AboutPage = () => {
	return (
		<PageContainer
			title='About Us'
			breadcrumbs={[
				{ name: "Home", path: "/" },
				{ name: "About Us", path: "/about" },
			]}
			bgImage={bgImage}
			height='h-[230px] lg:h-[280px] xl:h-[350px]'
			overlayOpacity={0.5}
		>
			<div className='md:mt-16'>
				<AboutSection />
				<div
					style={{
						backgroundImage: `url(${aboutBgImage})`,
						backgroundSize: "contain",
						backgroundPosition: "center",
						backgroundRepeat: "no-repeat",
					}}
					className='py-10 md:py-20 lg:pt-28 xl:mt-32 bg-primary/10 relative overflow-hidden px-3'
				>
					<div className='container mx-auto grid grid-cols-6'>
						<div className='col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-2'>
							<div className='space-y-6'>
								<h3 className='text-primary tracking-widest mb-5 uppercase'>
									Get in touch
								</h3>
								<h1 className='text-2xl font-bold md:text-3xl xl:text-[40px] text-secondary font-secondary leading-tight'>
									Your Full-Service Home and Landscape Experts
								</h1>
								<p className='text-slate-800 font-medium'>
									Ready to start your landscaping or home improvement project?
									We're here to help. Contact us today for a free estimate and
									personalized consultation.
								</p>
							</div>

							<div className='grid grid-cols-5 my-10 items-center'>
								<div className='col-span-2 flex items-center justify-center rounded-full w-[100px] md:w-[150px] aspect-square bg-accent text-primary relative'>
									<GiGrassMushroom size={50} />

									<div className='absolute -bottom-2 left-[50%] whitespace-nowrap -translate-x-[50%] py-2 md:py-3 px-5 md:px-10 text-accent rounded-full bg-primary uppercase flex items-center max-sm:text-sm justify-center text-center'>
										25 Years
									</div>
								</div>
								<p className='col-span-3 text-lg font-secondary'>
									Lorem Ipsum is simply dummy text of free available market type
									setting industry
								</p>
							</div>

							<div className='h-[250px] rounded-xl overflow-hidden md:hidden'>
								<img
									src={rightImage}
									alt=''
									className='w-full h-full object-cover'
								/>
							</div>

							<div className='bg-primary text-accent p-10 rounded-xl md:rounded-tr-none md:rounded-br-none mt-5 md:mt-28'>
								<div className='relative flex flex-col gap-5'>
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
									].map((item, index) => (
										<div key={index} className='flex items-center gap-6'>
											<div className='text-accent w-[60px] aspect-square flex items-center justify-center bg-green-600 rounded-xl p-2'>
												{/* <SlLocationPin size={30} /> */}
												{item.icon}
											</div>
											<div className='space-y-1'>
												<h3 className='text-xl font-bold font-secondary'>
													{/* Our Address */}
													{item.title}
												</h3>
												<h4>{item.info}</h4>
											</div>
										</div>
									))}

									{/* image bg */}
									<img
										src={leaf}
										alt=''
										className='absolute opacity-50 -bottom-[90px] -right-[80px]'
									/>
								</div>
							</div>
						</div>
						<div className='col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-4 max-md:hidden'>
							<img
								src={rightImage}
								alt=''
								className='absolute -top-[100px] -right-[50px] w-1/2 h-[40%] md:h-[80%] object-cover'
							/>
						</div>
					</div>
				</div>
				<WorkProcessSection />
				<ExperienceSection />
			</div>
		</PageContainer>
	);
};

export default AboutPage;
