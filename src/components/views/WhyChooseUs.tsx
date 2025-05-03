"use client";
import { motion } from "framer-motion";
import { FaCheck, FaPhone } from "react-icons/fa";

interface FeatureProps {
	text: string;
}

const Feature = ({ text }: FeatureProps) => (
	<motion.div
		className='flex items-center gap-3 mb-3'
		initial={{ opacity: 0, x: -20 }}
		whileInView={{ opacity: 1, x: 0 }}
		transition={{ duration: 0.5 }}
		viewport={{ once: true }}
	>
		<div className='flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center'>
			<FaCheck className='text-white text-xs' />
		</div>
		<p className='text-lg text-gray-800'>{text}</p>
	</motion.div>
);

const WhyChooseUs = () => {
	const features = [
		"Quality Workmanship",
		"Attention to Detail",
		"Affordable, Transparent Pricing",
		"Personalized Service",
		"Fully Licensed & Insured",
	];

	return (
		<section className='py-16 bg-gray-50'>
			<div className='container mx-auto px-4'>
				<div className='max-w-4xl mx-auto'>
					<div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
						<div className='grid md:grid-cols-2 gap-8'>
							{/* Left side: Why Choose Us */}
							<div className='p-8 md:p-10'>
								<motion.h2
									className='text-3xl font-bold mb-6 text-gray-900'
									initial={{ opacity: 0, y: -20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5 }}
									viewport={{ once: true }}
								>
									Why Choose Oscar's Home Improvement?
								</motion.h2>

								<div className='space-y-3'>
									{features.map((feature, index) => (
										<Feature key={index} text={feature} />
									))}
								</div>
							</div>

							{/* Right side: CTA */}
							<div className='bg-gradient-to-br from-green-500 to-green-600 p-8 md:p-10 flex flex-col justify-center'>
								<motion.div
									className='text-white'
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.5, delay: 0.2 }}
									viewport={{ once: true }}
								>
									<h3 className='text-2xl font-bold mb-4'>
										Let's bring your vision to life!
									</h3>

									<a
										href='tel:+1234567890'
										className='inline-flex items-center gap-2 bg-white text-green-600 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 mt-4'
									>
										<FaPhone className='animate-pulse' />
										Call today for a FREE consultation!
									</a>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyChooseUs;
