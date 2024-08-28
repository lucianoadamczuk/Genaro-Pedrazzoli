import { Colors, Sizes } from '@/types';
import styles from './Text.module.css';
import sizeStyles from '../../styles/sizes.module.css';
import colorStyles from '../../styles/colors.module.css';
import { ReactElement } from 'react';

interface Props {
	tag: 'p' | 'small';
	text: string[] | string;
	color: Exclude<Colors, 'primary'>;
	size: Extract<Sizes, 'md' | 'sm' | 'xs'>;
	centered?: boolean;
	highlighted?: boolean;
}

/**
 * @description - Componente which displays paragraps or text..
 * @param {props} Props - Componente props.
 * @param {Element} props.tag - Element tag.
 * @param {string[] | string} props.text - Text to display.
 * @param {string} props.color - Text color.
 * @param {string} props.size - Text size.
 * @param {boolean} props.centered - Text align center.
 * @param {boolean} [props.highlighted] - Text bold.
 * @returns {ReactElement}
 */

export default function Text({
	tag: Tag,
	text,
	color,
	size,
	centered,
	highlighted,
}: Props): ReactElement {
	//componente styles
	const className = `
    ${colorStyles[color]} 
    ${sizeStyles[size]} 
    ${centered ? styles.centered : ''} 

  `;
	return (
		<>
			{Array.isArray(text) ? (
				<div className={styles.paragraphsContainer}>
					{text.map((line, index) => {
						// component key
						const key = line.replace(/\s+/g, '-');
						return (
							<Tag
								key={key}
								className={`${className} 
								${highlighted && text.length - 1 === index ? styles.highlighted : ''} `}
							>
								{line}
							</Tag>
						);
					})}
				</div>
			) : (
				<Tag
					className={`${className} ${highlighted ? styles.highlighted : ''} `}
				>
					{text}
				</Tag>
			)}
		</>
	);
}
