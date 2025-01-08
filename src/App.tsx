import { useState } from "react";
import Nav from "./components/Nav";
import Train from "./components/Train";
import ExploreProducts from "./components/ExploreProducts";
import Footer from "./components/Footer";

const Image1 = ({
	src,
	title,
	desc,
}: {
	src: string;
	title: string;
	desc: string;
}) => {
	const [hovering, setHovering] = useState(false);

	return (
		<div
			className="w-full md:w-1/2 relative h-full"
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			<img src={src} className="w-full  h-full" />
			<div className="absolute inset-0 bg-neutral-700 bg-opacity-45  text-white gap-2 p-4 flex justify-center items-center flex-col">
				<div
					className={`flex justify-center items-center flex-col w-full ${""}`}
				>
					<h2 className="font-bold text-xl">{title}</h2>
					<i>{desc}</i>
				</div>

				<div
					className={`bg-neutral-700 bg-opacity-85 flex flex-col justify-center items-center w-full h-full gap-4 absolute ${
						hovering ? "fadeIn" : "fadeOut"
					}`}
				>
					<h2 className="font-bold text-xl">{title}</h2>
					<p>Lorem ipsum dolor sit </p>
					<button className="border p-2 px-4 hover:bg-white hover:text-black">
						Discover More
					</button>
				</div>
			</div>
		</div>
	);
};

function App() {
	return (
		<div className="w-full h-full p-2 flex flex-col gap-4">
			<Nav />
			<div className="border border-2 border-gray border-dashed w-full  "></div>
			<br/>
			<div className="w-full gap-2 justify-between content-between  flex flex-col md:flex-row">
				{/*  */}
				<div className="w-full md:w-1/2 relative">
					<img src="img1.webp" alt="" className="h-full w-full object-cover" />
					<div className="absolute border w-[100%]  border-black inset-0 bg-neutral-700 bg-opacity-45 flex flex-col justify-center items-center sm:items-start text-white gap-10 sm:pl-20 ">
						<div className="font-bold text-5xl">We Are Demo</div>
						<i>Awesome, clean & creative HTML5 Template</i>
						<button className="border p-4 px-4 hover:bg-white hover:text-black">
							Purchase Now
						</button>
					</div>
				</div>
				{/*  */}

				<div className=" flex-1 flex flex-col gap-2 ">
					<div className="flex-col md:flex-row w-full flex gap-2 h-3/6">
						<Image1
							src="img2.webp"
							title="Women"
							desc="Best clothes for Women"
						/>
						<Image1 src="img3.jpg" title="Men" desc="Best clothes for Men" />
					</div>
					<div className="flex-col md:flex-row w-full flex gap-2 h-3/6">
						<Image1 src="img4.webp" title="Kids" desc="Best clothes for Kids" />
						<Image1
							src="img5.jpg"
							title="Accessories"
							desc="Best trend Accessories"
						/>
					</div>
				</div>
			</div>
			<br/>
			<br/>
			<div className="border border-2 border-gray border-dashed w-full  "></div>
			<br/>
			<Train />
			<br/>
			<br/>
			<br/>
			<div className="border border-2 border-gray border-dashed w-full  "></div>
			<br/>
			<ExploreProducts />
			<br/>
			<br/>
			<div className="border border-2 border-gray border-dashed w-full  "></div>
			<br/>
			<Footer />
		</div>
	);
}

export default App;
