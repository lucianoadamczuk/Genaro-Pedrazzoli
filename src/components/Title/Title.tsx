import { Colors, Sizes } from '@/types';
import styles from './Title.module.css';
import sizeStyles from '../../styles/sizes.module.css';
import gradientStyles from '../../styles/gradients.module.css';

import { ReactElement } from 'react';
interface Props {
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
	text: string;
	color: Colors;
	size: Sizes;
	centered?: boolean;
}

/**
 * @description - Componente which displays paragraps or text..
 * @param {props} Props - Componente props.
 * @param {Element} props.tag - Element tag.
 * @param {string} props.text - Text to display.
 * @param {string} props.color - Text color.
 * @param {string} props.size - Text size.
 * @param {boolean} props.centered - Text align center.
 * @returns {ReactElement}
 */

export default function Title({
	tag: Tag,
	text,
	color,
	size,
	centered,
}: Props): ReactElement {
	return (
		<Tag
			className={`
        ${styles.title}
        ${gradientStyles[color]} 
        ${sizeStyles[size]} 
        ${centered ? styles.centered : ''}
        `}
		>
			{text}
		</Tag>
	);
}
