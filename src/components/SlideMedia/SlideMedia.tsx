import { Icons } from '@/types';

import Text from '../Text/Text';
import Title from '../Title/Title';
import styles from './SlideMedia.module.css';
import Icon from '../Icon/Icon';
interface Props {
	title: string;
	text: string;
	background: string;
	icon: string;
}
export default function SlideMedia({ title, text, background, icon }: Props) {
	return (
		<article className={styles.slideMedia}>
			<div>
				<Title color='primary' size='md' tag='h6' text={title} />
				<Text color='light' size='sm' tag='small' text={text} />
			</div>
			<Icon as={icon as Icons} color='secondary' size='md' />
			<img
				src={background}
				alt='Poster de la diapositiva'
				className={styles.image}
			/>
		</article>
	);
}
