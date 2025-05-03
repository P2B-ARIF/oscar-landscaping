// components/TestimonialCarousel.tsx
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect } from "react";

type Testimonial = {
	id: number;
	name: string;
	position: string;
	image: string;
	text: string;
};

type Props = {
	testimonials: Testimonial[];
};

const TestimonialCarousel = ({ testimonials }: Props) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

	const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
	const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

	useEffect(() => {
		if (!emblaApi) return;
	}, [emblaApi]);

	return (
		<div className='overflow-hidden relative mt-16' ref={emblaRef}>
			<div className='flex'>
				{testimonials.map(testimonial => (
					<div
						className='container mx-5 md:px-6 lg:px-8 flex-shrink-0'
						key={testimonial.id}
					>
						<div className='bg-green-50 border border-green-600 p-6 rounded-lg relative text-center max-w-2xl mx-auto md:py-20 px-3'>
							<div className='w-20 h-20 rounded-full overflow-hidden border-4 border-white mx-auto'>
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className='w-full h-full object-cover'
								/>
							</div>
							<p className='text-gray-700 mt-6'>{testimonial.text}</p>
							<h4 className='font-bold text-gray-900 text-lg mt-6'>
								{testimonial.name}
							</h4>
							<p className='text-gray-600'>{testimonial.position}</p>
						</div>
					</div>
				))}
			</div>

			{/* Navigation Buttons */}
			<div className='flex justify-center gap-4 mt-6'>
				<button
					onClick={scrollPrev}
					className='w-10 h-10 bg-primary text-white rounded-full'
				>
					‹
				</button>
				<button
					onClick={scrollNext}
					className='w-10 h-10 bg-primary text-white rounded-full'
				>
					›
				</button>
			</div>
		</div>
	);
};

export default TestimonialCarousel;
