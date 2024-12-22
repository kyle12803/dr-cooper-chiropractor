import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
	return (
		<>
			<hr className="border-t-1 w-11/12 border-gray-300 mx-auto" />
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-center my-8">
				{/* Office */}
				<a
					href="https://www.google.com/maps/place/108+Cold+Spring+Road,+Syosset,+NY+11791"
					target="_blank"
					rel="noopener noreferrer"
					className="group flex flex-col items-center text-gray-700 hover:text-blue-500"
				>
					<FontAwesomeIcon
						icon={faLocationDot}
						className="text-gray-500 text-2xl group-hover:text-blue-500 pb-2"
					/>
					<div className="text-gray-500 font-semibold group-hover:text-blue-500">Our Office</div>
					<div className="text-gray-400 group-hover:text-blue-500">
						108 Cold Spring Road, <br /> Syosset, NY 11791
					</div>
				</a>

				{/* Phone */}
				<a
					href="tel:+15163641465"
					className="group flex flex-col items-center text-gray-700 hover:text-blue-500"
				>
					<FontAwesomeIcon
						icon={faPhone}
						className="text-gray-500 text-2xl group-hover:text-blue-500 pb-2"
					/>
					<div className="text-gray-500 font-semibold group-hover:text-blue-500">
						Give us a call
					</div>
					<div className="text-gray-400 group-hover:text-blue-500">+1 516-364-1465</div>
				</a>

				{/* Email */}
				<a
					href="mailto:ezracooperchiro@gmail.com"
					className="group flex flex-col items-center text-gray-700 hover:text-blue-500"
				>
					<FontAwesomeIcon
						icon={faEnvelope}
						className="text-gray-500 text-2xl group-hover:text-blue-500 pb-2"
					/>
					<div className="text-gray-500 font-semibold group-hover:text-blue-500">
						Send us an Email
					</div>
					<div className="text-gray-400 group-hover:text-blue-500">ezracooperchiro@gmail.com</div>
				</a>
			</div>
		</>
	);
};

export default Footer;
