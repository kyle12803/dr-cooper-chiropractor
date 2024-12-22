import Image from "next/image";
import React, { useState } from "react";
import { RouteNames } from "@/utils/constants";
import Link from "next/link";
import { useRouter } from "next/router";

const NavBar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const links = {
		Home: RouteNames.home,
		"Office Info": RouteNames.office,
		"Contact Us": RouteNames.contact,
	};

	const { pathname } = useRouter();

	return (
		<header className="shadow-md">
			<nav className="hidden md:flex relative flex-row items-center px-7 py-6">
				<Link href={RouteNames.home} className="text-xl leading-tight">
					<div className="flex flex-col">
						<div className="-mb-2">
							<span className="text-2xl font-semibold text-blue-300">Dr.</span>
							<span className="text-xl leading-none"> Ezra R.</span>{" "}
						</div>
						<span className="text-2xl font-semibold text-blue-300">COOPER</span>
					</div>
				</Link>

				{/* Nav Links */}
				<div className="hidden md:flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:gap-x-10">
					{Object.entries(links).map(([name, route], index) => (
						<Link
							key={index}
							href={route}
							className="text-gray-800 group transition duration-200 text-lg"
						>
							{name}
							<span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-blue-300 mt-1"></span>
						</Link>
					))}
				</div>
			</nav>

			{/* Mobile/Tablet Screen + Menu */}
			<nav className="md:hidden py-4">
				<div className="flex items-center justify-between mx-auto px-6">
					<Link href={RouteNames.home} className="text-xl leading-tight">
						<div className="flex flex-col">
							<div className="-mb-2">
								<span className="text-lg md:text-2xl font-semibold text-blue-300">Dr.</span>
								<span className="text-base md:text-xl leading-none"> Ezra R.</span>{" "}
							</div>
							<span className="text-lg md:text-2xl font-semibold text-blue-300">COOPER</span>
						</div>
					</Link>
					<button
						data-collapse-toggle="navbar-default"
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
						aria-controls="navbar-default"
						aria-expanded={isMenuOpen ? "true" : "false"}
						onClick={toggleMenu}
					>
						<span className="sr-only">{isMenuOpen ? "Close" : "Open"} main menu</span>
						<svg
							className="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
				</div>

				<div class={`${isMenuOpen ? "block" : "hidden"} absolute w-full z-10`} id="navbar-default">
					<ul class=" font-medium flex flex-col p-4 mx-6 border border-gray-100 rounded-lg bg-gray-50">
						{Object.entries(links).map(([name, route], index) => (
							<li key={index}>
								<Link
									href={route}
									className={`block py-2 px-3  rounded ${
										pathname.includes(route)
											? "text-white bg-blue-700"
											: "text-gray-900 hover:bg-gray-100"
									}`}
								>
									{name}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default NavBar;
