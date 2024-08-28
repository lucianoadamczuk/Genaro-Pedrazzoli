'use client';
import { Title } from '@/components';
import styles from './Header.module.css';
import { useEffect, useState } from 'react';
interface Props {
	title: string;
	subtitle: string;
	bgMobile: string;
	bgDesktop: string;
	animated?: string;
}
export default function Header({
	title,
	subtitle,
	bgMobile,
	bgDesktop,
	animated,
}: Props) {
	const [coordinates, setCoordinates] = useState({
		x: 0,
		y: 0,
		windowCenter: 0,
	});

	function handleAnimation(event: React.MouseEvent<HTMLElement>) {
		setCoordinates({
			x: event.clientX,
			y: event.clientY,
			windowCenter: window.innerWidth / 2,
		});
	}

	const horizontalAnimation = ` ${
		0.1 * (coordinates.windowCenter - coordinates.x)
	}`;
	const verticalAnimation = ` ${
		0.1 * (coordinates.windowCenter - coordinates.y)
	}`;

	return (
		<header className={styles.header} onMouseMove={handleAnimation}>
			<div className={styles.contentContainer}>
				<Title color='primary' size='xxxl' tag='h1' centered text={title} />
				<Title color='light' size='l' tag='h5' centered text={subtitle} />
			</div>

			<img src={bgMobile} alt='Fondo de pantalla' className={styles.bgMobile} />
			<img
				src={bgDesktop}
				alt='Fondo de pantalla'
				className={styles.bgDesktop}
				style={{
					transform: `translateX(${-horizontalAnimation}px) translateY(${-verticalAnimation}px)`,
				}}
			/>
			<img
				src={animated}
				alt='Fondo de pantalla'
				className={styles.animated}
				style={{
					transform: `translateX(${horizontalAnimation}px) translateY(${verticalAnimation}px)`,
				}}
			/>
		</header>
	);
}
