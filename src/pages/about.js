import NavBar from "@/components/NavBar";
import Head from "next/head";
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
			<div className="page-container">hello</div>
		</>
	);
};

export default about;
