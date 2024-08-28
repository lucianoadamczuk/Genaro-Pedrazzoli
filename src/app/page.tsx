import { Button, CarouselResponsive, List, Text, Title } from '@/components';
import Accordion from '@/components/Accordion/Accordion';
import { configRoutes } from '@/configurations';
import { contentHome } from '@/contents';
import { Grid, Header, Section } from '@/layouts';
import ButtonsContainer from '@/layouts/ButtonsContainer/ButtonsContainer';
import styles from './home.module.css';
import Link from 'next/link';

export default function Home() {
	const {
		header,
		intro,
		about,
		objetive,
		library,
		carousel,
		frequentQuestions,
	} = contentHome;

	return (
		<>
			{/* --------------------------------- header --------------------------------- */}
			<Header
				title={header.title}
				subtitle={header.subtitle}
				bgMobile={header.bgMobile}
				bgDesktop={header.bgDesktop}
				animated={header.animated}
			/>
			<main>
				{/* ---------------------------------- intro --------------------------------- */}
				<Section>
					<Grid>
						<div>
							<Title color='dark' size='xl' tag='h3' text={intro.title} />
							<List color='dark' display={intro.list} />
						</div>

						<div className={styles.bicepsContainer}>
							<div className={styles.blob}></div>

							<img
								src='/images/home/biceps.png'
								alt='Un biceps'
								className={styles.biceps}
							/>
						</div>
					</Grid>
				</Section>
				{/* ---------------------------------- about --------------------------------- */}
				<Section bgMobile={about.bgMobile} bgDesktop={about.bgDesktop}>
					<Grid>
						<div>
							<Title tag='h3' color='primary' size='xl' text={about.title} />
							<Text
								color='light'
								size='md'
								tag='p'
								highlighted
								text={about.paragraph}
							/>
						</div>

						<Button
							href={configRoutes.about.pathname}
							color='light'
							text='Ver más'
						/>
					</Grid>
				</Section>
				{/* -------------------------------- objetive -------------------------------- */}
				<Section>
					<Grid>
						<div>
							<Title tag='h3' color='primary' size='xl' text={objetive.title} />
							<Text
								color='dark'
								size='md'
								tag='p'
								highlighted
								text={objetive.paragraph}
							/>
						</div>
						<ButtonsContainer>
							<Button
								href={configRoutes.consultings.pathname}
								color='secondary'
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
				{/* --------------------------------- library -------------------------------- */}
				<Section bgMobile={library.bgMobile} bgDesktop={library.bgDesktop}>
					<Grid>
						<div>
							<Title tag='h3' color='primary' size='xl' text={library.title} />
							<Text
								color='light'
								size='md'
								tag='p'
								highlighted
								text={library.paragraph}
							/>
						</div>

						<Button
							href={configRoutes.library.pathname}
							color='light'
							text={configRoutes.library.name}
						/>
					</Grid>
				</Section>
				{/* -------------------------------- carousel -------------------------------- */}
				<CarouselResponsive displayMedia={carousel} />

				{/* --------------------------- frequent questions --------------------------- */}
				<Section>
					<div>
						<Title
							color='primary'
							size='xl'
							tag='h3'
							text='Preguntas frecuentes'
						/>

						<Accordion display={frequentQuestions.questions} />
					</div>
				</Section>
			</main>
		</>
	);
}
