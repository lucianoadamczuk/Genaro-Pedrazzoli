import { Button, Text, Title } from '@/components';
import { configRoutes } from '@/configurations';
import { contentLibrary } from '@/contents/library';
import { dataProducts } from '@/data';
import { Grid, Header, Section } from '@/layouts';

import styles from './library.module.css';
export default function page() {
	const { header, intro } = contentLibrary;

	const libraryValues = Object.values(dataProducts.library);
	return (
		<>
			<Header
				bgMobile={header.bgMobile}
				bgDesktop={header.bgDesktop}
				animated={undefined}
				title={header.title}
				subtitle={header.subtitle}
			/>

			<main>
				<Section>
					<Title color='dark' size='xl' tag='h3' text={intro.title} centered />
					<Text
						color='dark'
						size='md'
						tag='p'
						highlighted
						centered
						text={intro.paragraph}
					/>

					<img
						src='/images/library/kettlebell.png'
						alt='Ketlebell'
						className={styles.ketlebell}
					/>
				</Section>

				{libraryValues.map((item, index) => (
					<Section
						key={`producto_${item.slot}`}
						color={index === 1 ? 'dark' : undefined}
					>
						<Grid>
							<div>
								<Title color='primary' size='xl' tag='h3' text={item.name} />{' '}
								<Text
									color={index === 1 ? 'light' : 'dark'}
									size='md'
									tag='p'
									text={item.description}
								/>
							</div>

							<Button
								href={`${configRoutes.buy.pathname}?producto=${item.slot}`}
								color={index === 1 ? 'light' : 'dark'}
								text='Ver más'
							/>
						</Grid>
					</Section>
				))}
			</main>
		</>
	);
}
