import NavBar from "@/components/NavBar";
import Head from "next/head";
import React from "react";

const contact = () => {
	return (
		<>
			<Head>
				<title>Dr. Ezra R. Cooper | Contact</title>
				<meta name="description" content="Dr. Ezra R. Cooper Chiropractor" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<NavBar />
			<div className="bg-gray-100 min-h-screen py-10 px-4 md:px-10">
				<div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{/* Left Section: Office Info */}
						<div className="bg-blue-100 p-6 rounded-lg">
							<h2 className="text-lg font-bold text-gray-800 mb-4">Office Information</h2>
							<div className="mb-4">
								<h3 className="text-gray-700 font-semibold">Our Location</h3>
								<p className="text-gray-600 mt-2">
									108 Cold Spring Road, <br />
									Syosset, NY 11791
								</p>
							</div>
							<div className="mb-4">
								<h3 className="text-gray-700 font-semibold">Phone</h3>
								<p className="text-gray-600 mt-2">
									<a href="tel:+15163641465" className="text-blue-500 hover:text-blue-700">
										+1 516-364-1465
									</a>
								</p>
							</div>
							<div>
								<h3 className="text-gray-700 font-semibold">Email</h3>
								<p className="text-gray-600 mt-2">
									Or email us directly at{" "}
									<a
										href="mailto:contact@example.com"
										className="text-blue-500 hover:text-blue-700"
									>
										contact@example.com
									</a>
								</p>
							</div>
						</div>

						{/* Right Section: Contact Form */}
						<div className="col-span-2">
							<h2 className="text-2xl font-bold text-gray-800 mb-6">
								Send <span className="text-blue-500">Us a Message</span>
							</h2>
							<p className="text-gray-600 mb-8">
								Feel free to ask any questions over the phone, or get in touch via our contact form
								below. Your message will be dispatched directly to our staff.
							</p>
							<form className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{/* Full Name */}
								<div className="flex flex-col">
									<label htmlFor="name" className="text-gray-700 font-semibold mb-2">
										Name *
									</label>
									<input
										type="text"
										id="name"
										placeholder="Full Name"
										className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
										required
									/>
								</div>

								{/* Subject */}
								<div className="flex flex-col">
									<label htmlFor="subject" className="text-gray-700 font-semibold mb-2">
										Subject
									</label>
									<input
										type="text"
										id="subject"
										placeholder="The Subject"
										className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
									/>
								</div>

								{/* Email */}
								<div className="flex flex-col">
									<label htmlFor="email" className="text-gray-700 font-semibold mb-2">
										Email *
									</label>
									<input
										type="email"
										id="email"
										placeholder="Email Address"
										className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
										required
									/>
								</div>

								{/* Phone Number */}
								<div className="flex flex-col">
									<label htmlFor="phone" className="text-gray-700 font-semibold mb-2">
										Phone Number *
									</label>
									<input
										type="tel"
										id="phone"
										placeholder="Phone Number"
										className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
										required
									/>
								</div>

								{/* Message */}
								<div className="col-span-1 md:col-span-2 flex flex-col">
									<label htmlFor="message" className="text-gray-700 font-semibold mb-2">
										Your Message *
									</label>
									<textarea
										id="message"
										rows="5"
										placeholder="Type your message..."
										className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
										required
									/>
								</div>

								{/* Buttons */}
								<div className="col-span-1 md:col-span-2 flex justify-start gap-4">
									<button
										type="submit"
										className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
									>
										Send Message
									</button>
									<button
										type="reset"
										className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-300 transition"
									>
										Clear Form
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default contact;
