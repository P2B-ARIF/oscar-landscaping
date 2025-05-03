import { LeafIcon } from "lucide-react";

const LoadingPage = () => {
	return (
		<div className='mt-36 min-h-screen bg-white flex flex-col items-center justify-center p-6'>
			<div className='max-w-md mx-auto text-center'>
				{/* Loading Animation */}
				<div className='mb-8 relative'>
					<div className='w-24 h-24 border-4 border-green-100 border-t-green-600 rounded-full animate-spin mx-auto'></div>
					<div className='absolute inset-0 text-primary flex items-center justify-center'>
						<LeafIcon size={30} />
					</div>
				</div>

				<h1 className='text-2xl font-bold text-gray-800 mb-2'>
					Growing Your Experience
				</h1>
				<p className='text-gray-600 mb-8'>
					Please wait while we prepare your garden of content...
				</p>

				{/* Loading Progress */}
				<div className='w-full bg-gray-100 rounded-full h-2.5 mb-6'>
					<div className='bg-green-600 h-2.5 rounded-full animate-[loading_2s_ease-in-out_infinite]'></div>
				</div>

				{/* Loading Tips */}
				<div className='bg-green-50 border border-green-100 rounded-lg p-4 text-left'>
					<h3 className='font-medium text-green-800 mb-2'>Did you know?</h3>
					<p className='text-green-700 text-sm'>
						Watering your plants in the early morning helps prevent evaporation
						and fungal growth.
					</p>
				</div>
			</div>

			{/* Small Footer */}
			<div className='mt-12 text-center'>
				<p className='text-gray-400 text-xs'>
					&copy; {new Date().getFullYear()} GardenGrow
				</p>
			</div>

			{/* // <style jsx>{` */}
			{/* Add keyframes for the loading animation */}
			<style>{`
				@keyframes loading {
					0% {
						width: 0%;
					}
					50% {
						width: 70%;
					}
					75% {
						width: 90%;
					}
					90% {
						width: 95%;
					}
					100% {
						width: 100%;
					}
				}
			`}</style>
		</div>
	);
};

export default LoadingPage;
