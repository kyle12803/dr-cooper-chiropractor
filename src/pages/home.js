import NavBar from "@/components/NavBar";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const home = () => {
	return (
		<>
			<Head>
				<title>Dr. Ezra R. Cooper | Home</title>
				<meta name="description" content="Dr. Ezra R. Cooper Chiropractor" />
				<link rel="icon" href="/derc-favicon.ico" />
			</Head>
			<NavBar />
			<div className="page-container mt-4 ">
				{/* <div className="relative">
					<div class="absolute transform translate-x-1/2 -rotate-30 top-10">
						<div class="text-4xl font-bold text-center whitespace-nowrap">
							GET BACK <br /> TO HEALTH NOW..
						</div>
					</div>

					<div className="absolute right-5 top-10 flex flex-col items-end w-fit z-0">
						<Image
							src="/ezralogo.jpg"
							alt="Logo"
							width={870}
							height={1386}
							className="w-[67px] h-[107px]"
						></Image>
						<div className="text-2xl font-medium text-center whitespace-nowrap">
							CHIROPRACTIC <br /> CAN CURE
						</div>
					</div>
				</div> */}
				{/* <div className="relative">PAIN: Healing hands vs drugs</div> */}

				<div className="flex justify-center items-start">
					<div class="text-4xl font-bold text-center whitespace-nowrap -rotate-30 -ml-16">
						GET BACK <br /> TO HEALTH NOW..
					</div>

					<div className="flex flex-col items-end -ml-44">
						<Image
							src="/ezralogo.jpg"
							alt="Logo"
							width={870}
							height={1386}
							className="w-[67px] h-auto"
						></Image>
						<div className="text-2xl font-medium text-center whitespace-nowrap">
							CHIROPRACTIC <br /> CAN CURE
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default home;
