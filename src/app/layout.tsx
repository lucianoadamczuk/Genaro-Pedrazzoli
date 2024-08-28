import type { Metadata } from 'next';
import { configMetaData } from '@/configurations';
import './globals.css';
import { Footer, Navbar } from '@/layouts';

export const metadata: Metadata = {
	title: configMetaData.title,
	description: configMetaData.description,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='sp'>
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
