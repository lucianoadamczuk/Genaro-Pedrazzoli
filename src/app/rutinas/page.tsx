import { Button, Text, Title } from '@/components';
import { contentRoutines } from '@/contents';
import { Header, Section } from '@/layouts';
import styles from './routines.module.css';
import Link from 'next/link';
import { dataProducts } from '@/data';
import { configRoutes } from '@/configurations';
export default function page() {
	const { header, intro } = contentRoutines;

	const { routines } = dataProducts;
	return (
		<>
			<Header
				bgMobile={header.bgMobile}
				bgDesktop={header.bgDesktop}
				animated={header.animated}
				title={header.title}
				subtitle={header.subtitle}
			/>

			<main>
				<Section color='dark'>
					<Title
						color='primary'
						size='xl'
						tag='h3'
						text={intro.title}
						centered
					/>
					<Text
						color='light'
						size='md'
						tag='p'
						centered
						text={intro.paragraph}
					/>
				</Section>

				<Section>
					<div className={styles.cardsContainer}>
						{Object.values(routines).map((item, index) => (
							<article key={`routine_${index}`} className={styles.card}>
								<div>
									<Title color='dark' size='l' tag='h5' text={item.title} />

									<Text
										color='dark'
										size='sm'
										tag='p'
										text={item.description}
									/>
								</div>
								<Button
									color='dark'
									href={`${configRoutes.buy.pathname}?producto=${item.slot}`}
									text='Ver más'
								/>
							</article>
						))}
					</div>
				</Section>
			</main>
		</>
	);
}
