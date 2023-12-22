import NavBar from "@/components/NavBar";
import Head from "next/head";
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
		</>
	);
};

export default home;
