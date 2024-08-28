'use client';

import { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import { Icon, Text, Title } from '@/components';
import { AlignRight, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { configRoutes } from '@/configurations';

interface Props {}
export default function Navbar({}: Props) {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const pathname = usePathname();

	useEffect(() => {
		setIsOpen(false);
	}, [pathname]);

	// routes
	const routes = Object.values(configRoutes);
	return (
		<nav className={styles.navbar}>
			{/* ---------------------------------- logo ---------------------------------- */}
			<Title color='primary' size='sm' tag='h6' text='Genaro Pedrazzoli' />

			{/* ---------------------------------- icons --------------------------------- */}

			<Icon
				className={styles.mobileIcon}
				as='menu'
				color='light'
				size='sm'
				style={{ display: isOpen ? 'none' : 'block' }}
				onClick={() => setIsOpen(true)}
			/>
			<Icon
				className={styles.mobileIcon}
				as='x'
				color='light'
				size='sm'
				style={{ display: isOpen ? 'block' : 'none' }}
				onClick={() => setIsOpen(false)}
			/>

			{/* ---------------------------------- links --------------------------------- */}
			<div
				className={styles.linksContainer}
				style={{
					left: isOpen ? 0 : '100vw',
					opacity: isOpen ? 1 : 0,
				}}
			>
				{routes.map((route, index) => {
					const key = route.name.replace(/\s+/g, '-');
					const isLast = routes.length - 1 === index;
					return (
						<Link key={key} href={route.pathname}>
							<Text
								color={!isLast ? 'light' : 'secondary'}
								size='sm'
								tag='p'
								text={route.name}
							/>
						</Link>
					);
				})}
			</div>
		</nav>
	);
}
