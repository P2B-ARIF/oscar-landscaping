import actionBgImage from "@/assets/images/Mask-group-6.09ea74ec.png";
import { IoMdCall } from "react-icons/io";

const CallActionSection = () => {
	return (
		<section className='container mx-auto px-3 md:px-4'>
			<div
				className='bg-cover bg-center bg-no-repeat rounded-2xl md:my-16'
				style={{
					backgroundImage: `url(${actionBgImage})`,
				}}
			>
				<div className='flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-10 md:py-16 bg-green-100/90 rounded-2xl'>
					<h1 className='text-xl md:text-2xl text-center md:text-left lg:text-3xl xl:text-4xl text-secondary font-semibold font-secondary max-w-xl'>
						Get notified about the event! Subscribe today
					</h1>

					<button className='bg-primary text-accent py-3 md:py-4 px-5 md:px-8 rounded-xl font-semibold flex items-center gap-2 shadow-md hover:bg-primary/90 transition-all duration-300'>
						<IoMdCall size={22} />
						Hire us now
					</button>
				</div>
			</div>
		</section>
	);
};

export default CallActionSection;
