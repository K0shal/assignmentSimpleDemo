import { useState } from "react";
import { BsCartFill } from "react-icons/bs";
import { FaEye, FaStar } from "react-icons/fa";

const cards = [
	{ title: "Title 1", img: "img2.webp", price: 300 },
	{ title: "Title 2", img: "img3.jpg", price: 500 },
	{ title: "Title 3", img: "img4.webp", price: 900 },
	{ title: "Title 4", img: "img5.jpg", price: 900 },
];

const Card = ({ idx, single }: { idx: number; single?: boolean }) => {
	const { img, price, title } = cards[idx];
	const [hovered, setHovered] = useState(false);

	return (
		<div
			className={`${single ? "w-full" : "w-1/3"} flex flex-col gap-2 relative`}
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
		>
			<img src={img} className="mb-2" />
			<div className="flex w-full justify-between">
				<h3 className="text-xl md:text-2xl font-bold">{title}</h3>
				<div className="flex gap-1 justify-center items-center">
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStar />
				</div>
			</div>
			<p className="text-xl text-neutral-600">${price}</p>
			<div
				className={`${
					hovered ? "goUp" : "goDown"
				} absolute inset-0 p-4 flex justify-center items-center top-12`}
			>
				<div className=" flex gap-4  p-4 rounded-lg">
					<div className=" bg-white p-4 rounded"><FaEye /></div>
					<div className=" bg-white p-4 rounded"><FaStar /></div>
					<div className=" bg-white p-4 rounded"><BsCartFill /></div>
			
				</div>
			</div>
		</div>
	);
};

export default function Train() {
	const [p, setP] = useState(0);

	return (
		<div className="w-full flex flex-col gap-8 mt-4">
			<div className="flex flex-col w-[93vw] m-auto gap-2 p-4">
				<h2 className="text-3xl font-bold">Men's Latest</h2>
				<i className="text-neutral-500">
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates,
					sunt!
				</i>
			</div>
			<div className="flex gap-4 justify-center items-center">
				<button
					className="border p-2 text-3xl"
					onClick={() => {
						if (p === 0) setP(cards.length - 1);
						else setP((p - 1) % cards.length);
					}}
				>
					{"<"}
				</button>

				<div className="w-full hidden md:flex justify-center items-end gap-4">
					<Card idx={p % cards.length} />
					<Card idx={(p + 1) % cards.length} />
					<Card idx={(p + 2) % cards.length} />
				</div>
				<div className="w-full md:hidden flex justify-center items-end gap-4">
					<Card idx={p % cards.length} single />
				</div>

				<button
					className="border p-2 text-3xl"
					onClick={() => {
						setP((p + 1) % cards.length);
					}}
				>
					{">"}
				</button>
			</div>
		</div>
	);
}
