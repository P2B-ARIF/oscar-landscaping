import AboutSection from "@/components/views/AboutSection";
import CallActionSection from "@/components/views/CallActionSection";
import ContactSection from "@/components/views/ContactSection";
import FinishedWorkSection from "@/components/views/FinishedWorkSection";
import HeroSection from "@/components/views/HeroSection";
import ServiceStatsSection from "@/components/views/ServiceStatsSection";
import TeamSection from "@/components/views/TeamSection";
import TestimonialSection from "@/components/views/TestimonialSection";
import WhatWeDoSection from "@/components/views/WhatWeDoSection";
import WhyChooseUs from "@/components/views/WhyChooseUs";
import WorkProcessSection from "@/components/views/WorkProcessSection";
import { FaLeaf, FaSeedling, FaTree } from "react-icons/fa";

export interface ServiceCardProps {
	title: string;
	description: string;
	icon: React.ElementType;
}

export interface FinishedWorkProps {
	image: string;
	title: string;
	link: string;
}

const Home: React.FC = () => {
	const serviceLists = [
		{
			title: "Landscaping Services",
			description:
				"Transform your outdoors with retaining walls, sod installation, lawn care, and more to create a beautiful, functional space.",
			icon: FaLeaf,
		},
		{
			title: "Home Improvement Services",
			description:
				"Upgrade your home's beauty and value with interior and exterior painting, pressure washing, and drywall repairs.",
			icon: FaTree,
		},
		{
			title: "Remodeling & Carpentry",
			description:
				"From stunning bathroom remodels to custom deck building and expert carpentry, we bring your ideas to life.",
			icon: FaSeedling,
		},
	];

	return (
		<div className='overflow-hidden'>
			<HeroSection />
			<ServiceStatsSection serviceLists={serviceLists} />
			<AboutSection />
			<WhatWeDoSection />
			<FinishedWorkSection TeamSection={TeamSection} />
			<WhyChooseUs />
			<TestimonialSection />
			<CallActionSection />
			<div className='md:mt-28'>
				<WorkProcessSection />
			</div>
			<ContactSection />
		</div>
	);
};

export default Home;
