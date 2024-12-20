import NavBar from "@/components/NavBar";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import Footer from "../components/Footer";
import Link from "next/link";

const office = () => {
	const images = [
		"/office/image1.jpg", // Replace with the actual filenames
		"/office/image2.jpg",
		"/office/image3.jpg",
	];

	return (
		<>
			<Head>
				<title>Dr. Ezra R. Cooper | Office</title>
				<meta name="description" content="Dr. Ezra R. Cooper Chiropractor" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<NavBar />
			<div className="page-container mt-6 mx-auto px-6 md:px-12">
				<div className="flex flex-col items-center p-3 mb-3">
					{/* Top Heading */}
					<div className="text-center">
						<h1 className="text-2xl md:text-4xl font-bold text-gray-800">Welcome to Our Office</h1>
						<p className="text-gray-600 text-lg mt-4 max-w-2xl">
							Take a glimpse into our modern, comfortable, and welcoming environment. We strive to
							create an inviting space where you feel at ease.
						</p>
					</div>

					{/* Images */}
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full">
						{images.map((src, index) => (
							<div
								key={index}
								className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
							>
								<Image
									src={src}
									alt={`Office Image ${index + 1}`}
									width={400}
									height={300}
									className="w-full h-auto object-cover rounded-lg"
								/>
							</div>
						))}
					</div>

					{/* Call to Action */}
					<div className="mt-10 text-center">
						<h2 className="text-xl md:text-2xl font-bold text-gray-800">Ready to Visit Us?</h2>
						<p className="text-gray-600 mt-4">
							Contact us today to schedule an appointment or to learn more about our services.
						</p>
						<Link
							href="/contact"
							className="mt-4 inline-block bg-blue-500 text-white font-medium py-3 px-6 rounded-md shadow hover:bg-blue-600 transition"
						>
							Contact Us
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default office;
