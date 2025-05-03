import bgImage from "@/assets/images/the-man-working-tree.jpg";

interface StatsProps {
	name: string;
	value: string;
}

const ExperienceSection: React.FC = () => {
	const stats: StatsProps[] = [
		{
			name: "Years of Experience",
			value: "10+",
		},
		{
			name: "Projects Completed",
			value: "100+",
		},
		{
			name: "Happy Clients",
			value: "50+",
		},
	];

	return (
		<div className='bg-primary/10 max-sm:mt-20'>
			<div className='container mx-auto py-20 md:py-32 grid grid-cols-7 px-3 gap-3 md:gap-5'>
				<div className='relative col-span-7 md:col-span-5'>
					<img src={bgImage} alt='' className='w-full h-full object-cover' />

					<div className='w-full max-w-[400px] mx-auto absolute -top-10 md:top-2/3 -translate-y-2/3 -left-[20px] md:-left-[50px]'>
						<div
							className='w-full h-1 bg-primary'
							aria-hidden='true'
							role='separator'
						></div>

						<div className='p-5 md:p-6 lg:p-8 space-y-4 bg-accent'>
							<h2 className='text-2xl md:text-3xl lg:text-[40px] font-medium text-dark font-secondary leading-tight px-4 mx-auto'>
								We are nice people with a lot of experience.
							</h2>

							<p className='text-base md:text-lg text-dark/80 leading-relaxed'>
								Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex
								nymphs. Waltz, bad nymph
							</p>
						</div>
					</div>
				</div>
				<div className='col-span-7 md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-3 md:gap-5'>
					{stats.map((stat, i) => (
						<div
							key={i}
							className='p-3 md:p-5 lg:p-10 bg-primary text-accent rounded-xl'
						>
							<h2 className='text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold'>
								{stat.value}
								{/* 10+ */}
							</h2>
							<h5 className='text-base md:text-lg font-medium'>
								{stat.name}
								{/* Year Of Experience */}
							</h5>
						</div>
					))}
					{/* <div className='p-3 md:p-5 lg:p-10 bg-primary text-accent rounded-xl'>
						<h2 className='text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold'>
							10K
						</h2>
						<h5 className='text-base md:text-lg font-medium'>
							Happy Customers
						</h5>
					</div>
					<div className='p-3 md:p-5 lg:p-10 bg-primary text-accent rounded-xl'>
						<h2 className='text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold'>
							100%
						</h2>
						<h5 className='text-base md:text-lg font-medium'>Satisfaction</h5>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default ExperienceSection;
