import {
	FaFacebookSquare,
	FaGithub,
	FaLinkedin,
	FaTwitterSquare,
} from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="w-full bg-neutral-800 text-white flex-col gap-10 md:gap-0 md:flex-row flex flex-wrap justify-start items-start md:justify-around p-6">
			<div className="flex flex-col justify-center items-start gap-2">
				<div className="flex justify-center items-center gap-2">
					<div className="flex justify-center items-center rounded-full p-8 font-bold text-black bg-white w-4 h-4 text-2xl">
						<p>H</p>
					</div>
					<div>
						<h1 className="text-xl font-semibold">HEXASHOP</h1>
						<p>ONLINE SHOPPING</p>
					</div>
				</div>
				<p>16501 Colins Ave, Sunny Isles Beach.</p>
				<p>FL 33160. United States</p>
				<p>sdf@cornpany.com</p>
				<p>010-020-0340</p>
			</div>
			<div className="flex justify-start gap-2 flex-col">
				<h3 className="my-4 text-xl font-bold">Shopping & Categories</h3>
				<p>Men's Shopping</p>
				<p>Women's shopping</p>
				<p>Kids Shopping</p>
			</div>
			<div className="flex justify-start gap-2 flex-col">
				<h3 className="my-4 text-xl font-bold">Useful Links</h3>
				<p>About us</p>
				<p>Help</p>
				<p>Contact us</p>
			</div>
			<div className="flex justify-start gap-2 flex-col">
				<h3 className="my-4 text-xl font-bold">Help & Information</h3>
				<p>FAQs</p>
				<p>Shipping</p>
				<p>Tracking D</p>
			</div>
			<div className="mt-10 border-t-2 border-neutral-500 w-full items-center flex flex-col gap-2 p-4">
				<p>Copyright © 2025 demo Cos Ltd. All Rights Reserved</p>
				<p>
					Design: <span className="text-blue-300">Koshal</span>
				</p>
			</div>
			<div className="w-full justify-center gap-4 flex [&>*]:size-8">
				<FaFacebookSquare />
				<FaTwitterSquare />
				<FaLinkedin />
				<FaGithub />
			</div>
		</footer>
	);
}
