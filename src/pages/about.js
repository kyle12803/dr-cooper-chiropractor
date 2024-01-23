import NavBar from "@/components/NavBar";
import Head from "next/head";
import Image from "next/image";
import React from "react";

const about = () => {
	return (
		<>
			<Head>
				<title>Dr. Ezra R. Cooper | About</title>
				<meta name="description" content="Dr. Ezra R. Cooper Chiropractor" />
				<link rel="icon" href="/derc-favicon.ico" />
			</Head>
			<NavBar />
			<div className="page-container">
				<h1 className="font-medium text-4xl md:text-6xl text-center mb-10 font-serif">
					Meet the Doctor
				</h1>
				<div className="flex flex-col md:flex-row items-center justify-start px-1 md:px-8">
					<Image
						src="/ezra.jpg"
						alt="Dr. Ezra R. Cooper"
						width={873}
						height={1156}
						className="ms-5 me-7 mb-8 md:mb-0 rounded-2xl w-[291px] h-[385px] md:w-[291px] md:h-[385px] align-middle"
					></Image>
					<div className="flex flex-col justify-center md:px-10">
						<h2 className="font-medium text-2xl md:text-4xl text-center md:text-left ">
							Dr. Ezra R. Cooper
						</h2>
						<h3 className="font-medium mb-6 md:mb-2 text-sm text-center md:text-left">
							Chiropractor in Syosset, NY
						</h3>
						<p className="indent-8 pt-3 text-gray-900">
							Dr. Cooper is a Palmer Graduate Chiropractor. In 40 years of clinical practice Dr.
							Cooper has developed specialized treatment plans for a variety of patients from 1 day
							old to 100 years.
						</p>
						<p className="indent-8 pt-3 text-gray-900">
							He specializes in sports injuries, soft tissue, pediatric geriatric and palmer method.
							He also will do physical therapy and design an exercise program for individuals.
						</p>
						<p className="indent-8 pt-3 text-gray-900">
							Dr. Cooper worked with athletes of all ages and has takes care of CW Post and Syosset
							high school.
						</p>
						<p className="indent-8 pt-3 text-gray-900">
							The treatment is painless, quick and effective for relief of neck, back, knee and
							shoulder pain as well as extremity adjustments.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default about;
