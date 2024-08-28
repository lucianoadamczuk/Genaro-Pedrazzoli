import { Button, List, Title } from '@/components';
import { contentConsultings } from '@/contents';
import { dataProducts } from '@/data';
import { Grid, Header, Section } from '@/layouts';
import styles from './consultings.module.css';
import { configRoutes } from '@/configurations';

export default function page() {
	const { header } = contentConsultings;

	const { basic, standard, premium } = dataProducts.consultings;
	const consultings = [basic, standard, premium];

	return (
		<>
			<Header
				bgMobile={header.bgMobile}
				bgDesktop={header.bgDesktop}
				animated={header.animated}
				title={header.title}
				subtitle={header.subtitle}
			/>

			{consultings.map((item, index) => (
				<Section
					key={`consulting_service_${index}`}
					color={index === 1 ? 'dark' : undefined}
				>
					<Grid>
						<div>
							<Title color='primary' size='xl' tag='h3' text={item.name} />
							<List
								color={index === 1 ? 'light' : 'dark'}
								display={item.description}
							/>
						</div>

						<div className={styles.videoContainer}>
							<video
								src={item.video}
								controls
								style={{
									width: '100%',
									height: '100%',
								}}
							></video>
							<Button
								color={index === 1 ? 'light' : 'dark'}
								href={`${configRoutes.buy.pathname}?producto=${item.slot}`}
								text='Ver Más'
							/>
						</div>
					</Grid>
				</Section>
			))}
		</>
	);
}
