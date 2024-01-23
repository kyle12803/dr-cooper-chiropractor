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
		About: RouteNames.about,
		"Contact Us": RouteNames.contact,
	};

	const { pathname } = useRouter();

	return (
		<header>
			<nav className="bg-white relative flex flex-row items-center px-7">
				<Link href={RouteNames.home}>
					<Image
						src="/derc.png"
						alt="Dr. Ezra R. Cooper"
						width={280}
						height={208}
						className="hidden md:flex my-4 w-28"
					></Image>
				</Link>
				<div className="hidden md:flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:gap-x-10">
					{Object.entries(links).map(([name, route], index) => (
						<div key={index} className="">
							<Link
								href={route}
								className="text-gray-800 hover:text-nav group transition duration-200"
							>
								{name}
								<span className="block max-w-0 group-hover:max-w-full transition-all duration-200 h-0.5 bg-nav mt-1"></span>
							</Link>
						</div>
					))}
				</div>
			</nav>

			{/* Mobile/Tablet Screen Menu */}
			<nav className="md:hidden bg-white border-gray-200 dark:bg-gray-900">
				<div className="flex items-center justify-between mx-auto pt-1 px-6">
					<Link href={RouteNames.home}>
						<Image
							src="/derc.png"
							alt="Dr. Ezra R. Cooper"
							width={280}
							height={208}
							className="my-4 w-20"
						></Image>
					</Link>
					<button
						data-collapse-toggle="navbar-default"
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
					<ul class=" font-medium flex flex-col p-4 mx-6 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
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
