import teamBgImage from "@/assets/images/mask-team.26ee021f.png";

export interface TeamMemberTypes {
	name: string;
	role: string;
	image: string;
}

const TeamSection = () => {
	const teamMembers = [
		{
			name: "Sarah Johnson",
			role: "Lead Landscape Designer",
			image: "https://randomuser.me/api/portraits/women/44.jpg",
		},
		{
			name: "David Miller",
			role: "Garden Maintenance Expert",
			image: "https://randomuser.me/api/portraits/men/36.jpg",
		},
		{
			name: "Emily Carter",
			role: "Horticulture Specialist",
			image: "https://randomuser.me/api/portraits/women/68.jpg",
		},
		{
			name: "James Anderson",
			role: "Irrigation Technician",
			image: "https://randomuser.me/api/portraits/men/52.jpg",
		},
		{
			name: "Linda Moore",
			role: "Botanical Consultant",
			image: "https://randomuser.me/api/portraits/women/25.jpg",
		},
	];

	return (
		<section
			className='bg-cover bg-center py-16 bg-no-repeat min-h-screen bg-secondary'
			style={{
				backgroundImage: `url(${teamBgImage})`,
			}}
		>
			<div className='container mx-auto py-10 md:py-16'>
				<div className='text-center space-y-5'>
					<h3 className='text-accent tracking-widest mb-2 uppercase'>
						Meet Our Team
					</h3>
					<h1 className='text-xl font-medium md:text-3xl xl:text-[40px] text-accent font-secondary leading-tight mx-auto'>
						Our Creative Team
					</h1>
				</div>

				<div className='container mx-auto pb-0 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-10 px-3 md:px-4 py-16 md:p-16'>
					{teamMembers.map((member, index) => (
						<div
							className='bg-accent p-5 md:p-8 md:py-10 flex flex-col items-center rounded-xl shadow-md hover:shadow-lg transition'
							key={index}
						>
							<div className='w-28 md:w-36 aspect-square overflow-hidden shadow rounded-full'>
								<img
									src={member.image}
									alt={member.name}
									className='w-full h-full object-center'
								/>
							</div>
							<div className='mt-5 md:mt-8 text-center'>
								<h3 className='text-base md:text-lg font-secondary font-semibold text-secondary'>
									{member.name}
								</h3>
								<p className='text-xs md:text-sm text-gray-600'>
									{member.role}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
