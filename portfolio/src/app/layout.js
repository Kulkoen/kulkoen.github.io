import Footer from "@/components/Footer";
import Navbar from "../components/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
	subsets: ["latin"],
	variable: "--font-mont",
}); //initializing the font

export const metadata = {
	title: "Keefe Oentoro",
	description: "Some things about Keefe Oentoro",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${montserrat.variable} font-mont`}>
			<body className="bg-light w-full min-h-screen ">
				<Navbar />
				<main className="w-full h-screen bg-light p-32 pt-0 ">{children}</main>
				<Footer />
			</body>
		</html>
	);
	// Should place things that need to stay consistent across the routes (e.g. navbar, footer)
}
