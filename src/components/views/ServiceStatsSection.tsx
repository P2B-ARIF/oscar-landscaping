import { ServiceCardProps } from "@/pages/Home";
import React from "react";
import ServiceCard from "../ServiceCard";

// : React.FC<{ serviceLists: ServiceCardProps[] }>

const ServiceStatsSection: React.FC<{ serviceLists: ServiceCardProps[] }> = ({
	serviceLists,
}) => {
	return (
		<section className='container mx-auto pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 px-3 overflow-hidden'>
			{serviceLists?.map((service: ServiceCardProps, index: number) => (
				<ServiceCard
					key={index}
					title={service.title}
					description={service.description}
					icon={service.icon}
				/>
			))}
		</section>
	);
};

export default ServiceStatsSection;
