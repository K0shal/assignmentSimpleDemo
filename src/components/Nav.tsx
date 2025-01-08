import { useState } from "react";

const DropDown = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative inline-block text-left">
			<button
				className="inline-flex justify-center w-full px-4 py-2 rounded-md hover:opacity-50 focus:outline-none"
				onClick={toggleDropdown}
			>
				<span>Pages &nbsp;</span>  <span className="rotate-90 inline-block pt-1">	 &gt;</span>
			</button>

			{isOpen && (
				<div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
					<div className="py-1">
						<p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
							Test1
						</p>
						<p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
							Test2
						</p>
						<p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
							Test3
						</p>
						<p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
							Test4
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default function Nav() {
	return (
		<nav className=" px-14 p-6 w-full flex justify-between items-center">
			<div>Logo Here</div>
			<div className="flex gap-4 items-center">
				<p>Test</p>
				<DropDown />
			</div>
		</nav>
	);
}
