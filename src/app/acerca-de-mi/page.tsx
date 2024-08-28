import { Button, Text, Title } from '@/components';
import { contentAboutMe } from '@/contents';
import { ButtonsContainer, Grid, Header, Section } from '@/layouts';
import styles from './aboutMe.module.css';
import { configRoutes } from '@/configurations';
export default function page() {
	const { header, beginning, currently, lastWords } = contentAboutMe;
	return (
		<>
			<Header
				bgMobile={header.bgMobile}
				bgDesktop={header.bgDesktop}
				animated={header.animated}
				title={header.title}
				subtitle={header.subtitle}
			/>

			{/* -------------------------------- beginning ------------------------------- */}
			<Section>
				<Grid>
					<div>
						<Title color='primary' size='xl' tag='h3' text={beginning.title} />
						<Text
							color='dark'
							size='md'
							tag='p'
							highlighted
							text={beginning.paragraph}
						/>
					</div>

					<div className={styles.imageContainer}>
						<img
							src='/images/about/rocket.png'
							alt=''
							className={styles.rocket}
						/>

						<div className={styles.sky}></div>
					</div>
				</Grid>
			</Section>

			{/* -------------------------------- currently ------------------------------- */}
			<Section bgMobile={currently.bgMobile} bgDesktop={currently.bgDesktop}>
				<Grid>
					<div>
						<Title color='primary' size='xl' tag='h3' text={currently.title} />
						<Text
							color='light'
							size='md'
							tag='p'
							highlighted
							text={currently.paragraph}
						/>
					</div>
				</Grid>
			</Section>

			{/* ------------------------------- last words ------------------------------- */}
			<Section>
				<Grid>
					<div>
						<Title color='primary' size='xl' tag='h3' text={lastWords.title} />
						<Text color='dark' size='md' tag='p' text={lastWords.paragraph} />
					</div>

					<ButtonsContainer>
						<Button
							href={configRoutes.consultings.pathname}
							color='dark'
							text={configRoutes.consultings.name}
						/>

						<Button
							href={configRoutes.routines.pathname}
							color='dark'
							text={configRoutes.routines.name}
						/>
					</ButtonsContainer>
				</Grid>
			</Section>
		</>
	);
}
