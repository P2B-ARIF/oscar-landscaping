import TestimonialCarousel from "../TestimonialCarousel";

const testimonials = [
	{
		id: 1,
		name: "Kelly Coleman",
		position: "Nulla nec",
		image:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.",
	},
	{
		id: 2,
		name: "Philip Mendez",
		position: "Consectetur",
		image:
			"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=150&q=80",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.",
	},
	{
		id: 3,
		name: "Eugene Freeman",
		position: "Tincidunt",
		image:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at est id leo luctus gravida a in ipsum.",
	},
];

const TestimonialSection = () => {
	return (
		<section className='pt-20 pb-10 md:pb-28 md:py-28 container mx-auto px-3 md:px-16'>
			<div className='text-center space-y-3 md:space-y-5'>
				<h3 className='text-primary tracking-widest uppercase'>
					Client Testimonials
				</h3>
				<h1 className='text-xl md:text-3xl xl:text-[40px] text-secondary font-secondary font-medium'>
					What our clients say
				</h1>
			</div>

			<TestimonialCarousel testimonials={testimonials} />
		</section>
	);
};

export default TestimonialSection;
