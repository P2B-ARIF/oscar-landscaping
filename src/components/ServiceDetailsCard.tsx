import { ServiceCardProps } from "@/pages/Home";
import { motion } from "framer-motion";

const ServiceDetailsCard = ({ title, description }: ServiceCardProps) => {
	return (
		<motion.div
			initial={{ opacity: 0, translateY: 200 }}
			animate={{ opacity: 1, translateY: 0 }}
			viewport={{ once: false }}
			transition={{ duration: 0.2, ease: "linear" }}
			className='p-3 md:p-5 lg:p-10 flex items-start gap-3 md:gap-5 lg:gap-8 bg-accent rounded-xl shadow-md hover:shadow-lg transition'
		>
			{/* Icon */}
			<div className='text-primary text-5xl p-2'>
				{/* <Icon /> ✅ Dynamic React component as Icon */}
				🌿
			</div>

			{/* Content */}
			<div className='flex flex-col gap-2'>
				<h4 className='font-bold text-xl text-gray-800 mb-1'>{title}</h4>
				<p className='text-gray-600 text-sm leading-relaxed'>{description}</p>
				{/* <NavLink
					to='#'
					className={
						"text-primary font-semibold flex items-center gap-2 border-primary mt-5"
					}
				>
					Read More <BiRightArrow size={16} />
				</NavLink> */}
			</div>
		</motion.div>
	);
};

export default ServiceDetailsCard;
