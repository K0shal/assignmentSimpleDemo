import { FaQuoteLeft } from "react-icons/fa";

export default function ExploreProducts() {
	return (
		<div className="w-full p-8 px-16 flex gap-4 flex-col md:flex-row">
			<div className="w-full md:w-1/2 flex flex-col gap-12">
				<h1 className="text-5xl font-bold">Explore Our Products</h1>
				<p className="text-neutral-600">
					You are allowed to use this demo HTML CSS template. You can feel free
					to modify or edit this layout. You can convert this template as any
					kind of ecommerce CMS theme as you wish.
				</p>

				<div className="flex gap-4 items-center">
					<FaQuoteLeft size={40} />
					<i className="font-semibold text-lg">
						You are not allowed to redistribute thjs template ZIP tile on any
						other website.
					</i>
				</div>
				<p className="text-neutral-600">
					There are 5 pages Included in this demo Template and we cre providing
					t to you tor absolutely free of charge at our wt website. There are
					web costs for us.
				</p>
				<p className="text-lg">
					If this template is beneficial for your website or business, please
					kindly <span className="text-blue-500">support us </span>a little via
					PayPal. Please also tell your friends about our great website. Thank
					you.
				</p>
				<button className="bg-white hover:text-white hover:bg-black p-2 max-w-64 border border-black">
					Discover More
				</button>
			</div>
			<div className="w-full  flex flex-col gap-4 sm:gap-2  xl-1/2">
				<div className="flex gap-4   flex-wrap sm:flex-nowrap">
					<div className="w-full flex justify-center items-center flex-col bg-neutral-100 sm:h-100 h-64 md:h-[210px] xl:h-64  gap-4">
						<h3 className="text-3xl text-center">Leather Bags</h3>
						<i className="text-neutral-500">Latest Collection</i>
					</div>
					<div className="flex  w-full sm:h-100 h-64 md:h-[210px]  xl:h-64">
						<img src="img1.webp" className="w-full " alt="" />
					</div>
				</div>
				<div className="flex gap-4 h-1/2  flex-wrap sm:flex-nowrap">
					<div className="flex sm:h-100 h-64 w-full md:h-[210px] xl:h-64">
						<img src="img2.webp" alt="" className="w-full " />
					</div>
					<div className="flex w-full justify-center items-center flex-col bg-neutral-100 sm:h-100 h-64  gap-4 md:h-[210px] xl:h-64">
						<h3 className="text-3xl text-center">Different Types</h3>
						<i className="text-neutral-500">Over 304 Products</i>
					</div>
				</div>
			</div>
		</div>
	);
}
