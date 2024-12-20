import NavBar from "@/components/NavBar";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";

const home = () => {
	return (
		<>
			<Head>
				<title>Dr. Ezra R. Cooper | Home</title>
				<meta name="description" content="Dr. Ezra R. Cooper Chiropractor" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<NavBar />
			<div className="page-container mt-3 mx-auto">
				<div className="flex flex-col items-center p-3">
					{/* Top Heading Section */}
					<div className="flex flex-col items-center text-xl md:text-3xl font-medium whitespace-nowrap ">
						<div>GET BACK TO HEALTH NOW...</div>
						<div>CHIROPRACTIC CAN CURE</div>
					</div>

					{/* About Erza Section */}
					<div className="mt-8 mb-10 flex flex-col md:flex-row items-center justify-start md:px-8 xl:px-12">
						<Image
							src="/ezra.jpg"
							alt="Dr. Ezra R. Cooper"
							width={873}
							height={1156}
							className="ms-5 me-7 mb-8 md:mb-0 rounded-2xl w-[218px] h-[289px] sm:w-[291px] sm:h-[385px] align-middle"
						/>

						<div className="flex flex-col justify-center md:px-10">
							<h2 className="font-medium text-2xl md:text-4xl text-center md:text-left ">
								Dr. Ezra R. Cooper
							</h2>
							<h3 className="font-medium mb-6 md:mb-2 text-sm text-center md:text-left">
								Chiropractor in Syosset, NY
							</h3>
							<p className="indent-8 pt-3 text-gray-900">
								Dr. Cooper is a Palmer Graduate Chiropractor. In 40 years of clinical practice Dr.
								Cooper has developed specialized treatment plans for a variety of patients from 1
								day old to 100 years.
							</p>
							<p className="indent-8 pt-3 text-gray-900">
								He specializes in sports injuries, soft tissue, pediatric geriatric and palmer
								method. He also will do physical therapy and design an exercise program for
								individuals.
							</p>
							<p className="indent-8 pt-3 text-gray-900">
								Dr. Cooper has worked with athletes of all ages and has taken care of CW Post and
								Syosset high school.
							</p>
							<p className="indent-8 pt-3 text-gray-900">
								The treatment is painless, quick and effective for relief of neck, back, knee and
								shoulder pain as well as extremity adjustments.
							</p>
						</div>
					</div>

					<hr className="border-t-2 w-full border-gray-300" />

					{/* Pain vs Drugs Section */}
					<div className="my-10 text-center">
						<div className=" mb-4 text-2xl">
							<span className="font-bold">PAIN:</span> Healing hands vs drugs
						</div>

						<div className="md:px-12 text-lg">
							When pain strikes, your body is telling you that something is wrong. Drugs and
							analgesics mask the problem. When they wear off, pain returns. Our Chiropractic Center
							probes the root of your pain. Pinched nerves cause pain or numbness in your limbs,
							muscles, head & extremities. Realignment of the spine and joints through our
							doctors&apos; healing hands bring rapid relief to most pains. Do not look for chemical
							answers to pain. First seek natural solutions at our office. You&apos;ll be delighted
							with the results.
						</div>

						{/* Insurance Subsection */}
						<div className="mt-5 text-sm">Most insurance accepted as full or part payment.</div>
					</div>

					<hr className="border-t-2 w-full border-gray-300" />

					{/* Specialties Section */}
					<div className="my-10 text-center">
						<h2 className="text-2xl font-bold mb-6">Our Services</h2>
						<div className="md:grid md:grid-cols-2 md:gap-x-10 md:text-left">
							<ul className="px-6 text-lg space-y-4">
								<li>
									OCCUPATIONAL, PERSONAL, <br /> AND SPORT INJURIES
								</li>
								<li>PREVENTATIVE HEALTH CARE</li>
							</ul>
							<ul className="px-6 text-lg space-y-4">
								<li>AUTO ACCIDENTS</li>
								<li>NUTRITIONAL COUNSELING</li>
								<li>COURTESY CONSULTATION</li>
							</ul>
						</div>
					</div>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default home;
