import { ReactNode } from 'react';
import Text from '../Text/Text';
import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';
import styles from './Button.module.css';
import { Colors } from '@/types';
interface Props {
	href: Url;
	color: Exclude<Colors, 'primary' | 'muted'>;
	text: string;
	children?: ReactNode;
}
export default function Button({ href, color, children, text }: Props) {
	return (
		<button className={`${styles.button} ${styles[color]}`}>
			<Link href={href}>
				{children}
				<Text
					size='sm'
					tag='p'
					color={color === 'dark' ? 'dark' : 'light'}
					centered
					highlighted
					text={text}
				/>
			</Link>
		</button>
	);
}
