import serviceBgImage from "@/assets/images/mask-services.ff3f1d31.png";
import { ServiceCardProps } from "@/pages/Home";
import { FaLeaf, FaSeedling, FaTree } from "react-icons/fa"; // Just an example
import ServiceDetailsCard from "../ServiceDetailsCard";

const WhatWeDoSection = () => {
	const serviceLists = [
		{
			title: "Retaining Walls",
			description: "Strong, beautiful, and designed to stand the test of time.",
			icon: FaLeaf,
		},
		{
			title: "Sod Installation",
			description: "Instant green lawns that upgrade your yard overnight.",
			icon: FaTree,
		},
		{
			title: "Seeding & Fertilizing",
			description: "Expert care to grow thick, healthy grass year-round.",
			icon: FaTree,
		},
		{
			title: "Lawn Care & Maintenance",
			description: "Professional mowing, trimming, and seasonal cleanup.",
			icon: FaSeedling,
		},
	];

	return (
		<section
			className='py-16 min-h-screen md:mt-16 bg-primary/10'
			style={{
				backgroundImage: `url(${serviceBgImage})`,
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
			}}
		>
			<div className='container mx-auto py-16'>
				<div className='text-center space-y-5'>
					<h3 className='text-primary tracking-widest mb-2 uppercase'>
						What We Do Best
					</h3>
					<h1 className='text-xl font-medium md:text-3xl xl:text-[40px] text-secondary font-secondary leading-tight w-sm xl:w-2xl mx-auto '>
						Your Full-Service Home and Landscape Experts
					</h1>
				</div>

				<div className='container mx-auto pb-0 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-5 md:gap-10 px-5 py-16 md:p-16'>
					{serviceLists?.map((service: ServiceCardProps, index: number) => (
						<ServiceDetailsCard
							key={index}
							title={service.title}
							description={service.description}
							icon={service.icon}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhatWeDoSection;
