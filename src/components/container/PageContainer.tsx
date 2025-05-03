import React from "react";
import { Link } from "react-router";

interface BreadcrumbItem {
	name: string;
	path: string;
}

interface PageContainerProps {
	children: React.ReactNode;
	title: string;
	breadcrumbs?: BreadcrumbItem[];
	bgImage?: string;
	height?: string;
	overlayOpacity?: number;
}

const PageContainer: React.FC<PageContainerProps> = ({
	children,
	title,
	breadcrumbs = [],
	bgImage,
	height = "h-[350px]",
	overlayOpacity = 0.4,
}) => {
	return (
		<div className='mt-32'>
			{/* Hero Section */}
			<section
				aria-label='Page header'
				className={`${height} flex items-center justify-center relative`}
				style={{
					backgroundImage: bgImage ? `url(${bgImage})` : undefined,
					backgroundSize: "cover",
					backgroundPosition: "bottom",
					backgroundRepeat: "no-repeat",
				}}
			>
				{/* Content */}
				<div className='relative z-10 text-center font-secondary'>
					<h1 className='text-2xl md:text-3xl lg:text-4xl font-bold text-accent'>
						{title}
					</h1>

					{breadcrumbs.length > 0 && (
						<nav aria-label='Breadcrumbs' className='mt-2'>
							<ol className='flex items-center justify-center gap-2 text-accent/80'>
								{breadcrumbs.map((item, index) => (
									<React.Fragment key={item.path}>
										<li>
											{index === breadcrumbs.length - 1 ? (
												<span className='text-accent font-medium'>
													{item.name}
												</span>
											) : (
												<Link
													to={item.path}
													className='hover:text-accent transition-colors'
												>
													{item.name}
												</Link>
											)}
										</li>
										{index < breadcrumbs.length - 1 && (
											<li aria-hidden='true' className='text-accent/50'>
												/
											</li>
										)}
									</React.Fragment>
								))}
							</ol>
						</nav>
					)}
				</div>

				{/* Overlay */}
				<div
					className='absolute top-0 left-0 w-full h-full bg-secondary z-0'
					style={{ opacity: overlayOpacity }}
					aria-hidden='true'
				/>
			</section>

			{/* Page Content */}
			{children}
		</div>
	);
};

export default PageContainer;
