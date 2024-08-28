'use client';

import { useRef, useState } from 'react';
import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import Title from '../Title/Title';

import styles from './Accordion.module.css';

interface Props {
	display: { question: string; answer: string }[];
}
export default function Accordion({ display }: Props) {
	const [accordionIndex, setAccordionIndex] = useState<null | number>(null);
	const answerRef = useRef<null | HTMLDivElement>(null);
	return (
		<>
			{display.map(({ question, answer }, index) => {
				return (
					<article
						key={question.replace(/\s+/g, '-')}
						className={styles.accordion}
						onClick={() =>
							setAccordionIndex((prevState) =>
								prevState === index ? null : index
							)
						}
					>
						{/* -------------------------------- question -------------------------------- */}
						<div className={styles.question}>
							<Title color='dark' size='md' tag='h5' text={question} />

							<Icon
								as='arrow'
								color='secondary'
								size='xs'
								style={{
									transitionDuration: 'var(--normal)',
									rotate: accordionIndex === index ? '180deg' : '0deg',
								}}
							/>
						</div>

						{/* --------------------------------- answer --------------------------------- */}
						<div
							ref={answerRef}
							className={styles.answer}
							style={{
								height:
									accordionIndex === index
										? `${answerRef.current?.scrollHeight}px`
										: '0px',
							}}
						>
							<Text color='muted' size='sm' tag='small' text={answer} />
						</div>
					</article>
				);
			})}
		</>
	);
}
