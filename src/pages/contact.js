import React, { useState } from "react";
import emailjs from "emailjs-com";
import Head from "next/head";
import NavBar from "@/components/NavBar";

const contact = () => {
	const [formDetails, setFormDetails] = useState({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [formSubmitted, setFormSubmitted] = useState(false);

	const handleInputChange = (e) => {
		const { id, value } = e.target;
		setFormDetails((prev) => ({ ...prev, [id]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const response = await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
				{
					name: formDetails.name,
					email: formDetails.email,
					phone: formDetails.phone,
					subject: formDetails.subject,
					message: formDetails.message,
				},
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
			);

			if (response.status === 200) {
				setFormSubmitted(true);
				setFormDetails({
					name: "",
					email: "",
					phone: "",
					subject: "",
					message: "",
				});
				setTimeout(() => setFormSubmitted(false), 3000);
			} else {
				alert("Failed to send the message. Please try again.");
			}
		} catch (error) {
			console.error("Error sending message:", error);
			alert("An error occurred while sending your message. Please try again.");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			<Head>
				<title>Dr. Ezra R. Cooper | Contact</title>
				<meta name="description" content="Dr. Ezra R. Cooper Chiropractor" />
				<link rel="icon" href="/favicon.png" />
			</Head>
			<NavBar />
			<div className="py-10 px-4 md:px-10">
				<div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
						{/* Office Info */}
						<div className="bg-blue-100 p-6 rounded-lg">
							<h2 className="text-xl font-bold text-gray-800 mb-4">Office Information</h2>
							<div className="mb-4">
								<h3 className="text-gray-700 font-semibold">Our Location</h3>
								<p className="text-gray-600 -mt-1">
									<a
										href="https://www.google.com/maps/place/108+Cold+Spring+Road,+Syosset,+NY+11791"
										className="text-gray-700 hover:text-blue-500"
									>
										108 Cold Spring Road, <br />
										Syosset, NY 11791
									</a>
								</p>
							</div>
							<div className="mb-4">
								<h3 className="text-gray-700 font-semibold">Phone</h3>
								<p className="text-gray-600 -mt-1">
									<a href="tel:+15163641465" className="text-gray-700 hover:text-blue-500">
										+1 516-364-1465
									</a>
								</p>
							</div>
							<div>
								<h3 className="text-gray-700 font-semibold">Email</h3>
								<p className="text-gray-600 -mt-1">
									<a
										href="mailto:ezracooperchiro@gmail.com"
										className="text-gray-700 hover:text-blue-500 mt-2"
									>
										ezracooperchiro@gmail.com
									</a>
								</p>
							</div>
						</div>

						{/* Contact Form */}
						<div className="col-span-2">
							<h2 className="text-2xl font-bold text-gray-800 mb-6">
								Send <span className="text-blue-500">Us a Message</span>
							</h2>
							<p className="text-gray-600 mb-8">
								Feel free to ask any questions over the phone, or get in touch via our contact form
								below. Your message will be dispatched directly to our staff.
							</p>
							{formSubmitted && (
								<div className="bg-green-100 text-green-800 p-4 rounded-md mb-6">
									Your message has been sent successfully!
								</div>
							)}
							<form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="flex flex-col">
									<label htmlFor="name" className="text-gray-700 font-semibold mb-2">
										Name *
									</label>
									<input
										type="text"
										id="name"
										placeholder="Full Name"
										value={formDetails.name}
										onChange={handleInputChange}
										className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
										required
									/>
								</div>

								<div className="flex flex-col">
									<label htmlFor="subject" className="text-gray-700 font-semibold mb-2">
										Subject
									</label>
									<input
										type="text"
										id="subject"
										placeholder="The Subject"
										value={formDetails.subject}
										onChange={handleInputChange}
										className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
									/>
								</div>

								<div className="flex flex-col">
									<label htmlFor="email" className="text-gray-700 font-semibold mb-2">
										Email *
									</label>
									<input
										type="email"
										id="email"
										placeholder="Email Address"
										value={formDetails.email}
										onChange={handleInputChange}
										className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
										required
									/>
								</div>

								<div className="flex flex-col">
									<label htmlFor="phone" className="text-gray-700 font-semibold mb-2">
										Phone Number *
									</label>
									<input
										type="tel"
										id="phone"
										placeholder="Phone Number"
										value={formDetails.phone}
										onChange={handleInputChange}
										className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
										required
									/>
								</div>

								<div className="col-span-1 md:col-span-2 flex flex-col">
									<label htmlFor="message" className="text-gray-700 font-semibold mb-2">
										Your Message *
									</label>
									<textarea
										id="message"
										rows="5"
										placeholder="Type your message..."
										value={formDetails.message}
										onChange={handleInputChange}
										className="border border-gray-300 rounded-md p-3 focus:ring focus:ring-blue-300"
										required
									/>
								</div>

								<div className="col-span-1 md:col-span-2 flex justify-start gap-4">
									<button
										type="submit"
										className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition"
										disabled={isSubmitting}
									>
										{isSubmitting ? "Sending..." : "Send Message"}
									</button>
									<button
										type="reset"
										className="bg-gray-200 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-300 transition"
										onClick={() =>
											setFormDetails({
												name: "",
												email: "",
												phone: "",
												subject: "",
												message: "",
											})
										}
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
