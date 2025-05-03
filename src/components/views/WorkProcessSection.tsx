import workBgImage from "@/assets/images/mask-wp.66d346fe.png";

// icons
import icon1 from "@/assets/icons/interior-painting.png"
import icon2 from "@/assets/icons/exterior-painting.png"
import icon3 from "@/assets/icons/bathroom-remodeling.png"
import icon4 from "@/assets/icons/deck-building.png"
import icon5 from "@/assets/icons/general-carpentry.png"

const processLists = [
	{
		title: "Interior Painting",
		description:
			"Fresh colors, smooth finishes, and clean lines for every room.",
		icon: icon1,
	},
	{
		title: "Exterior Painting",
		description: "Durable, weather-resistant paints that enhance curb appeal.",
		icon: icon2,
	},
	{
		title: "Bathroom Remodeling",
		description:
			"Modern upgrades, new fixtures, tile work, and complete makeovers.",
		icon: icon3,
	},
	{
		title: "Deck Building & Repair",
		description:
			"Custom decks and repairs built for style, safety, and lasting enjoyment.",
		icon: icon4,
	},
	{
		title: "General Carpentry",
		description: "Custom woodwork, framing, repairs, and finish work.",
		icon: icon5,
	},
];

const WorkProcessSection = () => {
	return (
		<section
			className='bg-cover bg-center py-8 sm:py-12 md:py-16 bg-no-repeat min-h-[80vh] md:min-h-screen'
			style={{
				backgroundImage: `url(${workBgImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className='container mx-auto px-4 sm:px-6 py-8 md:py-16'>
				<div className='text-center space-y-3 md:space-y-5'>
					<h3 className='text-primary tracking-widest mb-1 md:mb-2 uppercase text-sm sm:text-base'>
						Work Process
					</h3>
					<h1 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[40px] text-dark font-secondary leading-tight px-2 sm:px-5 mx-auto max-w-2xl font-medium'>
						From Fresh Paint to Fresh Sod — We’ve Got You Covered
					</h1>
				</div>

				<div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-16 md:gap-x-8 lg:gap-x-16 mt-10 md:mt-16 px-4 sm:px-0'>
					{processLists.map((process, index) => (
						<div
							key={index}
							className='flex flex-col sm:flex-row items-center sm:items-start gap-10 relative'
						>
							{/* Mobile number (visible only on small screens) */}
							<div className='sm:hidden absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-accent text-2xl font-bold rounded-full w-12 h-12 flex items-center justify-center'>
								{String(index + 1).padStart(2, "0")}
							</div>

							{/* Icon container */}
							<div className='relative rounded-lg border-4 border-primary/20 p-3 sm:p-5 w-[100px] sm:w-[120px] flex-shrink-0'>
								<img
									src={process.icon || "/placeholder.svg"}
									alt={`Process ${index + 1}`}
									className='w-full h-auto py-2'
								/>

								{/* Desktop number (hidden on small screens) */}
								<div className='hidden sm:flex bg-primary text-accent text-xl sm:text-2xl md:text-3xl font-bold absolute top-1/2 -right-10 sm:-right-12 md:-right-16 -translate-y-1/2 rounded-full w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 items-center justify-center'>
									{String(index + 1).padStart(2, "0")}
								</div>
							</div>

							{/* Content */}
							<div className='space-y-2 sm:space-y-3 text-center sm:text-left sm:ml-4 md:ml-8'>
								<h3 className='text-lg sm:text-xl md:text-2xl font-semibold font-secondary'>
									{process.title}
								</h3>
								<p className='text-sm sm:text-base leading-relaxed max-w-xs sm:max-w-none mx-auto sm:mx-0'>
									{process.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WorkProcessSection;
