import { Colors } from '@/types';
import styles from './Section.module.css';
import { CSSProperties, ReactElement, ReactNode } from 'react';

interface Props {
	children: ReactNode;
	color?: Extract<Colors, 'dark'>;
	bgMobile?: string;
	bgDesktop?: string;
}

/**
 * @description
 * Layout componente to create section and wrap components.
 * @param {props} Props - Component's props.
 * @param {string} [props.color] - Background color variants.
 * @param {string} [props.bgMobile] - Background image for mobile devices.
 * @param {string} [props.bgDesktop] - Background image for desktop devices.
 * @returns {ReactElement}
 */

export default function Section({
	children,
	color,
	bgMobile,
	bgDesktop,
}: Props): ReactElement {
	const backgroundStyles = {
		'--bgMobile': `url(${bgMobile})`,
		'--bgDesktop': `url(${bgDesktop})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundAttachment: 'fixed',
	} as CSSProperties;

	return (
		<section
			className={`${styles.section} ${color ? styles[color] : ''} `}
			style={bgMobile && bgDesktop ? backgroundStyles : {}}
		>
			<div
				className={`${styles.contentContainer} ${
					bgMobile && bgDesktop ? styles.overlay : ''
				}`}
			>
				{children}
			</div>
		</section>
	);
}
