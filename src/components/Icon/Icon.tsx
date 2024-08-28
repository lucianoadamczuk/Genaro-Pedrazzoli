import { Colors, Icons, Sizes } from '@/types';
import {
	AlignRight,
	ChevronDown,
	CircleCheckBig,
	CircleX,
	Instagram,
	Linkedin,
	Mail,
	Phone,
	ShoppingCart,
	Tent,
	Twitch,
	X,
	Youtube,
} from 'lucide-react';
import { CSSProperties } from 'react';
import styles from './Icon.module.css';
import styleColors from '../../styles/colors.module.css';
interface Props {
	as: Icons;
	color: Extract<Colors, 'light' | 'secondary' | 'success' | 'danger'>;
	size: Extract<Sizes, 'xs' | 'sm' | 'md'>;
	className?: string;
	style?: CSSProperties;
	onClick?: () => void;
}
export default function Icon({
	as,
	color,
	size,
	className,
	style,
	onClick,
}: Props) {
	return (
		<div
			className={`
        ${styles.icon} 
        ${styleColors[color]}
        ${styles[size]}
				${className}
        `}
			style={style}
			onClick={onClick}
		>
			{as === 'menu' ? (
				<AlignRight />
			) : as === 'x' ? (
				<X />
			) : as === 'instagram' ? (
				<Instagram />
			) : as === 'buy' ? (
				<ShoppingCart />
			) : as === 'linkedIn' ? (
				<Linkedin />
			) : as === 'twitch' ? (
				<Twitch />
			) : as === 'youtube' ? (
				<Youtube />
			) : as === 'mail' ? (
				<Mail />
			) : as === 'web' ? (
				<Tent />
			) : as === 'phone' ? (
				<Phone />
			) : as === 'arrow' ? (
				<ChevronDown />
			) : as === 'tikTok' ? (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='16'
					height='16'
					fill='currentColor'
					viewBox='0 0 16 16'
				>
					<path d='M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z' />
				</svg>
			) : as === 'check' ? (
				<CircleCheckBig />
			) : as === 'error' ? (
				<CircleX />
			) : (
				''
			)}
		</div>
	);
}
