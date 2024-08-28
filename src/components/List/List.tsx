import { Colors } from '@/types';
import styles from './List.module.css';
import styleColors from '../../styles/colors.module.css';
interface Props {
	display: string[];
	color: Extract<Colors, 'light' | 'dark'>;
}
export default function List({ display, color }: Props) {
	return (
		<ul className={`${styles.list} ${styleColors[color]}`}>
			{display.map((item) => (
				<li key={item.replace(/\s+/g, '-')}> {item} </li>
			))}
		</ul>
	);
}
