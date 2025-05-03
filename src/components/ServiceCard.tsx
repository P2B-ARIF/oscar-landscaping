import { ServiceCardProps } from "@/pages/Home";

const ServiceCard = ({ title, description, icon: Icon }: ServiceCardProps) => {
	return (
		<div className='p-6 py-8 flex items-start gap-5 bg-white rounded-xl shadow-md hover:shadow-lg transition'>
			{/* Icon */}
			<div className='text-primary text-4xl'>
				<Icon /> {/* ✅ Dynamic React component as Icon */}
			</div>

			{/* Content */}
			<div>
				<h4 className='font-bold text-xl text-gray-800 mb-2'>{title}</h4>
				<p className='text-gray-600 text-sm leading-relaxed'>{description}</p>
			</div>
		</div>
	);
};

export default ServiceCard;
